import { RoundedBox, Text, useTexture } from "@react-three/drei";


const Laptop = () => {
    const photo = useTexture("/raihan.jpg");
    return (
        <group
            position={[0.3, -0.45, 0]}
            rotation={[-0.02, -0.02, 0]}
            scale={0.68}
        >
            {/* ================= BASE ================= */}

            <RoundedBox
                args={[3.4, 0.12, 2.3]}
                radius={0.06}
                smoothness={10}
            >
                <meshStandardMaterial
                    color="#161b22"
                    metalness={1}
                    roughness={0.15}
                />
            </RoundedBox>

            {/* Bottom Plate */}

            <mesh position={[0, -0.075, 0.08]}>
                <boxGeometry args={[3.3, 0.025, 2.15]} />
                <meshStandardMaterial
                    color="#0d1117"
                    metalness={1}
                    roughness={0.25}
                />
            </mesh>

            {/* ================= KEYBOARD ================= */}

            <group position={[0, 0.055, -0.02]}>

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
                                -0.68 + row * 0.18,
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

                {/* Space Bar */}

                <RoundedBox
                    args={[0.95, 0.025, 0.14]}
                    radius={0.01}
                    position={[0, 0, 0.58]}
                >
                    <meshStandardMaterial
                        color="#20242c"
                        metalness={0.9}
                        roughness={0.3}
                    />
                </RoundedBox>

                {/* Left Shift */}

                <RoundedBox
                    args={[0.42, 0.025, 0.14]}
                    radius={0.01}
                    position={[-0.92, 0, 0.58]}
                >
                    <meshStandardMaterial color="#20242c" />
                </RoundedBox>

                {/* Right Shift */}

                <RoundedBox
                    args={[0.55, 0.025, 0.14]}
                    radius={0.01}
                    position={[0.78, 0, 0.58]}
                >
                    <meshStandardMaterial color="#20242c" />
                </RoundedBox>

                {/* Enter */}

                <RoundedBox
                    args={[0.18, 0.025, 0.32]}
                    radius={0.01}
                    position={[1.02, 0, 0.18]}
                >
                    <meshStandardMaterial color="#20242c" />
                </RoundedBox>

            </group>

            {/* ================= TRACKPAD ================= */}

            <RoundedBox
                args={[1.15, 0.012, 0.72]}
                radius={0.02}
                smoothness={6}
                position={[0, 0.03, 0.78]}
            >
                <meshStandardMaterial
                    color="#4b5563"
                    metalness={1}
                    roughness={0.12}
                />
            </RoundedBox>

            {/* ================= SCREEN ================= */}

            <group
                position={[0, 1.15, -1.02]}
                rotation={[-0.45, 0, 0]}
            >
                {/* Outer Frame */}
                <RoundedBox
                    args={[3.02, 1.92, 0.08]}
                    radius={0.05}
                    smoothness={10}
                >
                    <meshStandardMaterial
                        color="#111827"
                        metalness={1}
                        roughness={0.12}
                    />
                </RoundedBox>

                {/* Inner Black Bezel */}
                <mesh position={[0, 0, 0.041]}>
                    <planeGeometry args={[2.84, 1.74]} />
                    <meshBasicMaterial color="#050816" />
                </mesh>

                {/* Screen */}
                <mesh position={[0, 0, 0.045]}>
                    <planeGeometry args={[2.74, 1.64]} />
                    <meshBasicMaterial
                        map={photo}
                        toneMapped={false}
                    />
                </mesh>

                {/* Camera */}
                <mesh position={[0, 0.88, 0.05]}>
                    <sphereGeometry args={[0.018, 20, 20]} />
                    <meshBasicMaterial color="#000" />
                </mesh>

                {/* Camera Light */}
                <mesh position={[0.06, 0.88, 0.05]}>
                    <sphereGeometry args={[0.008, 16, 16]} />
                    <meshBasicMaterial color="#22d3ee" />
                </mesh>

                {/* Name */}
                <Text
                    position={[0.38, 0.48, 0.055]}
                    fontSize={0.11}
                    color="#38bdf8"
                    anchorX="left"
                    anchorY="middle"
                >
                    RAIHAN ALAM
                </Text>

                {/* Role */}
                <Text
                    position={[0.38, 0.26, 0.055]}
                    fontSize={0.06}
                    color="white"
                    anchorX="left"
                    anchorY="middle"
                >
                    Full Stack Developer
                </Text>

                {/* Status */}
                <Text
                    position={[0.38, 0.05, 0.055]}
                    fontSize={0.055}
                    color="#22c55e"
                    anchorX="left"
                    anchorY="middle"
                >
                    ● Available For Work
                </Text>

                {/* Small Glow */}
                <pointLight
                    position={[0, 0, 0.4]}
                    color="#38bdf8"
                    intensity={8}
                    distance={4}
                />
            </group>
        </group>
    );
};

export default Laptop;