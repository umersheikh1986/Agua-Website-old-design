// import React from "react";
// import { DotLottieReact } from "@lottiefiles/dotlottie-react";

// export default function GlowingBorderCards() {
//   return (
//     <DotLottieReact
//       src="https://lottie.host/cc4985aa-5291-4b46-9179-f66230aa668b/AJ5nBizf2K.lottie"
//       loop
//       autoplay
//       className="absolute bg-transparent z-3 opacity-50 w-full h-full"
//     />
//   );
// }
// import React from "react";
// import { DotLottieReact } from "@lottiefiles/dotlottie-react";

// export default function GlowingBorderCards() {
//   return (
//     <>
//       <DotLottieReact
//         src="https://lottie.host/98087323-62ee-48cd-ad67-1b6946abca78/0CUEwOikwJ.lottie"
//         loop
//         autoplay
//         className="absolute bg-transparent z-3 opacity-50 w-[2200px]"
//       />
//     </>
//   );
// }
import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function GlowingBorderCards() {
  return (
    <>
      <div className="flex max-w-7xl items-center justify-between relative ">
        <div className="">
          <DotLottieReact
            src="https://lottie.host/a3fcc972-c346-4848-879c-758f4771aa92/fxufp3ddN5.lottie"
            loop
            autoplay
            className="absolute z-3 opacity-80 w-[1500px] right-1/4 pl-40"
          />
        </div>
        <div className="">
          <DotLottieReact
            src="https://lottie.host/98087323-62ee-48cd-ad67-1b6946abca78/0CUEwOikwJ.lottie"
            loop
            autoplay
            className="absolute bg-transparent  z-3 opacity-50 w-[1600px] left-1/3 h-[672px]"
          />
        </div>
      </div>
    </>
  );
}
