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
    <Box as="section" py={8} px={{ base: 4, sm: 8, md: 16, lg: 60 }}>
      <Text
        fontSize={{ base: "lg", sm: "xl" }}
        fontWeight="bold"
        mb={4}
        textAlign={{ base: "center", sm: "left" }}
      >
        Services Available
      </Text>
      <Grid
        templateColumns={{
          base: "1fr",
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        gap={{ base: 4, sm: 6, md: 8 }}
      >
        {jobTypes.map((jobType) => (
          <GridItem key={jobType.idJobType}>
            <Card.Root
              onClick={() => handleCardClick(jobType.name, jobType)}
              border="1px solid"
              bgColor="white"
              maxW="100%"
              borderRadius="lg"
              overflow="hidden"
              boxShadow="sm"
              _hover={{ boxShadow: "lg", transform: "scale(1.02)" }}
              transition="all 0.2s ease-in-out"
            >
              <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
                <CardBody p={0}>
                  <Image
                    src="public/hanging.webp"
                    alt={jobType.name}
                    width="100%"
                    height="200px"
                    objectFit="cover"
                  />
                  <Box p={4}>
                    <Text
                      fontSize={{ base: "md", sm: "lg" }}
                      fontWeight="medium"
                      color="black"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      textAlign="center"
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
