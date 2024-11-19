// src/components/ServiceButtons.tsx
import { Button, Flex } from "@chakra-ui/react";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
// import { FaSprayCan, FaTools } from "react-icons/fa";

const AdminsButtonsHome = () => {
  const navigate = useNavigate();
  const { user } = useUser();

  const navigateToManageHandymen = () => {
    navigate("/manage-handymen", {
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
      <Button
        variant="outline"
        size="lg"
        p={8}
        bgColor={"white"}
        color={"black"}
        _hover={{ bg: "#8bc53e" }}
        onClick={() => navigateToManageHandymen()}
      >
        Manage Handymen
      </Button>

      <Button
        bgColor={"#00cded"}
        color={"black"}
        variant="outline"
        size="lg"
        // leftIcon={<Icon as={FaTools} />}
        p={8}
        _hover={{ bg: "#00cbff" }}
        onClick={() => navigate("/jobs-by-user")}
      >
        Manage Jobs by User
      </Button>
    </Flex>
  );
};

export default AdminsButtonsHome;
