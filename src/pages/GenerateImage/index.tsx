import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
const GenerateImage: React.FC = () => {
  useEffect(() => {
    console.log("GenerateImage");
  }, []);

  return (
    <>
      <div className="h-full bg-red-900 w-full">GenerateIamge</div>
      <Outlet /> {/* This is where the child routes will be rendered */}
    </>
  );
};

export default GenerateImage;
