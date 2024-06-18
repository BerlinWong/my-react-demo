import React, { useEffect } from "react";
const GenerateImage: React.FC = () => {
  useEffect(() => {
    console.log("GenerateImage");
  }, []);

  return (
    <>
      <div className="h-full bg-blue-900 w-full">TestPage</div>
    </>
  );
};

export default GenerateImage;
