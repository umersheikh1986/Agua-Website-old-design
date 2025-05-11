"use client";
// import { useEffect, useRef } from 'react';
// import * as THREE from 'three';

// const PieChart3D = () => {
//   const pieChartRef = useRef();

//   useEffect(() => {
//     const data = [
//       { value: 40, color: 0xff5733 }, // Segment 1
//       { value: 30, color: 0x33c7ff }, // Segment 2
//       { value: 20, color: 0xff33d1 }, // Segment 3
//       { value: 10, color: 0x75ff33 }, // Segment 4
//     ];

//     const total = data.reduce((sum, current) => sum + current.value, 0);
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
//     const renderer = new THREE.WebGLRenderer({ antialias: true });

//     renderer.setSize(window.innerWidth, window.innerHeight);
//     pieChartRef.current.appendChild(renderer.domElement);

//     camera.position.z = 5;

//     // Add lighting
//     const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
//     scene.add(ambientLight);
//     const pointLight = new THREE.PointLight(0xffffff, 1);
//     pointLight.position.set(10, 10, 10);
//     scene.add(pointLight);

//     // Create the pie chart
//     const radius = 2;
//     const height = 0.5; // Thickness of the pie chart
//     let startAngle = 0;

//     data.forEach((segment) => {
//       const endAngle = startAngle + (segment.value / total) * Math.PI * 2;
//       const geometry = new THREE.CylinderGeometry(radius, radius, height, 32, 1, false, startAngle, endAngle - startAngle);
//       const material = new THREE.MeshStandardMaterial({ color: segment.color });
//       const slice = new THREE.Mesh(geometry, material);

//       slice.rotation.x = Math.PI / 2; // Rotate to make it flat
//       scene.add(slice);

//       startAngle = endAngle;
//     });

//     const animate = () => {
//       requestAnimationFrame(animate);

//       // Optional: Rotate the pie chart for a 3D effect
//       scene.rotation.y += 0.01;

//       renderer.render(scene, camera);
//     };

//     animate();

//     // Handle resizing the canvas when window size changes
//     const handleResize = () => {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//     };

//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//       pieChartRef.current.removeChild(renderer.domElement);
//     };
//   }, []);

//   return <div ref={pieChartRef}></div>;
// };

// export default PieChart3D;
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ConnectWallet } from "@thirdweb-dev/react";
import { useRouter } from "next/navigation";
import Example2 from "./Example2";

export default function SlideTabsExample() {
  return <SlideTabs />;
}

const SlideTabs = () => {
  const router = useRouter();

  const handleNav = () => {
    router.push("../");
  };
  const handleNavigation = () => {
    router.push("../about");
  };
  const handleNavigatione = () => {
    router.push("../docs");
  };
  const handleNavigational = () => {
    router.push("../auth/signin");
  };

  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <>
      <div className="flex flex-wrap items-center justify-between h-13 mb-10 mt-4">
        {/* Logo */}
        <div>
          <img
            src="/Agua-logo1.png"
            className="h-16 w-24 md:h-20 md:w-28 lg:pr-4 sm:mr-0 md:ml-20 mt-4"
            alt="Flowbite Logo"
          />
        </div>

        {/* Tabs */}
        <div>
          <ul
            onMouseLeave={() => {
              setPosition((pv) => ({
                ...pv,
                opacity: 0,
              }));
            }}
            className="relative mx-auto mr-4 sm:mr-16 md:mr-0 flex border-2 rounded-3xl border-b-2 border-[#D0C80D] bg-transparent"
          >
            <Tab onClick={handleNav} setPosition={setPosition}>
              Home
            </Tab>
            <Tab onClick={handleNavigation} setPosition={setPosition}>
              About
            </Tab>
            <Tab onClick={handleNavigatione} setPosition={setPosition}>
              Docs
            </Tab>
            <Tab setPosition={setPosition}>Ecosystem</Tab>

            <Cursor position={position} />
          </ul>
        </div>

        {/* Buttons */}
        <div className="mt-0 md:mt-4 mb-4 md:mb-0 space-x-4">
          <Example2 onClick={handleNavigational} buttonName="SignIn" />
          <Example2 onClick={<ConnectWallet />} buttonName="Connect Wallet" />
        </div>
      </div>
    </>
  );
};

const Tab = ({ children, onClick, setPosition }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      onClick={onClick}
      className="relative z-10 block cursor-pointer px-2 py-3 text-xs uppercase text-yellow-400 hover mix-blend-difference sm:px-5 sm:py-3 md:text-base"
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 rounded-3xl bg-gradient-to-r from-[#F6F700] via-yellow-400 to-[#9C7509] h-10 sm:h-12"
    />
  );
};
