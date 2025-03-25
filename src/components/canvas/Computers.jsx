import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Models = ({ isMobile }) => {
  const model = useGLTF("./desktop_pc/thesis_exhibition_1_noTopo.glb");

  return (
    <mesh>
      <hemisphereLight intensity={100} groundColor="white" />
      <pointLight intensity={60} />
      <ambientLight intensity={100}/>
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={100}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={model.scene}
        scale={isMobile ? 0.15 : 0.2}
        position={isMobile ? [0, -2.5, 10] : [0, 0, 0]}
        rotation={[0, 90, 0]}
      />
    </mesh>
  );
};

const ModelCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{
        position: [10, 10, 10], // Isometric angle
        zoom: isMobile ? 50 : 200, // Adjust scale
        near: 0.1,
        far: 1000,
      }}
      orthographic // Enable orthographic projection
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 3}
          minPolarAngle={Math.PI / 3}
        />
        <Models isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ModelCanvas;
