import React from 'react';
import {
  Box,
  Heading,
  Text,
  Image,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react';
import { FaPlay } from 'react-icons/fa';

const GoldMinerGame = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        maxW="sm"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        p="6"
        bg="brand.700"
        _hover={{ bg: "brand.600" }}
        role="group"
        cursor="pointer"
        onClick={onOpen}
      >
        <Image
          src="https://via.placeholder.com/150?text=Gold+Miner+Game"
          alt="Gold Miner Game"
          _groupHover={{ opacity: 0.8 }}
        />
        <Heading size="md" my="2" color="orange.400">
          Gold Miner
        </Heading>
        <Text mb="4">
          Dig deep in the mine and uncover gold nuggets for big wins.
        </Text>
        <Button rightIcon={<FaPlay />} colorScheme="orange" variant="solid">
          Play Now
        </Button>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Gold Miner</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image
              src="https://via.placeholder.com/350?text=Gold+Miner+Game+Details"
              alt="Gold Miner Game Details"
            />
            <Text mt={4}>
              Enjoy the thrill of the Gold Miner game and win big!
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="orange" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default GoldMinerGame;