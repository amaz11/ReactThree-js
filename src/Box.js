import { useLoader } from "@react-three/fiber";
import React from "react";
import { TextureLoader } from "three";
import terrain from "./texture/terrain-normal.jpg";

const Box = () => {
  const colorMap = useLoader(TextureLoader, terrain);
  return (
    <mesh position={[0, 0, 0]} scale={3}>
      <boxGeometry args={[1, 1, 1]} />
      {/* <planeGeometry args={[30, 30]} /> */}
      {/* <meshLambertMaterial attach="material" color="blue" /> */}
      <meshStandardMaterial map={colorMap} />
    </mesh>
  );
};

export default Box;
