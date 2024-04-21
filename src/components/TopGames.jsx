import React from 'react';
import {
  Box,
  Heading,
  Image,
  SimpleGrid,
  Text,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaPlay } from 'react-icons/fa';

const TopGames = () => {
  const topGames = [
    // Dummy data simulating the top games
    {
      name: 'Game 1',
      description: 'Exciting game 1 description',
      image: 'https://via.placeholder.com/150?text=Game+1',
    },
    {
      name: 'Game 2',
      description: 'Exciting game 2 description',
      image: 'https://via.placeholder.com/150?text=Game+2',
    },
    // More games would be listed here
  ];

  return (
    <Box p="4">
      <Heading mb="6">Top Games</Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        {topGames.map((game, index) => (
          <Box key={index} borderWidth="1px" borderRadius="lg" overflow="hidden" p="6" bg={useColorModeValue('white', 'gray.700')}>
            <Image src={game.image} alt={game.name} />
            <Heading size="md" my="2">{game.name}</Heading>
            <Text mb="4">{game.description}</Text>
            <Button rightIcon={<FaPlay />} colorScheme="blue" variant="solid">
              Play Now
            </Button>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default TopGames;