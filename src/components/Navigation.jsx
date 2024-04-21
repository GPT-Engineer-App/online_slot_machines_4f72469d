import React from "react";
import { Flex, Text, Link, HStack } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding="1rem" bg="gray.800" color="white" boxShadow="sm" _hover={{ bg: "gray.700" }}>
      <Flex align="center" mr={5}>
        <Text fontSize="2xl" fontWeight="bold" letterSpacing="wider">
          5G Casino
        </Text>
      </Flex>

      <HStack spacing={8} alignItems="center" justifyContent="flex-end" width={{ base: "full", md: "auto" }}>
        <Link as={NavLink} to="/" p={2} aria-label="Home">
          Home
        </Link>
        <Link as={NavLink} to="/favorites" p={2}>
          Favorites
        </Link>
        <Link as={NavLink} to="/pokies" p={2}>
          Pokies
        </Link>
        <Link as={NavLink} to="/live-casino" p={2}>
          Live Casino
        </Link>
        <Link as={NavLink} to="/promotions" p={2}>
          Promotions
        </Link>
      </HStack>
    </Flex>
  );
};

export default Navigation;
