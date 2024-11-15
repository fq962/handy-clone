import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import PagesRoutes from "./modules/pagesRoutes";

const App: React.FC = () => {
  return (
    <Router>
      <PagesRoutes />
    </Router>
  );
};

export default App;
