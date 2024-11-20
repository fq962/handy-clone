// src/components/TaskSection.tsx
import { GetLimitJobTypes } from "@/core/services/JobRequest";
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
import { useEffect, useState } from "react";
import { JobType } from "../interfaces/job.interface";
import { useNavigate } from "react-router-dom";

const JobTypesSection = () => {
  const [jobTypes, setJobTypes] = useState([] as JobType[]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJobTypes = async () => {
      try {
        const response = await GetLimitJobTypes();

        if (response) {
          setJobTypes(response.data);
        }
      } catch (error) {
        console.error("Error in fetchJobTypes:", error);
      }
    };

    fetchJobTypes();
  }, []);

  const handleCardClick = (jobTypeName: string, jobType: JobType) => {
    navigate(`/services/${jobTypeName}`, { state: { jobType } });
  };

  return (
    <Box as="section" py={8} px={60}>
      <Text fontSize="xl" fontWeight="bold" mb={4}>
        Services Available
      </Text>
      <Grid
        templateColumns={{
          base: "1fr",
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        gap={2}
      >
        {jobTypes.map((jobType) => (
          <GridItem key={jobType.idJobType}>
            <Card.Root
              onClick={() => handleCardClick(jobType.name, jobType)}
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
                // href={task.link}
                textDecoration="none"
                _hover={{ textDecoration: "none" }}
              >
                <CardBody p={0}>
                  <Image
                    src="public/hanging.webp"
                    alt={jobType.name}
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
                      {jobType.name}
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

export default JobTypesSection;
