// "use client";

// import React from 'react'
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// function Pictures() {
//   return (
//     <>
//  <Swiper
//   slidesPerView={1}
//   centeredSlides={false}
//   autoplay={{
//     delay: 2500,
//     disableOnInteraction: false,
//   }}
//   pagination={{
//     clickable: true,
//   }}
//   navigation={true}
//   modules={[Autoplay, Pagination, Navigation]}
//   breakpoints={{
//     640: {
//       slidesPerView: 2,
//       spaceBetween: 20,
//     },
//     768: {
//       slidesPerView: 2,
//       spaceBetween: 15,
//     },
//     1024: {
//       slidesPerView: 3,
//       spaceBetween: 20,
//     },
//   }}
//   className="mySwiper"
// >
//   {Array.from({ length: 4 }).map((_, index) => (
//     <SwiperSlide key={index}>
//       <div className='flex flex-col gap-12 items-center justify-center'>
//       <div className="card bg-[#493E1D] mb-6  h-80 sm:w-72 sm:h-[350px] md:h-[450px]  shadow-xl">
//         <figure>
//           <img
//             src="/picture1.png"
//             alt="Movie"
//             className="h-full w-full object-cover"
//           />
//         </figure>
//         <div className="card-body">
//           <h2 className="font-bold text-lg sm:text-xl md:text-2xl text-white text-center font-roboto">
//             Gold profit
//           </h2>
//           <p className="text-white text-center text-sm sm:text-base md:text-xl font-roboto">
//             Agua tokens
//           </p>
//         </div>
//       </div>
//       </div>
//     </SwiperSlide>
//   ))}
// </Swiper>

// </>
//   )
// }

// export default Pictures

"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Pictures() {
  // Array of image URLs
  const images = [
    "/picture1.png", // Image for card 1
    "/picture2.png", // Image for card 2
    "/picture3.png", // Image for card 3
    "/picture4.png", // Image for card 4
  ];

  return (
    <>
      <h1 className="font-merry text-5xl md:text-6xl  text-[#9C7509] text-center mt-20 ">
        Operations
      </h1>
      <Swiper
        slidesPerView={1} // Default view for small screens
        centeredSlides={false}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col gap-12 items-center justify-center">
              <div className="card bg-[#493E1D] mb-6 h-80 sm:w-72 sm:h-[350px] md:h-[450px] shadow-xl">
                <figure>
                  <img
                    src={image} // Use the image from the array
                    alt={`Card ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="font-bold text-lg sm:text-xl md:text-2xl text-white text-center font-roboto">
                    Gold profit
                  </h2>
                  <p className="text-white text-center text-sm sm:text-base md:text-xl font-roboto">
                    Agua tokens
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Pictures;
