import { Torus, MeshDistortMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const AnimatedRing = (props) => {
  const ring = useRef();

  useFrame((state, delta) => {
    if (!ring.current) return;

    // শুধু নিজের axis-এ rotate করবে
    ring.current.rotation.z += delta * 0.5;
    ring.current.rotation.x += delta * 0.08;
  });

  return (
    <group {...props}>
      {/* Outer Ring */}
      <Torus ref={ring} args={[2.2, 0.08, 32, 200]}>
        <MeshDistortMaterial
          color="#38bdf8"
          emissive="#38bdf8"
          emissiveIntensity={4}
          distort={0.12}
          speed={2}
          roughness={0}
          metalness={1}
        />
      </Torus>

      {/* Middle Ring */}
      <Torus
        rotation={[0.4, 0.5, 0]}
        args={[1.85, 0.04, 24, 150]}
      >
        <meshStandardMaterial
          color="#7c3aed"
          emissive="#7c3aed"
          emissiveIntensity={3}
          metalness={1}
          roughness={0}
        />
      </Torus>

      {/* Inner Ring */}
      <Torus
        rotation={[-0.5, 0.2, 0]}
        args={[1.45, 0.025, 24, 120]}
      >
        <meshStandardMaterial
          color="#06b6d4"
          emissive="#06b6d4"
          emissiveIntensity={2.5}
          metalness={1}
          roughness={0}
        />
      </Torus>

      {/* Center Glow */}
      <pointLight
        color="#38bdf8"
        intensity={35}
        distance={8}
      />
    </group>
  );
};

export default AnimatedRing;