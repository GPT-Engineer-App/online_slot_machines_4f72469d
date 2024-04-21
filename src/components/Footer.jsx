import { Box, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { MockAPIContext } from "../contexts/MockAPIContext";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box as="footer" bg="gray.900" color="white" py="4" textAlign="center">
      <Text>© {currentYear} Double Diamond Casino. All rights reserved.</Text>
    </Box>
  );
}

export default Footer;
