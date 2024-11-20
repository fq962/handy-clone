// src/components/ServiceButtons.tsx
import { Button, Flex } from "@chakra-ui/react";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
// import { FaSprayCan, FaTools } from "react-icons/fa";

const ServiceButtons = () => {
  const navigate = useNavigate();
  const { user } = useUser();

  const isNormalUser =
    user?.organizationMemberships[0]?.role === "org:normal_user";

  const navigateToMyRequests = () => {
    navigate("/my-requests", {
      state: {
        user: {
          id: user?.id,
          role: user?.organizationMemberships[0]?.role,
        },
      },
    });
  };

  return (
    <Flex justify="center" gap={6} mt={8} mb={16}>
      {isNormalUser && (
        <Button
          variant="outline"
          size="lg"
          p={8}
          bgColor={"white"}
          color={"black"}
          _hover={{ bg: "#8bc53e" }}
          onClick={() => navigateToMyRequests()}
        >
          My Requests
        </Button>
      )}
    </Flex>
  );
};

export default ServiceButtons;
