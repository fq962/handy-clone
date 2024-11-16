// src/components/ServiceButtons.tsx
import { Button, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
// import { FaSprayCan, FaTools } from "react-icons/fa";

const ServiceButtons = () => {
  const navigate = useNavigate();
  return (
    <Flex justify="center" gap={6} mt={8} mb={16}>
      <Button
        variant="outline"
        size="lg"
        // leftIcon={<Icon as={FaSprayCan} />}
        p={8}
        bgColor={"white"}
        color={"black"}
        // opacity={0.8}
        _hover={{ bg: "#8bc53e" }}
      >
        Home Cleaning
      </Button>
      <Button
        bgColor={"#00cded"}
        color={"black"}
        variant="outline"
        size="lg"
        // leftIcon={<Icon as={FaTools} />}
        p={8}
        _hover={{ bg: "#00cbff" }}
        onClick={() => navigate("/services")}
      >
        All Services
      </Button>
    </Flex>
  );
};

export default ServiceButtons;
