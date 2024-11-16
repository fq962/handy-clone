// src/components/HeroSection.tsx
import { Box, Heading, Text } from "@chakra-ui/react";

const HeroSection = () => {
  return (
    <Box textAlign="center" py={16} px={4}>
      <Heading as="h1" fontSize="4xl" fontWeight="bold" mb={4}>
        The easy, reliable way to take care of your home.
      </Heading>
      <Text fontSize="lg" color="gray.600">
        Instantly book highly rated pros for cleaning and handyman tasks at an
        upfront price.
      </Text>
    </Box>
  );
};

export default HeroSection;
