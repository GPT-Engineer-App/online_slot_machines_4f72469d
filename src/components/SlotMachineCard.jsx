import React from "react";
import { Box, Heading, Text, Image, Button, useColorModeValue } from "@chakra-ui/react";
import { FaPlay } from "react-icons/fa";

const SlotMachineCard = ({ slotMachine }) => {
  const { name, description, image } = slotMachine;
  const bgColor = useColorModeValue("gray.100", "gray.700");
  const hoverBgColor = useColorModeValue("gray.200", "gray.600");

  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" bg={bgColor} _hover={{ bg: hoverBgColor }}>
      <Image src={image} alt={`${name}`} />
      <Box p="6">
        <Heading size="md" my="2">
          {name}
        </Heading>
        <Text mb="4">{description}</Text>
        <Button rightIcon={<FaPlay />} colorScheme="orange" variant="outline">
          Play Now
        </Button>
      </Box>
    </Box>
  );
};

export default SlotMachineCard;
