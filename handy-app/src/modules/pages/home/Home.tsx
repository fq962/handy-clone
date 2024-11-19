// import JobRequestTable from "@/shared/components/JobRequestTable";
import ServiceButtons from "@/shared/components/ServiceButtons";
import JobTypesSection from "@/shared/components/JobTypesSection";
import HeroSection from "@/shared/HeroSection";
import Navbar from "@/shared/Navbar";
import { Box } from "@chakra-ui/react";
import React from "react";
import JobRequestTable from "@/shared/components/JobRequestTable";
import { useUser } from "@clerk/clerk-react";
// import "./home.css";

const Home: React.FC = () => {
  const { user } = useUser();
  console.log("USER HERE 0:", user);
  console.log("USER HERE:", user?.organizationMemberships[0].role);

  const isAdmin =
    user?.organizationMemberships[0].role === "org:admin_user" ||
    user?.organizationMemberships[0].role === "org:admin";

  console.log("isAdmin", isAdmin);

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
