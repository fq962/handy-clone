import ServiceButtons from "@/shared/components/ServiceButtons";
import TaskSection from "@/shared/components/TaskSection";
import HeroSection from "@/shared/HeroSection";
import Navbar from "@/shared/Navbar";
import { Box } from "@chakra-ui/react";
import React from "react";
// import "./home.css";

const Home: React.FC = () => {
  return (
    <Box>
      <Navbar />
      <HeroSection />
      <ServiceButtons />
      <TaskSection />
    </Box>
  );
};

export default Home;
