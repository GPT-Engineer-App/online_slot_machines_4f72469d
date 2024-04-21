import { Box, Text } from "@chakra-ui/react";

function NotFoundPage() {
  return (
    <Box p={6} textAlign="center">
      <Text fontSize="xl">Page not found. Please check the URL and try again.</Text>
    </Box>
  );
}

export default NotFoundPage;
