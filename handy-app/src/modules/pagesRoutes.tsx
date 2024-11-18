import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import ServicesPage from "./pages/all-services/AllServices";
import JobTypeDetails from "./pages/all-services/JobTypeDetails";

const PagesRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/services" element={<ServicesPage />} />
    <Route path="/services/:jobTypeName" element={<JobTypeDetails />} />{" "}
    {/* Nueva ruta */}
  </Routes>
);

export default PagesRoutes;
