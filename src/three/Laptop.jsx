import { RoundedBox, Text, useTexture } from "@react-three/drei";


const Laptop = () => {
    const photo = useTexture("/raihan.jpg");
    return (
        <group
            rotation={[-0.22, 0.45, 0]}
            position={[2.7, -0.85, 0]}
            scale={0.65}
        >
            {/* Base */}
            <RoundedBox
                args={[3.4, 0.12, 2.25]}
                radius={0.05}
                smoothness={8}
            >
                <meshStandardMaterial
                    color="#161b22"
                    metalness={1}
                    roughness={0.18}
                />
            </RoundedBox>

            {/* Keyboard */}
            <group position={[0, 0.055, -0.18]}>
                {Array.from({ length: 6 }).map((_, row) =>
                    Array.from({ length: 14 }).map((_, col) => (
                        <RoundedBox
                            key={`${row}-${col}`}
                            args={[0.14, 0.025, 0.14]}
                            radius={0.01}
                            smoothness={4}
                            position={[
                                -1.05 + col * 0.16,
                                0,
                                -0.62 + row * 0.18,
                            ]}
                        >
                            <meshStandardMaterial
                                color="#20242c"
                                metalness={0.9}
                                roughness={0.3}
                            />
                        </RoundedBox>
                    ))

                )}
                <RoundedBox
                    args={[0.95, 0.025, 0.14]}
                    radius={0.01}
                    position={[0, 0.055, 0.47]}
                >
                    <meshStandardMaterial
                        color="#20242c"
                        metalness={0.9}
                        roughness={0.3}
                    />
                </RoundedBox>

                {/* Left Shift */}
                <RoundedBox
                    args={[0.38, 0.025, 0.14]}
                    radius={0.01}
                    position={[-0.92, 0.055, 0.47]}
                >
                    <meshStandardMaterial
                        color="#20242c"
                        metalness={0.9}
                        roughness={0.3}
                    />
                </RoundedBox>

                {/* Right Shift */}
                <RoundedBox
                    args={[0.52, 0.025, 0.14]}
                    radius={0.01}
                    position={[0.75, 0.055, 0.47]}
                >
                    <meshStandardMaterial
                        color="#20242c"
                        metalness={0.9}
                        roughness={0.3}
                    />
                </RoundedBox>

            </group>

            {/* Trackpad */}
            <mesh position={[0, 0.028, 0.78]}>
                <boxGeometry args={[1.2, 0.01, 0.75]} />
                <meshStandardMaterial
                    color="#4b5563"
                    metalness={1}
                    roughness={0.15}
                />
            </mesh>

            {/* Bottom Plate */}
            <mesh position={[0, -0.07, 0]}>
                <boxGeometry args={[3.25, 0.02, 2.05]} />
                <meshStandardMaterial
                    color="#0d1117"
                    metalness={1}
                    roughness={0.25}
                />
            </mesh>

            {/* Screen Frame */}
            <group position={[0, 1.1, -0.98]} rotation={[-0.5, 0, 0]}>

                {/* Outer Frame */}
                <RoundedBox
                    args={[3, 1.9, 0.08]}
                    radius={0.05}
                    smoothness={8}
                >
                    <meshStandardMaterial
                        color="#111827"
                        metalness={1}
                        roughness={0.15}
                    />
                </RoundedBox>

                {/* Screen */}
                <mesh position={[0, 0, 0.045]}>
                    <planeGeometry args={[2.72, 1.62]} />
                    <meshBasicMaterial
                        map={photo}
                        toneMapped={false}
                    />
                </mesh>

                <Text
                    position={[0.4, 0.45, 0.05]}
                    fontSize={0.11}
                    color="#38bdf8"
                    anchorX="left"
                >
                    RAIHAN ALAM
                </Text>

                <Text
                    position={[0.4, 0.25, 0.05]}
                    fontSize={0.06}
                    color="white"
                    anchorX="left"
                >
                    Full Stack Developer
                </Text>

                <Text
                    position={[0.4, 0.05, 0.05]}
                    fontSize={0.05}
                    color="#22c55e"
                    anchorX="left"
                >
                    ● Available For Work
                </Text>

                {/* Camera */}
                <mesh position={[0, 0.87, 0.05]}>
                    <sphereGeometry args={[0.02, 16, 16]} />
                    <meshBasicMaterial color="#000" />
                </mesh>

            </group>

            {/* Screen Glow */}
            <pointLight
                position={[0, 1.1, -0.5]}
                color="#38bdf8"
                intensity={20}
            />

        </group>
    );
};

export default Laptop;