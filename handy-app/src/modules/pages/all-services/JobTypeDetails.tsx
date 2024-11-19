import { Field } from "@/components/ui/field";
import { PostNewReservation } from "@/core/services/JobRequest";
import { JobType } from "@/shared/interfaces/job.interface";
import Navbar from "@/shared/Navbar";
import {
  Box,
  Input,
  Textarea,
  Button,
  VStack,
  HStack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { showSuccessToast, ToastAlert } from "@/shared/utils/toast-alerts";

export default function FormComponent() {
  // const navigate = useNavigate();
  const { jobTypeName } = useParams<{ jobTypeName: string }>();
  const location = useLocation();
  const jobType = location.state?.jobType as JobType;

  const [formData, setFormData] = useState({
    reservationDate: "",
    reservationTime: "",
    observations: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  // Función para manejar el envío del formulario
  const handleSubmit = async () => {
    try {
      const createNewReservation = await PostNewReservation({
        idJobType: jobType.idJobType, // Supongo que "id" es una propiedad de `JobType`
        reservationDate: formData.reservationDate,
        reservationTime: formData.reservationTime,
        observations: formData.observations,
      });

      if (createNewReservation.isSuccess) {
        showSuccessToast("Reservation created successfully");
        // navigate("/");
      }
    } catch (error) {
      console.error("Failed to create reservation:", error);
    }
  };

  return (
    <>
      <ToastAlert richColors closeButton position="top-right" />
      <Navbar />
      <Box minH="100vh" pb={8}>
        <VStack>
          {/* Banner Section */}
          <Box
            w="100%"
            bg="#00cbff"
            px={80}
            h="250px"
            display="flex"
            flexDir={"column"}
            alignItems="center"
            justifyContent="center"
            border="1px solid"
            borderColor="white"
          >
            <Text fontSize="3xl" fontWeight={"bold"} color="black">
              {jobTypeName}
            </Text>
            <Text fontSize="lg" color="black">
              {jobType.description}
            </Text>
          </Box>

          {/* Form Section */}
          <Box
            w="full"
            maxW="800px"
            p={8}
            borderRadius="xl"
            border="0.1px solid"
            borderColor="white"
            shadow={"sm"}
          >
            <Text fontSize="lg" pb={8} fontWeight={"bold"} color="black">
              Make your reservation here
            </Text>
            {/* Input Fields */}
            <HStack mb={6}>
              <Field label="Reservation Date">
                <Input
                  type="date"
                  placeholder="Select Date"
                  bg="white"
                  border="1px solid"
                  borderColor="#babbbd"
                  color="black"
                  _placeholder={{ color: "black" }}
                  _hover={{ borderColor: "none" }}
                  _focus={{ borderColor: "#98cc53", boxShadow: "none" }}
                  value={formData.reservationDate}
                  onChange={(e) =>
                    handleChange("reservationDate", e.target.value)
                  }
                />
              </Field>
              <Field label="Reservation Time">
                <Input
                  type="time"
                  value={formData.reservationTime}
                  onChange={(e) =>
                    handleChange("reservationTime", e.target.value)
                  }
                />
              </Field>
            </HStack>

            {/* Textarea */}
            <Textarea
              placeholder="Observations"
              mb={6}
              h="150px"
              bg="white"
              borderColor="#babbbd"
              color="black"
              _placeholder={{ color: "black" }}
              _hover={{ borderColor: "none" }}
              _focus={{ borderColor: "#98cc53", boxShadow: "none" }}
              value={formData.observations}
              onChange={(e) => handleChange("observations", e.target.value)}
              // value={jobRequestData.observations}
              // onChange={(e) => handleChange("observations", e.target.value)}
            />

            {/* Send Button */}
            <Button
              w="200px"
              mx="auto"
              display="block"
              bg="#98cc53"
              color="white"
              border="1px solid"
              borderColor="whiteAlpha.300"
              _hover={{ bg: "blackAlpha.400" }}
              _active={{ bg: "blackAlpha.500" }}
              onClick={handleSubmit}
            >
              Send
            </Button>
          </Box>
        </VStack>
      </Box>
    </>
  );
}
