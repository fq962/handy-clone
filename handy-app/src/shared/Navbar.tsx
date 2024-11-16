// src/components/Navbar.tsx
import { Box, Flex, Link, Text } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box
      as="nav"
      py={4}
      px={8}
      boxShadow="sm"
      borderBottom="1px"
      borderColor="gray.200"
    >
      <Flex justify="space-between" align="center">
        {/* Logo */}
        <Box>
          <Text fontSize="2xl" fontWeight="bold" color="blue.500">
            handy
          </Text>
        </Box>

        {/* Right Links */}
        <Flex gap={8} align="center">
          <Link
            fontWeight="medium"
            color="gray.600"
            _hover={{ color: "gray.800" }}
          >
            Become a Pro
          </Link>
          <Link
            fontWeight="medium"
            color="gray.600"
            _hover={{ color: "gray.800" }}
          >
            Help
          </Link>
          <Link
            fontWeight="medium"
            color="gray.600"
            _hover={{ color: "gray.800" }}
          >
            Log In
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
