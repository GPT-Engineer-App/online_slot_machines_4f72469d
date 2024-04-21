import React from "react";
import { Box, Flex, Heading, Text, Image, SimpleGrid, Button, useColorModeValue } from "@chakra-ui/react";
import { FaPlay } from "react-icons/fa";

const Index = () => {
  const slotMachines = [
    {
      name: "Mystic Gems",
      description: "Uncover the secrets of the mystical gems and win big!",
      image: "https://images.unsplash.com/photo-1605459862899-f506150a7a80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxteXN0aWMlMjBnZW1zJTIwc2xvdCUyMG1hY2hpbmV8ZW58MHx8fHwxNzA0MTI1ODgxfDA&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      name: "Pharaoh's Fortune",
      description: "Experience the riches of ancient Egypt and seek your fortune.",
      image: "https://images.unsplash.com/photo-1605459862899-f506150a7a80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwaGFyYW9oJTIwc2xvdCUyMG1hY2hpbmV8ZW58MHx8fHwxNzA0MTI1ODgyfDA&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      name: "Space Adventure",
      description: "Blast off into space and spin the reels for interstellar prizes.",
      image: "https://images.unsplash.com/photo-1590053404184-ce4ee04f3d58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzcGFjZSUyMGFkdmVudHVyZSUyMHNsb3QlMjBtYWNoaW5lfGVufDB8fHx8MTcwNDEyNTg4Mnww&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      name: "Pirate's Gold",
      description: "Set sail with pirates and loot treasure chests for gold coins.",
      image: "https://images.unsplash.com/photo-1605459862899-f506150a7a80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwaXJhdGUlMjBzbG90JTIwbWFjaGluZXxlbnwwfHx8fDE3MDQxMjU4ODJ8MA&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      name: "Ocean's Mystery",
      description: "Dive deep into the ocean to discover hidden treasures and elusive marine creatures.",
      image: "https://images.unsplash.com/photo-ocean-treasures?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    },
    {
      name: "Jungle Quest",
      description: "Embark on an adventure through the dense jungle in search of lost ruins and legendary artifacts.",
      image: "https://images.unsplash.com/photo-jungle-adventure?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    },
    {
      name: "Lucky Leprechaun",
      description: "Find the leprechaun's pot of gold at the end of the rainbow in this enchanting slot.",
      image: "https://images.unsplash.com/photo-leprechaun-gold?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    },
    {
      name: "Arctic Fortune",
      description: "Brave the icy tundra and spin the reels for a chance at the arctic treasure.",
      image: "https://images.unsplash.com/photo-arctic-treasure?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    },
    // Removed duplicate game entry for 'Ancient Mythology'.
  ];

  const SlotMachineCard = ({ slotMachine }) => {
    const { name, description, image } = slotMachine;
    const bgColor = useColorModeValue("gray.100", "gray.700");
    const hoverBgColor = useColorModeValue("gray.200", "gray.600");

    return (
      <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" bg={bgColor} _hover={{ bg: hoverBgColor }}>
        <Image src={image} alt={`${name}`} />
        <Box p="6" shadow="md" _hover={{ shadow: "xl" }}>
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

  return (
    <Box bg="gray.700" color="white" pt={10} pb={20} textAlign="center">
      <Heading mb={4} size="2xl">
        Welcome to Double Diamond Casino
      </Heading>
      <Text fontSize="xl" mb={12}>
        Enjoy the thrill of our online casino with slots, live dealers, and more.
      </Text>
      <SimpleGrid columns={{ base: 1, md: 3 }} gap={6} px={6}>
        {slotMachines.slice(0, 15).map((machine, index) => (
          <SlotMachineCard key={index} slotMachine={machine} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Index;
