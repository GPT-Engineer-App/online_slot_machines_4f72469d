import React from "react";
import { Box, Heading, Text, SimpleGrid, Button } from "@chakra-ui/react";
// Removed import of FaPlay icon since it's causing build issues

const LiveCasino = () => {
  return (
    <Box bg="gray.700" color="white" p={5} textAlign="center">
      <Heading mb={4}>Live Casino</Heading>
      <Text>
        Experience the real-time action of a live casino from the comfort of your home.
        <SimpleGrid columns={{ base: 1, md: 3 }} gap={6} px={6}>
          {/* Placeholder live casino games */}
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="6" bg="gray.700">
            <Text mb="4">Live Roulette</Text>
            <Button rightIcon={<Text fontSize="xl">▶️</Text>} colorScheme="blue" variant="outline">
              Play Now
            </Button>
          </Box>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="6" bg="gray.700">
            <Text mb="4">Live Blackjack</Text>
            <Button rightIcon={<Text fontSize="xl">▶️</Text>} colorScheme="blue" variant="outline">
              Play Now
            </Button>
          </Box>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="6" bg="gray.700">
            <Text mb="4">Live Baccarat</Text>
            <Button rightIcon={<Text fontSize="xl">▶️</Text>} colorScheme="blue" variant="outline">
              Play Now
            </Button>
          </Box>
          {/* More live casino games can be added here */}
        </SimpleGrid>
      </Text>
    </Box>
  );
};

export default LiveCasino;
