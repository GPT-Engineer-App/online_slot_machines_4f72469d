import React, { useState, useEffect, useContext } from "react";
import { Box, Flex, Text, Button, Select } from "@chakra-ui/react";
import { MockAPIContext } from "../contexts/MockAPIContext";
import useSound from "../hooks/useSound";
import PayoutTable from "./PayoutTable";

const SlotMachine = ({ selectedGame, onSpinEnd }) => {
  const { fetchBalance, updateBalance } = useContext(MockAPIContext);
  const [slots, setSlots] = useState(Array.from({ length: 3 }, () => Array.from({ length: 5 }, () => "?")));
  const [balance, setBalance] = useState(0);
  const [betAmount, setBetAmount] = useState(5);
  const [isSpinning, setIsSpinning] = useState(false);
  const [message, setMessage] = useState("");
  const [won, setWon] = useState(false);
  const [playSpinSound] = useSound("/sounds/spin.mp3");
  const [playWinSound] = useSound("/sounds/win.mp3");

  useEffect(() => {
    const getBalance = async () => {
      const fetchedBalance = await fetchBalance();
      setBalance(fetchedBalance);
    };
    getBalance();
  }, [fetchBalance]);

  const generateSlotResult = () => slots.map((reel) => Array.from({ length: 5 }, () => Math.floor(Math.random() * 5) + 1));

  const checkWin = (slotsArray) => {
    return new Set(slotsArray.flat()).size === 1;
  };

  const startSpin = async () => {
    if (balance >= betAmount) {
      setIsSpinning(true);
      playSpinSound();
      await updateBalance(balance - betAmount);
      const newSlots = generateSlotResult();
      setSlots(newSlots);
      const winResult = checkWin(newSlots);
      setWon(winResult);
      if (winResult) {
        const winAmount = betAmount * selectedGame.payout;
        await updateBalance(balance + winAmount);
        setMessage(`Congratulations! You won ${winAmount} credits!`);
        playWinSound();
      } else {
        setMessage("Sorry, you lost. Try again!");
      }
      setTimeout(() => {
        setIsSpinning(false);
        onSpinEnd(winResult);
      }, 2000);
    }
  };

  return (
    <Flex direction="column" align="center">
      <Text fontSize="xl" mb={4}>
        {selectedGame?.name} - Balance: {balance} credits
      </Text>
      <Flex mb={4}>
        <Text mr={2}>Bet Amount:</Text>
        <Select value={betAmount} onChange={(e) => setBetAmount(Number(e.target.value))}>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </Select>
      </Flex>
      <Flex>
        {slots.map((reelSlots, reelIndex) => (
          <Flex key={reelIndex} direction="column" align="center" m={1}>
            {reelSlots.map((slot, slotIndex) => (
              <Box key={slotIndex} borderWidth="1px" borderRadius="lg" p={4} width="80px" height="80px" display="flex" alignItems="center" justifyContent="center" fontSize="3xl" bg={isSpinning ? "gray.400" : "gray.300"} m={1} transition="background-color 0.5s ease">
                {isSpinning ? "?" : slot}
              </Box>
            ))}
          </Flex>
        ))}
      </Flex>
      <Button mt={4} colorScheme="blue" onClick={startSpin} isLoading={isSpinning} isDisabled={balance < betAmount} size="lg" _hover={{ transform: "scale(1.05)" }}>
        Spin ({betAmount} credits)
      </Button>
      <Text fontSize="2xl" color={won ? "green.500" : "red.500"} mt={4}>
        {message}
      </Text>
      <PayoutTable selectedGame={selectedGame} mt={8} />
    </Flex>
  );
};

export default SlotMachine;
