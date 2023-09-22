import React from "react";

const Loading = () => {
  return (
    <div className="h-[100dvh] z-[100]  w-full bg-black bg-opacity-75 flex justify-center items-center">
      <img
        src="/public/Infinity-1s-200px.svg"
        alt=""
        className="bg-transparent"
      />
    </div>
  );
};

export default Loading;
