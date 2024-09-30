import React from "react";

const BackgroundWithCircle = () => {
  return (
    <div className="relative w-full h-screen bg-pink-500 overflow-hidden">
      <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2">
        <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-400 to-blue-600" />
      </div>
    </div>
  );
};

export default BackgroundWithCircle;
