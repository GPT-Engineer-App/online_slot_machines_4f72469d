import React from "react";
import { Box, Text } from "@chakra-ui/react";
import TopGamesList from "../components/TopGamesList";

const TopGames = () => {
  return (
    <Box p={5}>
      <Text fontSize="2xl" mb={4}>
        Top Games
      </Text>
      <TopGamesList />
    </Box>
  );
};

export default TopGames;
