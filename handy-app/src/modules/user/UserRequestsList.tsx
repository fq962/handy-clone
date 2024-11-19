import { GetAllRequestedJobsByUser } from "@/core/services/JobRequest";
import CardJobRequest from "@/shared/components/CardJobRequest";
import { ClerkUserAuth } from "@/shared/interfaces/clerk-user-auth.interface";
import { RequestedJobByUser } from "@/shared/interfaces/job.interface";
import Navbar from "@/shared/Navbar";
import { Box, Container, Grid, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function UserRequestsList() {
  const location = useLocation();
  const userInfo = location.state?.user as ClerkUserAuth;
  const [requestedJobs, setRequestedJobTypes] = useState<RequestedJobByUser[]>(
    []
  );

  useEffect(() => {
    const fetchRequestedJobs = async () => {
      try {
        const response = await GetAllRequestedJobsByUser({
          idUser: userInfo.id ?? "",
        });

        if (response) {
          setRequestedJobTypes(response.data);
        }
      } catch (error) {
        console.error("Error in fetchJobTypes:", error);
      }
    };

    fetchRequestedJobs();
  });

  return (
    <>
      <Navbar />
      <Box color={"black"} minH="100vh" p={6}>
        <Container>
          <Box mb={6}>
            <Heading
              as="h1"
              color="black"
              fontSize="3xl"
              fontWeight="normal"
              mb={8}
            >
              Welcome to your requested jobs
            </Heading>

            <Grid
              templateColumns="repeat(auto-fill, minmax(350px, 1fr))"
              gap={4}
            >
              {requestedJobs.length > 0 ? (
                requestedJobs.map((job) => <CardJobRequest job={job} />)
              ) : (
                <Heading as="h2" fontSize="lg" color="gray.500">
                  No requested jobs found.
                </Heading>
              )}
            </Grid>
            {/* <Button
              bg={"#00cded"}
              variant="outline"
              color="black"
              borderColor="whiteAlpha.300"
              _hover={{ bg: "whiteAlpha.100" }}
              size="lg"
              px={6}
            >
              filter
            </Button> */}
          </Box>
        </Container>
      </Box>
    </>
  );
}
