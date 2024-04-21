import React from 'react';
import {
  Box,
  Button,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { FaPlay } from 'react-icons/fa';

const MightyWildPantherGame = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        maxW="sm"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        p="6"
        bg="gray.700"
        _hover={{ bg: "gray.600" }}
        role="group"
        cursor="pointer"
        onClick={onOpen}
      >
        <Image
          src="https://via.placeholder.com/150?text=Mighty+Wild+Panther"
          alt="Mighty Wild Panther Game"
          _groupHover={{ opacity: 0.8 }}
        />
        <Button rightIcon={<FaPlay />} colorScheme="teal" variant="solid">
          Play Now
        </Button>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Mighty Wild Panther</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              Embark on a thrilling adventure with the Mighty Wild Panther and discover the riches of the jungle.
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="teal" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default MightyWildPantherGame;