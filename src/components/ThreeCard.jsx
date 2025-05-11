import React from "react";
import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import CanvasScene from "./Animate";

export const ThreeCard = () => {
  const divlef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slideInLeft");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (divlef.current) {
      observer.observe(divlef.current);
    }

    return () => {
      if (divlef.current) {
        observer.unobserve(divlef.current);
      }
    };
  }, []);

  const divleft = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slideInLeft");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (divleft.current) {
      observer.observe(divleft.current);
    }

    return () => {
      if (divleft.current) {
        observer.unobserve(divleft.current);
      }
    };
  }, []);

  const divrig = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slideInRight");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (divrig.current) {
      observer.observe(divrig.current);
    }

    return () => {
      if (divrig.current) {
        observer.unobserve(divrig.current);
      }
    };
  }, []);

  const divright = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slideInRight");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (divright.current) {
      observer.observe(divright.current);
    }

    return () => {
      if (divright.current) {
        observer.unobserve(divright.current);
      }
    };
  }, []);
  // Tilt Animation Code
  // const imageRef = useRef(null);
  //  useEffect(() => {
  //   if (imageRef.current) {
  //     VanillaTilt.init(imageRef.current, {
  //       max: 25,
  //       speed: 400,
  //     });
  //   }
  //   return () => imageRef.current && imageRef.current.vanillaTilt.destroy();
  // }, []);

  return (
    <>
      {/* <div className="mx-auto  mt-60  py-20 w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 w-full h-[850px] mb-20 ">
        <div className="flex items-center justify-center">
        

          <div className="w-full relative h-[450px] mx-5  bg-white bg-opacity-10 backdrop-blur-lg rounded-lg   p-6">
            <div className=" -top-28 left-12 absolute">
              <img className="w-80 h-80 hover:scale-150 hover:z-2 transition-all duration-300 ease-in-out" src="3Dbanklocker.png" alt="locker" />
            </div>
            <div className="relative top-48 px-6">
              <h2 className="text-white text-2xl text-center">RELIABILLITY</h2>
              <p className="text-gray-300  text-sm text-start relative top-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
              <p className="text-gray-300  text-sm  text-center relative top-10">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
              <p></p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="w-full relative h-[450px] mx-5  bg-white bg-opacity-10 backdrop-blur-lg rounded-lg   p-6">
            <div className="absolute -top-28 left-12 ">
              <img className="w-80 h-80 hover:scale-150 hover:z-2 transition-all duration-300 ease-in-out " src="3Dmoneycash.png" alt="locker" />
            </div>
            <div className="relative top-48 px-6">
              <h2 className="text-white text-2xl text-center">
                Best Exchange Rate{" "}
              </h2>
              <p className="text-gray-300  text-sm  text-center relative top-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
              <p className="text-gray-300  text-sm  text-center relative top-10">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
              <p></p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="w-full relative h-[450px] mx-5  bg-white bg-opacity-10 backdrop-blur-lg rounded-lg   p-6">
            <div className="absolute -top-28 left-12">
              <img
                className="w-80 h-80 hover:scale-150 hover:z-2 transition-all duration-300 ease-in-out"
                src="3Dpaymentdeadline.png"
                alt="locker"
              />
            </div>
            <div className="relative top-48 px-6">
              <h2 className="text-white text-2xl text-center">
                Quick Transfers
              </h2>
              <p className="text-gray-300 text-sm  text-center relative top-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
              <p className="text-gray-300  text-sm text-center relative top-10">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
              <p></p>
            </div>
          </div>
        </div>

      
        <div className=" flex items-center justify-center">
        

          <div className="w-full relative h-[450px] mx-5 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg mt-14   p-6">
            <div className=" -top-28 left-12 absolute">
              <img className="w-80 h-80 hover:scale-150 hover:z-2 transition-all duration-300 ease-in-out" src="3Dbanklocker.png" alt="locker" />
            </div>
            <div className="relative top-48 px-6">
              <h2 className="text-white text-2xl text-center">RELIABILLITY</h2>
              <p className="text-gray-300  text-sm text-start relative top-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
              <p className="text-gray-300  text-sm  text-center relative top-10">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
              <p></p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center">
        

        <div className="w-full relative h-[450px] mx-5  bg-white bg-opacity-10 backdrop-blur-lg rounded-lg mt-14   p-6">
          <div className=" -top-28 left-12 absolute">
            <img className="w-80 h-80 hover:scale-150 hover:z-2 transition-all duration-300 ease-in-out" src="3Dbanklocker.png" alt="locker" />
          </div>
          <div className="relative top-48 px-6">
            <h2 className="text-white text-2xl text-center">RELIABILLITY</h2>
            <p className="text-gray-300  text-sm text-start relative top-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
              text ever since the 1500s.
            </p>
            <p className="text-gray-300  text-sm  text-center relative top-10">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
              text ever since the 1500s,
            </p>
            <p></p>
          </div>
        </div>
      </div>
      </div>

      </div> */}

      {/* <div className="mx-auto mt-20 sm:mt-40 md:mt-60 py-10 sm:py-20 ">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 w-full mb-20">
  

    
    <div ref={divlef} className="flex items-center justify-center">
      <div className="w-full relative h-[450px] mx-5 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-6">
        <div className="absolute -top-28 left-32">
          <img className="md:w-52 md:h-52 h-32 w-32 hover:scale-150 transition-transform duration-300 ease-in-out" src="https://agcoin.io/wp-content/uploads/2021/03/opportunity.png" alt="locker" />
        </div>
        <div className="relative top-40 md:top-48 px-6">
          <h2 className="text-white text-xl md:text-2xl text-center">OPPORTUNITY</h2>
          <p className="text-gray-300 text-sm text-start mt-5">
          Tokenized vault-base silver deposits followed by amazing tokenization incentives.
          </p>
        </div>
      </div>
    </div>

    
    <div className="flex items-center justify-center">
      <div className="w-full relative h-[450px] mx-5 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-6">
        <div className="absolute -top-28 left-32">
          <img className="md:w-52 md:h-52 h-32 w-32  hover:scale-150 transition-transform duration-300 ease-in-out" src="https://agcoin.io/wp-content/uploads/2021/03/goal.png" alt="money cash" />
        </div>
        <div className="relative top-40 md:top-48 px-6">
          <h2 className="text-white text-xl md:text-2xl text-center">TECHNOLOGY</h2>
          <p className="text-gray-300 text-sm text-center mt-5">
          Polkadot Parachain to power perpetual tokenization of global silver and more vault-based assets.
          </p>
        </div>
      </div>
    </div>

    
    <div ref={divrig} className="flex items-center justify-center">
      <div className="w-full relative h-[450px] mx-5 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-6">
        <div className="absolute -top-28 left-32">
          <img className="md:w-52 md:h-52 h-32 w-32 hover:scale-150 transition-transform duration-300 ease-in-out" src="https://agcoin.io/wp-content/uploads/2021/03/global.png" alt="payment deadline" />
        </div>
        <div className="relative top-40 md:top-48 px-6">
          <h2 className="text-white text-xl md:text-2xl text-center">APPLICATION</h2>
          <p className="text-gray-300 text-sm text-center mt-5">
          AgCoin (AGC) stores a value equal to an ounce of silver and acts as a medium of exchange for the acquisition of AGS tokens.
          </p>
        </div>
      </div>
    </div>
    
    <div ref={divleft} className="flex items-center justify-center">
      <div className="w-full relative h-[450px] mx-5 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg  p-6">
        <div className="absolute -top-28 left-32">
          <img className="md:w-52 md:h-52 h-32 w-32 hover:scale-150 transition-transform duration-300 ease-in-out" src="https://agcoin.io/wp-content/uploads/2021/03/utility.png" alt="locker" />
        </div>
        <div className="relative top-40 md:top-48 px-6">
          <h2 className="text-white text-xl md:text-2xl text-center">STRUCTURE</h2>
          <p className="text-gray-300 text-sm text-start mt-5">
          AGS Token (AGS) act as a digital representation of co-ownership rights in a specific silver bullion. Backed by a gram of silver can be only purchased and divested with AgCoin (AGC).
          </p>
        </div>
      </div>
    </div>

    <div ref={divright} className="flex items-center justify-center">
      <div className="w-full relative h-[450px] mx-5 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg  p-6">
        <div className="absolute -top-28 left-32">
          <img className="md:w-52 md:h-52 h-32 w-32 hover:scale-150 transition-transform duration-300 ease-in-out" src="https://agcoin.io/wp-content/uploads/2021/03/legal.png" alt="locker" />
        </div>
        <div className="relative top-40 md:top-48 px-6">
          <h2 className="text-white text-xl md:text-2xl text-center">LEGAL</h2>
          <p className="text-gray-300 text-sm text-start mt-5">
          Swiss based jurisdiction backed by experienced legal advisors with feasible structure according with the new Swiss DLT Act.
          </p>
        </div>
      </div>
    </div>
   </div>
  </div> */}

      <div className="mx-auto py-10 sm:py-20 font-san">
        <div className="flex flex-wrap h-auto justify-center gap-6 w-full">
          {/* Card 1 */}
          <div className="flex items-center justify-center w-full sm:w-[300px] md:w-[350px] lg:w-[400px]">
            <div className="w-full relative h-[300px] sm:h-[355px] mx-3 bg-white bg-opacity-10 backdrop-blur-lg rounded-xl hover:scale-105 transition-transform duration-300 ease-in-out">
              <div className="flex flex-col items-center relative top-24 px-4">
                <div className="flex justify-center items-center -mt-16">
                  <img
                    className="h-16 w-16 sm:h-20 sm:w-20"
                    src="https://agcoin.io/wp-content/uploads/2021/03/opportunity.png"
                    alt="Opportunity"
                  />
                </div>
                <h2 className="text-white text-lg sm:text-xl text-center mt-4 font-merry">
                  OPPORTUNITY
                </h2>
                <p className="text-gray-300 text-xs lg:text-sm text-center mt-2 font-roboto">
                  AGUA blends the stability of silver and gold with DeFi
                  innovation, offering secure wealth preservation and access to
                  lending, staking, and yield farming. Fully backed by precious
                  metals, users can trade, earn rewards, and shape the
                  platform’s future in a transparent, accessible ecosystem.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex items-center justify-center w-full sm:w-[300px] md:w-[350px] lg:w-[400px]">
            <div className="w-full relative h-[300px] sm:h-[355px] mx-3 bg-white bg-opacity-10 backdrop-blur-lg rounded-xl hover:scale-105 transition-transform duration-300 ease-in-out">
              <div className="flex flex-col items-center relative top-24 px-4">
                <div className="flex justify-center items-center -mt-16">
                  <img
                    className="h-16 w-16 sm:h-20 sm:w-20"
                    src="https://agcoin.io/wp-content/uploads/2021/03/goal.png"
                    alt="Technology"
                  />
                </div>
                <h2 className="text-white text-lg sm:text-xl text-center mt-4 font-merry">
                  TECHNOLOGY
                </h2>
                <p className="text-gray-300 text-xs lg:text-sm text-center mt-2 font-roboto">
                  AGUA uses advanced blockchain technology to offer a secure,
                  transparent platform for minting and managing silver and
                  gold-backed tokens. With integrated DeFi features like
                  lending, staking, and trading, users can engage in a trusted,
                  decentralized ecosystem. Real-time reserve audits and DAO
                  governance ensure transparency, security, and community-driven
                  growth.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex items-center justify-center w-full sm:w-[300px] md:w-[350px] lg:w-[400px]">
            <div className="w-full relative h-[300px] sm:h-[355px] mx-3 bg-white bg-opacity-10 backdrop-blur-lg rounded-xl hover:scale-105 transition-transform duration-300 ease-in-out">
              <div className="flex flex-col items-center relative top-24 px-4">
                <div className="flex justify-center items-center -mt-16">
                  <img
                    className="h-16 w-16 sm:h-20 sm:w-20"
                    src="https://agcoin.io/wp-content/uploads/2021/03/global.png"
                    alt="Application"
                  />
                </div>
                <h2 className="text-white text-lg sm:text-xl text-center mt-4 font-merry">
                  APPLICATION
                </h2>
                <p className="text-gray-300 text-xs lg:text-sm text-center mt-2 font-roboto">
                  The AGUA platform allows users to easily manage digital
                  assets, mint silver and gold-backed tokens, and engage in DeFi
                  activities like staking, lending, and trading. With real-time
                  reserve tracking and governance tools, it empowers secure,
                  transparent wealth management.
                </p>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="flex items-center justify-center w-full sm:w-[300px] md:w-[350px] lg:w-[400px]">
            <div className="w-full relative h-[300px] sm:h-[355px] mx-3 bg-white bg-opacity-10 backdrop-blur-lg rounded-xl hover:scale-105 transition-transform duration-300 ease-in-out">
              <div className="flex flex-col items-center relative top-24 px-4">
                <div className="flex justify-center items-center -mt-16">
                  <img
                    className="h-16 w-16 sm:h-20 sm:w-20"
                    src="https://agcoin.io/wp-content/uploads/2021/03/utility.png"
                    alt="Structure"
                  />
                </div>
                <h2 className="text-white text-lg sm:text-xl text-center mt-4 font-merry">
                  STRUCTURE
                </h2>
                <p className="text-gray-300 text-xs lg:text-sm text-center mt-2 font-roboto">
                  AGUA's decentralized structure is powered by blockchain,
                  ensuring transparency and security. Each AG and AU token is
                  60/40 backed by silver and gold, with smart contracts managing
                  minting, transactions, and audits. DAO governance allows users
                  to shape the platform, ensuring stability and a user-driven
                  ecosystem.
                </p>
              </div>
            </div>
          </div>

          {/* Card 5 */}
          <div className="flex items-center justify-center w-full sm:w-[300px] md:w-[350px] lg:w-[400px]">
            <div className="w-full relative h-[300px] sm:h-[355px] mx-3 bg-white bg-opacity-10 backdrop-blur-lg rounded-xl hover:scale-105 transition-transform duration-300 ease-in-out">
              <div className="flex flex-col items-center relative top-24 px-4">
                <div className="flex justify-center items-center -mt-16">
                  <img
                    className="h-16 w-16 sm:h-20 sm:w-20"
                    src="https://agcoin.io/wp-content/uploads/2021/03/legal.png"
                    alt="Legal"
                  />
                </div>
                <h2 className="text-white text-lg sm:text-xl text-center mt-4 font-merry">
                  LEGAL
                </h2>
                <p className="text-gray-300 text-xs lg:text-sm text-center mt-2 font-roboto">
                  Swiss-based jurisdiction backed by experienced legal advisors
                  with a feasible structure according to the new Swiss DLT Act.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="w-full">
  <div className="flex justify-center gap-10 flex-wrap mb-20 w-full">
  
  </div>
</div> */}

      <hr className="border-[#D2BA57]" />
    </>
  );
};
