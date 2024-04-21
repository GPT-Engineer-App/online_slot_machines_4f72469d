import React, { useContext } from "react";
import { Box, Text, SimpleGrid, Button } from "@chakra-ui/react";
import { MockAPIContext } from "../contexts/MockAPIContext";

const FavoritesPage = () => {
  const { favoriteGames, games, toggleGameFavorite } = useContext(MockAPIContext);
  const favoriteGameDetails = games.filter((game) => favoriteGames.includes(game.name));

  return (
    <Box p={5}>
      <Text fontSize="2xl" mb={4}>
        Your Favorite Games
      </Text>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        {favoriteGameDetails.map((game, index) => (
          <Box key={index} borderWidth="1px" borderRadius="lg" overflow="hidden" p={6}>
            <Text fontWeight="bold">{game.name}</Text>
            <Text>{game.description}</Text>
            <Button colorScheme="red" onClick={() => toggleGameFavorite(game.name)}>
              Remove from Favorites
            </Button>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default FavoritesPage;
