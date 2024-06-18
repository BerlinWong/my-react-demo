import React from "react";
import { BrowserRouter } from "react-router-dom";
import WrapperRoutes from "@/routes";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <WrapperRoutes />
    </BrowserRouter>
  );
};

export default App;
