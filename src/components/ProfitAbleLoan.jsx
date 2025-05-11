// import React from "react";
// import { useEffect,useRef } from "react";
// import VanillaTilt from "vanilla-tilt";
// import { DotLottieReact } from '@lottiefiles/dotlottie-react';
// import CanvasScene from "./Animate";

// export const ProfitAbleLoan = () => {

//   const imageRef = useRef(null);
//    useEffect(() => {
//     if (imageRef.current) {
//       VanillaTilt.init(imageRef.current, {
//         max: 25,
//         speed: 400,
//       });
//     }
//     return () => imageRef.current && imageRef.current.vanillaTilt.destroy();
//   }, []);

//   const divRef = useRef(null);
//     useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("animate-slideInRight");
//           }
//         });
//       },
//       {
//         threshold: 0.1,
//       }
//     );

//     if (divRef.current) {
//       observer.observe(divRef.current);
//     }

//     return () => {
//       if (divRef.current) {
//         observer.unobserve(divRef.current);
//       }
//     };
//   }, []);

//   const divRes = useRef(null);
//     useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("animate-slideInLeft");
//           }
//         });
//       },
//       {
//         threshold: 0.1,
//       }
//     );

//     if (divRes.current) {
//       observer.observe(divRes.current);
//     }

//     return () => {
//       if (divRes.current) {
//         observer.unobserve(divRes.current);
//       }
//     };
//   }, []);

//   return (
//     <div className="">
//       {/* <CanvasScene /> */}
//       <div className="grid grid-cols-1 mt-6 md:grid-cols-2 gap-5 mx-5 ">
//         <div ref={divRes} className="flex flex-col gap-8 mt-10 rounded-[40px] bg-white bg-opacity-10 backdrop-blur-lg p-10">
//           <h2 className="sm:text-6xl text-4xl font-bold text-white">Profitable Loans</h2>
//           <div className="flex flex-col gap-5">
//             <p className="text-white">
//               1.Lorem Ipsum is simply dummy text of the printing and typesetting
//               industry. Lorem Ipsum has been the industry's standard dummy text
//               ever since the 1500s, when an unknown printer took a galley of
//               type and scrambled it to make a type specimen book
//             </p>
//             <p className="text-white">
//               2. Lorem Ipsum is simply dummy text of the printing and
//               typesetting industry. Lorem Ipsum has been the industry's standard
//               dummy text ever since the 1500s, when an unknown printer took a
//               galley of type and scrambled it to make a type specimen book
//             </p>
//             <p className="text-white">
//               3. Lorem Ipsum is simply dummy text of the printing and
//               typesetting industry. Lorem Ipsum has been the industry's standard
//               dummy text ever since the 1500s, when an unknown printer took a
//               galley of type and scrambled it to make a type specimen book
//             </p>
//           </div>
//         </div>
//         <div ref={divRef} className="js-tilt flex justify-center mt-10 rounded-[40px] bg-white bg-opacity-10 backdrop-blur-3xl p-5 opacity-0">
//           <img
//           ref={imageRef}
//             className="w-[400px] shadow-2xl bg-transparent rounded-[40px] bg-opacity-50 backdrop-blur-lg  h-[400px]"
//             src="/CreditCards1.png"
//             alt="locker"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };
import React from "react";

const Example = () => {
  return (
    // <div className="grid min-h-[200px] place-content-center bg-slate-900 p-4">
    <DrawOutlineButton>Explore AGUA</DrawOutlineButton>
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
      className="group relative px-4 py-2 font-medium text-[#CFB302] transition-colors duration-[400ms] hover:text-white"
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

export default Example;
