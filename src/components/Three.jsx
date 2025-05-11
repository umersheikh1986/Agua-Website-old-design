// // pages/three-lensflare.js
// import { useEffect, useRef } from 'react';
// import * as THREE from 'three';
// import Stats from 'three/examples/jsm/libs/stats.module.js';
// import { FlyControls } from 'three/examples/jsm/controls/FlyControls.js';
// import { Lensflare, LensflareElement } from 'three/examples/jsm/objects/Lensflare.js';

// const ThreeLensflare = () => {
//   const containerRef = useRef(null);

//   useEffect(() => {
//     let camera, scene, renderer, controls, stats;
//     const clock = new THREE.Clock();

//     const init = () => {
//       const container = containerRef.current;

//       // Camera setup
//       camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 15000);
//       camera.position.z = 250;

//       // Scene setup
//       scene = new THREE.Scene();
//       scene.background = new THREE.Color().setHSL(0.51, 0.4, 0.01);
//       scene.fog = new THREE.Fog(scene.background, 3500, 15000);

//       // Geometry setup
//       const s = 250;
//       const geometry = new THREE.BoxGeometry(s, s, s);
//       const material = new THREE.MeshPhongMaterial({ color: 0xffffff, specular: 0xffffff, shininess: 50 });

//       for (let i = 0; i < 3000; i++) {
//         const mesh = new THREE.Mesh(geometry, material);
//         mesh.position.x = 8000 * (2.0 * Math.random() - 1.0);
//         mesh.position.y = 8000 * (2.0 * Math.random() - 1.0);
//         mesh.position.z = 8000 * (2.0 * Math.random() - 1.0);
//         mesh.rotation.x = Math.random() * Math.PI;
//         mesh.rotation.y = Math.random() * Math.PI;
//         mesh.rotation.z = Math.random() * Math.PI;
//         mesh.matrixAutoUpdate = false;
//         mesh.updateMatrix();
//         scene.add(mesh);
//       }

//       // Lighting setup
//       const dirLight = new THREE.DirectionalLight(0xffffff, 0.15);
//       dirLight.position.set(0, -1, 0).normalize();
//       dirLight.color.setHSL(0.1, 0.7, 0.5);
//       scene.add(dirLight);

//       // Lensflares
//       const textureLoader = new THREE.TextureLoader();
//       const textureFlare0 = textureLoader.load('/textures/lensflare/lensflare0.png');
//       const textureFlare3 = textureLoader.load('/textures/lensflare/lensflare3.png');

//       addLight(0.55, 0.9, 0.5, 5000, 0, -1000);
//       addLight(0.08, 0.8, 0.5, 0, 0, -1000);
//       addLight(0.995, 0.5, 0.9, 5000, 5000, -1000);

//       function addLight(h, s, l, x, y, z) {
//         const light = new THREE.PointLight(0xffffff, 1.5, 2000, 0);
//         light.color.setHSL(h, s, l);
//         light.position.set(x, y, z);
//         scene.add(light);

//         const lensflare = new Lensflare();
//         lensflare.addElement(new LensflareElement(textureFlare0, 700, 0, light.color));
//         lensflare.addElement(new LensflareElement(textureFlare3, 60, 0.6));
//         lensflare.addElement(new LensflareElement(textureFlare3, 70, 0.7));
//         lensflare.addElement(new LensflareElement(textureFlare3, 120, 0.9));
//         lensflare.addElement(new LensflareElement(textureFlare3, 70, 1));
//         light.add(lensflare);
//       }

//       // Renderer setup
//       renderer = new THREE.WebGLRenderer({ antialias: true });
//       renderer.setPixelRatio(window.devicePixelRatio);
//       renderer.setSize(window.innerWidth, window.innerHeight);
//       renderer.setAnimationLoop(animate);
//       container.appendChild(renderer.domElement);

//       // Controls setup
//       controls = new FlyControls(camera, renderer.domElement);
//       controls.movementSpeed = 2500;
//       controls.rollSpeed = Math.PI / 6;

//       // Stats setup
//       stats = new Stats();
//       container.appendChild(stats.dom);

//       // Event listeners
//       window.addEventListener('resize', onWindowResize);
//     };

//     const onWindowResize = () => {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//     };

//     const animate = () => {
//       const delta = clock.getDelta();
//       controls.update(delta);
//       stats.update();
//       renderer.render(scene, camera);
//     };

//     init();

//     return () => {
//       window.removeEventListener('resize', onWindowResize);
//     };
//   }, []);

//   return (
//     <>
//       <div id="info" className='absolute bg-transparent z-3 opacity-15'>
//         <a href="https://threejs.org" target="_blank" rel="noopener noreferrer">
//           three.js
//         </a>{' '}
//         - lensflares<br />
//         textures from{' '}
//         <a href="http://www.ro.me" target="_blank" rel="noopener noreferrer">
//           ro.me
//         </a>
//         <br />
//         fly with WASD/RF/QE + mouse
//       </div>
//       <div ref={containerRef}></div>
//     </>
//   );
// };

// export default ThreeLensflare;
import React, { useState, useEffect } from "react";
import CanvasScene from "./Animate";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const SwipeCards = () => {
  const [cards, setCards] = useState(cardData);

  // Reset cards when all are swiped out
  useEffect(() => {
    if (cards.length === 0) {
      const timer = setTimeout(() => setCards(cardData), 1000); // Add a slight delay before resetting
      return () => clearTimeout(timer);
    }
  }, [cards]);

  return (
    <>
      <div
        className="flex justify-center bg-gradient-radial gradient-bg h-[750px] gap-40"
        // style={{
        //   backgroundImage: `url('/Animate2-pic.png')`,
        //   backgroundSize: "cover",
        //   backgroundPosition: "center",
        // }}
      >
        {/* <CanvasScene /> */}
        {/* Left div */}
        <div className="grid md:w-[550px] place-items-center">
          {cards.map((card) => (
            <Card key={card.id} cards={cards} setCards={setCards} {...card} />
          ))}
        </div>

        {/* Right div */}
        {/* <div className="w-[550px] h-full place-items-center">
        <DotLottieReact
          src="https://lottie.host/9c2624b7-1b7b-4e01-8f98-87c5fa9ecf4f/QHG1DliIY5.lottie"
          loop
          autoplay
        />
      </div> */}
      </div>
      <hr className="border-2 border-[#D2BA57]" />
    </>
  );
};

const Card = ({ id, title, description, smallImage, setCards, cards }) => {
  const x = useMotionValue(0);
  const rotateRaw = useTransform(x, [-150, 150], [-18, 18]);
  const opacity = useTransform(x, [-150, 0, 150], [0, 1, 0]);

  const isFront = id === cards[cards.length - 1]?.id;

  const rotate = useTransform(rotateRaw, (value) => {
    const offset = isFront ? 0 : id % 2 ? 6 : -6;
    return `${value + offset}deg`;
  });

  const handleDragEnd = () => {
    if (Math.abs(x.get()) > 100) {
      setCards((prevCards) => prevCards.filter((card) => card.id !== id));
    }
  };

  return (
    <motion.div
      className="relative flex justify-center items-center flex-col h-96 w-72 origin-bottom rounded-lg bg-gradient-to-r from-yellow-500 via-yellow-500 to-yellow-700 p-4 shadow-lg hover:cursor-grab active:cursor-grabbing"
      style={{
        gridRow: 1,
        gridColumn: 1,
        x,
        opacity,
        rotate,
        transition: "0.125s transform",
        boxShadow: isFront
          ? "0 20px 25px -5px rgb(0 0 0 / 0.5), 0 8px 10px -6px rgb(0 0 0 / 0.5)"
          : undefined,
      }}
      animate={{
        scale: isFront ? 1 : 0.98,
      }}
      drag
      dragConstraints={{ left: -100, right: 100 }}
      onDragEnd={handleDragEnd}
    >
      <h2 className="mb-2 text-lg font-bold text-white text-center">{title}</h2>
      <img src={smallImage} alt="Small Thumbnail" className="mb-2 h-16 w-16" />
      <p className="text-sm text-white">{description}</p>
    </motion.div>
  );
};

export default SwipeCards;

const cardData = [
  {
    id: 1,
    title: "OPPORTUNITY",
    description:
      "AGUA blends the stability of silver and gold with DeFi innovation, offering secure wealth preservation and access to lending, staking, and yield farming. Fully backed by precious metals, users can trade, earn rewards, and shape the platform’s future in a transparent, accessible ecosystem.",
    url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    smallImage: "https://agcoin.io/wp-content/uploads/2021/03/opportunity.png",
  },
  {
    id: 2,
    title: "TECHNOLOGY",
    description:
      "AGUA uses advanced blockchain technology to offer a secure, transparent platform for minting and managing silver and gold-backed tokens. With integrated DeFi features like lending, staking, and trading, users can engage in a trusted, decentralized ecosystem. Real-time reserve audits and DAO governance ensure transparency, security, and community-driven growth.",
    url: "",
    smallImage: "https://agcoin.io/wp-content/uploads/2021/03/goal.png",
  },
  {
    id: 3,
    title: "APPLICATION",
    description:
      "The AGUA platform allows users to easily manage digital assets, mint silver and gold-backed tokens, and engage in DeFi activities like staking, lending, and trading. With real-time reserve tracking and governance tools, it empowers secure, transparent wealth management.",
    url: "",
    smallImage: "https://agcoin.io/wp-content/uploads/2021/03/global.png",
  },
  {
    id: 4,
    title: "STRUCTURE",
    description:
      "AGUA's decentralized structure is powered by blockchain, ensuring transparency and security. Each AG and AU token is 60/40 backed by silver and gold, with smart contracts managing minting, transactions, and audits. DAO governance allows users to shape the platform, ensuring stability and a user-driven ecosystem.",
    url: "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?q=80&w=2235&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    smallImage: "https://agcoin.io/wp-content/uploads/2021/03/utility.png",
  },
  {
    id: 5,
    title: "LEGAL",
    description:
      " Swiss-based jurisdiction backed by experienced legal advisors with a feasible structure according to the new Swiss DLT Act.",
    url: "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?q=80&w=2235&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    smallImage: "https://agcoin.io/wp-content/uploads/2021/03/legal.png",
  },
];
