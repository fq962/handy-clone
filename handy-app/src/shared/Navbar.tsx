// src/components/Navbar.tsx
import { Button } from "@/components/ui/button";
import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { SignInButton, SignOutButton, useUser } from "@clerk/clerk-react";

const Navbar = () => {
  const { isSignedIn, user } = useUser();
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
          {!isSignedIn ? (
            // Botón de inicio de sesión si no está autenticado
            <SignInButton>
              <Button colorScheme="blue">Log In</Button>
            </SignInButton>
          ) : (
            // Mostrar el nombre del usuario y el botón de cierre de sesión
            <>
              <Text fontWeight="medium" color="gray.600">
                Hi, {user?.firstName || "User"}!
              </Text>
              <SignOutButton>
                <Button colorScheme="red">Log Out</Button>
              </SignOutButton>
            </>
          )}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
