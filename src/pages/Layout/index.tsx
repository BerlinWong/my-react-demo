import React from "react";
import { Outlet } from "react-router-dom";
import NavbarHeader from "@/pages/Layout/components/NavbarHeader";

import FooterDarkTheme from "@/pages/Layout/components/FooterDarkTheme";

const LayoutContainer: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#111827]">
      <NavbarHeader />
      <main className="flex-grow container mx-auto">
        <Outlet />
      </main>
      <FooterDarkTheme />
    </div>
  );
};

export default LayoutContainer;
