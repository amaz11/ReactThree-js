import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import Ground from "./Ground";
import Box from "./Box";
import AnimateLight from "./AnimateLight";
import { Iphone } from "./Iphone";

function CarShow() {
  return (
    <>
      <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45} />
      <PerspectiveCamera makeDefault fov={50} position={[3, 2, 5]} />
      <color args={[0, 0, 0]} attach="background" />
      <spotLight
        color={[1, 0.25, 0.7]}
        intensity={1.5}
        angle={0.6}
        penumbra={0.5}
        position={[5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />
      <spotLight
        color={[0.14, 0.5, 1]}
        intensity={2}
        angle={0.6}
        penumbra={0.5}
        position={[-5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />
      <Ground />
    </>
  );
}

function App() {
  return (
    <Suspense fallback={null}>
      <Canvas shadows className="canvas">
        <OrbitControls enableZoom={false} />
        {/* <CarShow /> */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 2, 5]} intensity={1} />
        <Box />
      </Canvas>
      <br />
      <Canvas shadows className="canvas">
        <OrbitControls enableZoom={false} />
        {/* <CarShow /> */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 2, 5]} intensity={1} />
        <AnimateLight />
      </Canvas>
      <Canvas shadows className="iphone">
        <OrbitControls enableZoom={false} />
        {/* <CarShow /> */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 2, 5]} intensity={1} />
        <Iphone />
      </Canvas>
    </Suspense>
  );
}

export default App;
