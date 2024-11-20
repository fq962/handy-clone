import { CreateNewHandymen } from "@/core/services/Handymen";
import { showSuccessToast, ToastAlert } from "@/shared/utils/toast-alerts";
import {
  Box,
  Container,
  Heading,
  Text,
  Input,
  Textarea,
  VStack,
  Button,
  SelectRoot,
  createListCollection,
  SelectTrigger,
  SelectValueText,
  SelectContent,
  SelectItem,
} from "@chakra-ui/react";
import { useState } from "react";

export default function ManageHandymen() {
  const [selectedRating, setSelectedRating] = useState("");
  const [formData, setFormData] = useState({
    first_name: "",
    second_name: "",
    birthday: "",
    mail: "",
    rating: "",
    expertise: "",
    observations: "",
  });

  const handleRatingChange = (value: string) => {
    setSelectedRating(value);
    setFormData((prev) => ({
      ...prev,
      rating: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    const {
      first_name,
      second_name,
      birthday,
      mail,
      rating,
      expertise,
      observations,
    } = formData;
    const createHandymanData = await CreateNewHandymen({
      firstName: first_name,
      secondName: second_name,
      birthday,
      mail,
      rating: Number(rating),
      expertise,
      observations,
      skills: [],
    });

    if (createHandymanData.isSuccess) {
      showSuccessToast("Handyman created successfully");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <ToastAlert richColors closeButton position="top-right" />
      <Container justifyItems={"center"} maxW="container.xl" py={8}>
        <Box textAlign="center" mb={8}>
          <Heading as="h1" size="xl" mb={2}>
            Handymen
          </Heading>
          <Text color="gray.600">Manage your employees here.</Text>
        </Box>

        {/* Form Panel */}
        <Box
          height="720px"
          width={["100%", "80%", "60%"]}
          bg="gray.200"
          borderRadius="xl"
          transition="all 0.3s"
          _hover={{ transform: "scale(1.01)" }}
          p={6}
          overflowY="auto"
        >
          <form onSubmit={handleSubmit}>
            <VStack align="stretch">
              <Box>
                <label
                  htmlFor="first_name"
                  style={{
                    color: "black",
                    marginBottom: "0.5rem",
                    display: "block",
                  }}
                >
                  First Name
                </label>
                <Input
                  border={"none"}
                  id="first_name"
                  name="first_name"
                  bg="white"
                  value={formData.first_name}
                  onChange={handleChange}
                  required
                />
              </Box>

              <Box>
                <label
                  htmlFor="second_name"
                  style={{
                    color: "black",
                    marginBottom: "0.5rem",
                    display: "block",
                  }}
                >
                  Second Name
                </label>
                <Input
                  border={"none"}
                  id="second_name"
                  name="second_name"
                  bg="white"
                  value={formData.second_name}
                  onChange={handleChange}
                  required
                />
              </Box>

              <Box>
                <label
                  htmlFor="birthday"
                  style={{
                    color: "black",
                    marginBottom: "0.5rem",
                    display: "block",
                  }}
                >
                  Birthday
                </label>
                <Input
                  border={"none"}
                  id="birthday"
                  name="birthday"
                  type="date"
                  bg="white"
                  value={formData.birthday}
                  onChange={handleChange}
                  required
                />
              </Box>

              <Box>
                <label
                  htmlFor="mail"
                  style={{
                    color: "black",
                    marginBottom: "0.5rem",
                    display: "block",
                  }}
                >
                  First Name
                </label>
                <Input
                  border={"none"}
                  id="mail"
                  name="mail"
                  bg="white"
                  value={formData.mail}
                  onChange={handleChange}
                  required
                />
              </Box>

              <Box>
                <label
                  htmlFor="rating"
                  style={{
                    color: "black",
                    marginBottom: "0.5rem",
                    display: "block",
                  }}
                >
                  Rating
                </label>
                <SelectRoot
                  border={"none"}
                  id="rating"
                  name="rating"
                  bg="white"
                  value={[selectedRating]}
                  onValueChange={(e) => handleRatingChange(e.value[0])}
                  collection={ratingOptions}
                  required
                >
                  <SelectTrigger>
                    <SelectValueText placeholder="Select handyman" />
                  </SelectTrigger>
                  <SelectContent bgColor={"white"}>
                    {ratingOptions.items.map((rate) => (
                      <SelectItem
                        bgColor={"white"}
                        key={rate.value}
                        item={rate}
                      >
                        {rate.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </SelectRoot>
              </Box>

              <Box>
                <label
                  htmlFor="expertise"
                  style={{
                    color: "black",
                    marginBottom: "0.5rem",
                    display: "block",
                  }}
                >
                  Expertise
                </label>
                <Textarea
                  border={"none"}
                  id="expertise"
                  name="expertise"
                  bg="white"
                  value={formData.expertise}
                  onChange={handleChange}
                  resize="vertical"
                />
              </Box>

              <Box>
                <label
                  htmlFor="observations"
                  style={{
                    color: "black",
                    marginBottom: "0.5rem",
                    display: "block",
                  }}
                >
                  Observations
                </label>
                <Textarea
                  border={"none"}
                  id="observations"
                  name="observations"
                  bg="white"
                  value={formData.observations}
                  onChange={handleChange}
                  resize="vertical"
                />
              </Box>

              <Button type="submit" colorScheme="blue" mt={4}>
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </Container>
    </>
  );
}

const ratingOptions = createListCollection({
  items: [
    { value: "1", label: "1 - Poor" },
    { value: "2", label: "2 - Fair" },
    { value: "3", label: "3 - Good" },
    { value: "4", label: "4 - Very Good" },
    { value: "5", label: "5 - Excellent" },
  ],
});
