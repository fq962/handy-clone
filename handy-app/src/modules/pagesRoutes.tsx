// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Home from "./pages/home/Home";
// import About from "./pages/about/About";
// import ServicesPage from "./pages/all-services/AllServices";
// import JobTypeDetails from "./pages/all-services/JobTypeDetails";

// const PagesRoutes: React.FC = () => (
//   <Routes>
//     <Route path="/" element={<Home />} />
//     <Route path="/about" element={<About />} />
//     <Route path="/services" element={<ServicesPage />} />
//     <Route path="/services/:jobTypeName" element={<JobTypeDetails />} />{" "}
//     {/* Nueva ruta */}
//   </Routes>
// );

// export default PagesRoutes;
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import ServicesPage from "./pages/all-services/AllServices";
import JobTypeDetails from "./pages/all-services/JobTypeDetails";
import { useUser, RedirectToSignIn } from "@clerk/clerk-react";
import UserRequestsList from "./user/UserRequestsList";

// Componente para proteger rutas
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { isSignedIn } = useUser();

  if (!isSignedIn) {
    // Redirigir al flujo de inicio de sesión
    return <RedirectToSignIn />;
  }

  return <>{children}</>;
};

const PagesRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route
      path="/services"
      element={
        <ProtectedRoute>
          <ServicesPage />
        </ProtectedRoute>
      }
    />
    <Route
      path="/services/:jobTypeName"
      element={
        <ProtectedRoute>
          <JobTypeDetails />
        </ProtectedRoute>
      }
    />
    <Route
      path="/my-requests"
      element={
        <ProtectedRoute>
          <UserRequestsList />
        </ProtectedRoute>
      }
    />
  </Routes>
);

export default PagesRoutes;
