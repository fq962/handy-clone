// src/components/TaskSection.tsx
import {
  Box,
  Text,
  Link,
  Image,
  Card,
  CardBody,
  Grid,
  GridItem,
} from "@chakra-ui/react";

const tasks = [
  {
    title: "Home Cleaning",
    image: "public/homecleaner.webp", // Reemplaza con la URL real de la imagen
    link: "#",
  },
  {
    title: "Furniture Assembly",
    image: "public/furniture_assembly.webp", // Reemplaza con la URL real de la imagen
    link: "#",
  },
  {
    title: "TV Mounting",
    image: "public/tv_mounting.webp", // Reemplaza con la URL real de la imagen
    link: "#",
  },
  {
    title: "Wall Hanging",
    image: "public/hanging.webp", // Reemplaza con la URL real de la imagen
    link: "#",
  },
];
const TaskSection = () => {
  return (
    <Box as="section" py={8} px={60}>
      <Grid
        templateColumns={{
          base: "1fr",
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        gap={2}
      >
        {tasks.map((task, index) => (
          <GridItem key={index}>
            <Card.Root
              border="1px solid"
              bgColor="white"
              maxW="xs"
              borderRadius="lg"
              overflow="hidden"
              boxShadow="sm"
              _hover={{ boxShadow: "lg", transform: "scale(1.02)" }}
              transition="all 0.2s ease-in-out"
            >
              <Link
                href={task.link}
                textDecoration="none"
                _hover={{ textDecoration: "none" }}
              >
                <CardBody p={0}>
                  <Image
                    src={task.image}
                    alt={task.title}
                    width="100%"
                    height="auto"
                    objectFit="cover"
                  />
                  <Box p={4}>
                    <Text
                      fontSize="lg"
                      fontWeight="medium"
                      color="black"
                      display="flex"
                      alignItems="center"
                    >
                      {task.title}
                    </Text>
                  </Box>
                </CardBody>
              </Link>
            </Card.Root>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default TaskSection;
