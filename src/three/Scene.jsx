import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";
import Laptop from "./Laptop";

const Scene = () => {
    return (
        <div className="absolute inset-0 z-0">
            <Canvas
                camera={{
                    position: [0, 1.3, 7],
                    fov: 35,
                }}
            >
                {/* Ambient Light */}
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

                <Float
                    speed={2}
                    rotationIntensity={0.5}
                    floatIntensity={1.2}
                >
                    <Laptop />
                </Float>

                <OrbitControls
                    enableZoom={false}
                    autoRotate
                    autoRotateSpeed={1}
                />
            </Canvas>
        </div>
    );
};

export default Scene;