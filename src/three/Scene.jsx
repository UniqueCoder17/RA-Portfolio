import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";
import Laptop from "./Laptop";
import AnimatedRing from "./AnimatedRing";

const Scene = () => {
    return (
        <div className="absolute inset-0 z-0">
            <Canvas
                camera={{
                    position: [0, 1.3, 7],
                    fov: 35,
                }}
            >
                {/* Lights */}
                <ambientLight intensity={0.7} />

                <directionalLight
                    position={[5, 5, 5]}
                    intensity={2}
                />

                <pointLight
                    position={[3, 3, 3]}
                    color="#38bdf8"
                    intensity={35}
                />

                <pointLight
                    position={[-3, 2, 1]}
                    color="#7c3aed"
                    intensity={20}
                />

                {/* Ring (Fixed Position) */}
                <AnimatedRing
                    position={[2.55, 0.15, -2.1]}
                    scale={1.2}
                />

                <Laptop />

                {/* Controls */}
                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    autoRotate={false}
                />
            </Canvas>
        </div >
    );
};

export default Scene;