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
import { useUser } from "@clerk/clerk-react";

export default function FormComponent() {
  const { jobTypeName } = useParams<{ jobTypeName: string }>();
  const location = useLocation();
  const jobType = location.state?.jobType as JobType;
  const { user } = useUser();

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

  const handleSubmit = async () => {
    try {
      const createNewReservation = await PostNewReservation({
        userId: user!.id,
        idJobType: jobType.idJobType,
        reservationDate: formData.reservationDate,
        reservationTime: formData.reservationTime,
        observations: formData.observations,
      });

      if (createNewReservation.isSuccess) {
        showSuccessToast("Reservation created successfully");
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
            px={{ base: 4, md: 20, lg: 80 }}
            h="250px"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            border="1px solid"
            borderColor="white"
            textAlign="center"
          >
            <Text
              fontSize={{ base: "2xl", md: "3xl" }}
              fontWeight="bold"
              color="black"
            >
              {jobTypeName}
            </Text>
            <Text
              fontSize={{ base: "md", md: "lg" }}
              color="black"
              textAlign="center"
              maxWidth="600px"
              lineHeight="1.6"
              mt={2}
            >
              {jobType.description}
            </Text>
          </Box>

          {/* Form Section */}
          <Box
            w="full"
            maxW="800px"
            p={{ base: 4, md: 8 }}
            borderRadius="xl"
            border="0.1px solid"
            borderColor="white"
            shadow="sm"
          >
            <Text
              fontSize={{ base: "lg", md: "xl" }}
              pb={8}
              fontWeight="bold"
              color="black"
              textAlign="center"
            >
              Make your reservation here
            </Text>

            {/* Input Fields */}
            <VStack>
              <HStack w="full" flexDirection={{ base: "column", md: "row" }}>
                <Field label="Reservation Date">
                  <Input
                    bg="gray.400"
                    type="date"
                    placeholder="Select Date"
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
                    bg="gray.400"
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
                h="150px"
                bg="white"
                borderColor="#babbbd"
                color="black"
                _placeholder={{ color: "black" }}
                _hover={{ borderColor: "none" }}
                _focus={{ borderColor: "#98cc53", boxShadow: "none" }}
                value={formData.observations}
                onChange={(e) => handleChange("observations", e.target.value)}
              />
            </VStack>

            {/* Send Button */}
            <Button
              w={{ base: "full", md: "200px" }}
              mt={8}
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
