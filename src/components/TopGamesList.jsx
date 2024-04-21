import React from "react";
import { Box, List, ListItem, ListIcon } from "@chakra-ui/react";
import { FaTrophy } from "react-icons/fa";

const TopGamesList = () => {
  // Placeholder games data
  const games = [
    { id: 1, title: "Game 1", rating: 9.2 },
    { id: 2, title: "Game 2", rating: 9.0 },
    // More games...
  ];

  return (
    <Box>
      <List spacing={3}>
        {games.map((game) => (
          <ListItem key={game.id}>
            <ListIcon as={FaTrophy} color="goldenrod" />
            {game.title} - {game.rating}/10
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default TopGamesList;
