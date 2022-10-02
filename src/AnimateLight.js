import { MeshDistortMaterial, Sphere } from "@react-three/drei";
import React from "react";

const AnimateLight = () => {
  return (
    <Sphere visible args={[1, 100, 200]} scale={2}>
      <MeshDistortMaterial
        color="#8352FD"
        distort={0.5}
        speed={1}
        roughness={0}
      />
    </Sphere>
  );
};

export default AnimateLight;
