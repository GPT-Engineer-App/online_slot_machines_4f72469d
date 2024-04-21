import React, { useState, useEffect, useContext } from "react";
import { Box, Button, Flex, Text, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, ModalCloseButton, useDisclosure } from "@chakra-ui/react";
import { MockAPIContext } from "../contexts/MockAPIContext";

const GenericGame = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [gameState, setGameState] = useState("ready"); // 'ready', 'playing', 'won', 'lost'

  const startGame = () => {
    // Logic to start the game
    setGameState("playing");
  };

  const { playGame, gameOutcome, resetGameOutcome } = useContext(MockAPIContext);

  const endGame = async (result) => {
    setGameState(result);
    onOpen();
    await playGame("Generic Game");
  };

  useEffect(() => {
    if (gameOutcome) {
      setGameState(gameOutcome);
      resetGameOutcome();
    }
  }, [gameOutcome, resetGameOutcome]);

  return (
    <Flex direction="column" align="center" justify="center" minH="100vh" bg="gray.700" p={4}>
      <Box bg="gray.600" w="full" h="400px" mb={4}>
        {/* Game area */}
        <Text color="white" fontSize="xl">
          {gameState === "ready" && "Press Play to Start"}
          {gameState === "playing" && "Game is in progress..."}
          {gameState === "won" && "Congratulations! You won!"}
          {gameState === "lost" && "Game over. Try again!"}
        </Text>
      </Box>
      <Flex justifyContent="space-between" w="full" mt={4}>
        <Button colorScheme="green" onClick={() => startGame()} isDisabled={gameState !== "ready"} aria-label="Start Game">
          Play
        </Button>
        <Button colorScheme="red" onClick={() => endGame("won")} isDisabled={gameState !== "playing"} aria-label="Win Game">
          Win
        </Button>
        <Button colorScheme="blue" onClick={() => endGame("lost")} isDisabled={gameState !== "playing"} aria-label="Lose Game">
          Lose
        </Button>
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Game Result</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {gameState === "won" && <Text>Congratulations! You've won the game!</Text>}
            {gameState === "lost" && <Text>Sorry, you've lost the game. Better luck next time!</Text>}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default GenericGame;
