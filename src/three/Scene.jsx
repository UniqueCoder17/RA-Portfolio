import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Laptop from "./Laptop";
import AnimatedRing from "./AnimatedRing";

const Scene = () => {
    return (
        <Canvas
            camera={{
                position: [0, 0.8, 7],
                fov: 38,
            }}
            style={{
                width: "100%",
                height: "100%",
            }}
        >
            {/* Lights */}
            <ambientLight intensity={1} />

            <directionalLight
                position={[5, 5, 5]}
                intensity={2}
            />

            <pointLight
                position={[3, 3, 3]}
                color="#38bdf8"
                intensity={25}
            />

            <pointLight
                position={[-3, 2, 1]}
                color="#7c3aed"
                intensity={15}
            />

            {/* Ring */}
           <AnimatedRing
    position={[0.45, 0.15, -2]}
    scale={1.1}
/>

            <Laptop />

            <OrbitControls
                enableZoom={false}
                enablePan={false}
                enableRotate={false}
            />
        </Canvas>
    );
};

export default Scene;