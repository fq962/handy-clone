import { CardBody, Flex, Text, Badge, CardRoot } from "@chakra-ui/react";
import { RequestedJobByUser } from "../interfaces/job.interface";

interface CardJobRequestProps {
  job: RequestedJobByUser;
}

const CardJobRequest: React.FC<CardJobRequestProps> = ({ job }) => {
  return (
    <CardRoot
      bg="white"
      color="black"
      maxW="md"
      borderRadius="xl"
      p={2}
      border={"none"}
      shadow={"md"}
    >
      <CardBody>
        <Flex justify="space-between" align="center" mb={2}>
          <Text fontSize="xl" fontWeight="bold">
            {job.jobName}
          </Text>
          <Flex gap={2} align="center">
            <Badge
              colorPalette={
                Number(job.status.value) === 1
                  ? "blue"
                  : Number(job.status.value) === 2
                  ? "yellow"
                  : "green"
              }
              px={2}
              py={1}
            >
              {job.status.label}
            </Badge>
          </Flex>
        </Flex>

        <Text fontSize="sm" mb={2} color="gray.800">
          {job.reservationDateTime}
        </Text>
        <Text fontWeight="medium" mb={2}>
          {job.handyman.label}
        </Text>
        <Text>{job.observations}</Text>
      </CardBody>
    </CardRoot>
  );
};

export default CardJobRequest;
