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
import JobTypeDetails from "./pages/all-services/JobTypeDetails";
import { useUser, RedirectToSignIn } from "@clerk/clerk-react";
import UserRequestsList from "./user/UserRequestsList";
import JobRequestTable from "@/shared/components/JobRequestTable";
import ManageHandymen from "./admin/ManageHandymen";

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
    <Route
      path="/jobs-by-user"
      element={
        <ProtectedRoute>
          <JobRequestTable />
        </ProtectedRoute>
      }
    />
    <Route
      path="/manage-handymen"
      element={
        <ProtectedRoute>
          <ManageHandymen />
        </ProtectedRoute>
      }
    />
  </Routes>
);

export default PagesRoutes;
