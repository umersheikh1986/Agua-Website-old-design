"use client"; // For React components in Next.js 13+

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as GeometryUtils from "three/examples/jsm/utils/GeometryUtils";

const ThreeFramebuffer = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    let camera, scene, renderer, line, sprite, texture, cameraOrtho, sceneOrtho;
    let offset = 0;

    const dpr = window.devicePixelRatio;
    const textureSize = 128 * dpr;
    const vector = new THREE.Vector2();
    const color = new THREE.Color();

    const init = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      // Perspective Camera
      camera = new THREE.PerspectiveCamera(70, width / height, 1, 1000);
      camera.position.z = 20;

      // Orthographic Camera
      cameraOrtho = new THREE.OrthographicCamera(
        -width / 2,
        width / 2,
        height / 2,
        -height / 2,
        1,
        10
      );
      cameraOrtho.position.z = 10;

      // Scenes
      scene = new THREE.Scene();
      sceneOrtho = new THREE.Scene();

      // Geometry
      const points = GeometryUtils.gosper(8);
      const geometry = new THREE.BufferGeometry();
      const positionAttribute = new THREE.Float32BufferAttribute(points, 3);
      geometry.setAttribute("position", positionAttribute);
      geometry.center();

      const colorAttribute = new THREE.BufferAttribute(
        new Float32Array(positionAttribute.array.length),
        3
      );
      colorAttribute.setUsage(THREE.DynamicDrawUsage);
      geometry.setAttribute("color", colorAttribute);

      const material = new THREE.LineBasicMaterial({ vertexColors: true });
      line = new THREE.Line(geometry, material);
      line.scale.setScalar(0.05);
      scene.add(line);

      // Framebuffer Texture
      texture = new THREE.FramebufferTexture(textureSize, textureSize);

      // Sprite
      const spriteMaterial = new THREE.SpriteMaterial({ map: texture });
      sprite = new THREE.Sprite(spriteMaterial);
      sprite.scale.set(textureSize, textureSize, 1);
      sceneOrtho.add(sprite);

      // Renderer
      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(width, height);
      renderer.setAnimationLoop(animate);
      renderer.autoClear = false;
      mountRef.current.appendChild(renderer.domElement);

      // OrbitControls
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enablePan = false;

      // Event Listener
      window.addEventListener("resize", onWindowResize);

      updateSpritePosition();
    };

    const onWindowResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      cameraOrtho.left = -width / 2;
      cameraOrtho.right = width / 2;
      cameraOrtho.top = height / 2;
      cameraOrtho.bottom = -height / 2;
      cameraOrtho.updateProjectionMatrix();

      renderer.setSize(width, height);
      updateSpritePosition();
    };

    const updateSpritePosition = () => {
      const halfWidth = window.innerWidth / 2;
      const halfHeight = window.innerHeight / 2;

      const halfImageWidth = textureSize / 2;
      const halfImageHeight = textureSize / 2;

      sprite.position.set(
        -halfWidth + halfImageWidth,
        halfHeight - halfImageHeight,
        1
      );
    };

    const animate = () => {
      const colorAttribute = line.geometry.getAttribute("color");
      updateColors(colorAttribute);

      // Scene Rendering
      renderer.clear();
      renderer.render(scene, camera);

      // Copy framebuffer data
      vector.x = (window.innerWidth * dpr) / 2 - textureSize / 2;
      vector.y = (window.innerHeight * dpr) / 2 - textureSize / 2;

      renderer.copyFramebufferToTexture(texture, vector);

      // Render Ortho Scene
      renderer.clearDepth();
      renderer.render(sceneOrtho, cameraOrtho);
    };

    const updateColors = (colorAttribute) => {
      const l = colorAttribute.count;

      for (let i = 0; i < l; i++) {
        const h = ((offset + i) % l) / l;
        color.setHSL(h, 1, 0.5);
        colorAttribute.setX(i, color.r);
        colorAttribute.setY(i, color.g);
        colorAttribute.setZ(i, color.b);
      }

      colorAttribute.needsUpdate = true;
      offset -= 25;
    };

    init();

    return () => {
      // Cleanup on component unmount
      mountRef.current.innerHTML = "";
      renderer.dispose();
      window.removeEventListener("resize", onWindowResize);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute z-3 opacity-50"
      style={{ height: "100vh", width: "100vw" }}
    />
  );
};

export default ThreeFramebuffer;
