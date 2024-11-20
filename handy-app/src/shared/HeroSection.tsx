// src/components/HeroSection.tsx
import { Box, Heading, Text } from "@chakra-ui/react";

const HeroSection = () => {
  return (
    <Box textAlign="center" py={16} px={4}>
      <Heading as="h1" fontSize="4xl" fontWeight="bold" mb={4}>
        The easy, reliable way to take care of your home.
      </Heading>
      <Text fontSize="lg" color="gray.600">
        Your happiness is our goal. If you’re not happy, we’ll work to make it
        right. Our friendly customer service agents are available 24 hours a
        day, 7 days a week.
      </Text>
    </Box>
  );
};

export default HeroSection;
