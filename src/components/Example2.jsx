"use client";
import React from "react";

const Example2 = ({ onClick, buttonName }) => {
  return (
    // <div className="grid min-h-[200px] place-content-center bg-slate-900 p-4">
    <DrawOutlineButton onClick={onClick}>{buttonName}</DrawOutlineButton>
    // </div>
  );
};
// const Example2 = () => {
//   return (
//     // <div className="grid min-h-[200px] place-content-center bg-slate-900 p-4">
//     <DrawOutlineButton>Explore AGUA</DrawOutlineButton>
//     // </div>
//   );
// };
// const Example3 = () => {
//   return (
//     // <div className="grid min-h-[200px] place-content-center bg-slate-900 p-4">
//     <DrawOutlineButton>Explore AGUA</DrawOutlineButton>
//     // </div>
//   );
// };
const DrawOutlineButton = ({ children, ...rest }) => {
  return (
    <button
      {...rest}
      className="group relative px-4 py-2 h-14 gap-10 font-medium text-[#CFB302] transition-colors duration-[400ms] hover:text-white"
    >
      <span>{children}</span>

      {/* TOP */}
      <span className="absolute left-0 top-0 h-[2px] w-0 bg-[#CFB302] transition-all duration-100  group-hover:w-full" />

      {/* RIGHT */}
      <span className="absolute right-0 top-0 h-0 w-[2px] bg-[#CFB302] transition-all delay-100  duration-100 group-hover:h-full" />

      {/* BOTTOM */}
      <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-[#CFB302] transition-all delay-200 duration-100 group-hover:w-full" />

      {/* LEFT */}
      <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-[#CFB302] transition-all delay-300 duration-100 group-hover:h-full" />
    </button>
  );
};

export default Example2;
