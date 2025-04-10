import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import { PLYLoader } from "three/examples/jsm/loaders/PLYLoader";
import CanvasLoader from "../Loader"; // Custom loader component

// Point Cloud component to load and display point cloud
const PointCloud = ({ fileUrl }) => {
  const [pointCloud, setPointCloud] = useState(null);

  useEffect(() => {
    const loader = new PLYLoader();
    loader.load(fileUrl, (geometry) => {
      geometry.computeVertexNormals(); // Compute normals for better shading
      setPointCloud(geometry);
    });
  }, [fileUrl]);

  if (pointCloud) {
    return (
      <points rotation={[-Math.PI / 2, 0, 0]}>
        <bufferGeometry attach="geometry" {...pointCloud} />
        <pointsMaterial attach="material" size={0.05} vertexColors={true} />
      </points>
    );
  }

  return null; // Show a loader while the point cloud is loading
};

const ComputersCanvas = () => {
  const pointCloudFileUrl = "/desktop_pc/AAL_RusselHeightsSite_AF.ply"; // URL to your .ply point cloud file

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{
        position: [20, 50, 50], // Adjust camera position
        zoom: 75,
        near: 0.1,
        far: 1000,
      }}
      orthographic
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          enableZoom={false} 
          enablePan={true}
          maxPolarAngle={Math.PI / 2.8}
          minPolarAngle={Math.PI / 3}
          />
        <PointCloud fileUrl={pointCloudFileUrl} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
