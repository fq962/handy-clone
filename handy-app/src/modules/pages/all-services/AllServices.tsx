// src/pages/ServicesPage.tsx
import { Box, Heading, Text } from "@chakra-ui/react";

const ServicesPage = () => {
  return (
    <Box textAlign="center" py={16} px={4}>
      <Heading as="h1" fontSize="4xl" fontWeight="bold" mb={4}>
        Services
      </Heading>
      <Text fontSize="lg" color="gray.600">
        Here you can find all the services we offer.
      </Text>
    </Box>
  );
};

export default ServicesPage;
