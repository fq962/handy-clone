// import JobRequestTable from "@/shared/components/JobRequestTable";
import ServiceButtons from "@/shared/components/ServiceButtons";
import JobTypesSection from "@/shared/components/JobTypesSection";
import HeroSection from "@/shared/HeroSection";
import Navbar from "@/shared/Navbar";
import { Box } from "@chakra-ui/react";
import React from "react";
import JobRequestTable from "@/shared/components/JobRequestTable";
import { useUser } from "@clerk/clerk-react";

const Home: React.FC = () => {
  const { user } = useUser();

  const isAdmin =
    user?.organizationMemberships[0].role === "org:admin_user" ||
    user?.organizationMemberships[0].role === "org:admin";

  return (
    <Box>
      <Navbar />
      {isAdmin ? (
        <JobRequestTable />
      ) : (
        <>
          <HeroSection />
          <ServiceButtons />
          <JobTypesSection />
        </>
      )}
    </Box>
  );
};

export default Home;
