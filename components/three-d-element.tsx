"use client";

import { useRef, useState, useEffect, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Html, Text } from "@react-three/drei";
import * as THREE from "three";

const QUESTIONS = [
    "Need a Full Stack Dev?",
    "Building a SaaS?",
    "Want Pixel-Perfect UI?",
    "Scaling your Web App?",
    "Let's Build Something!"
];

export function ThreeDElement() {
    const groupRef = useRef<THREE.Group>(null);
    const headGroupRef = useRef<THREE.Group>(null);
    const leftEyeRef = useRef<THREE.Group>(null);
    const rightEyeRef = useRef<THREE.Group>(null);

    const [questionIndex, setQuestionIndex] = useState(0);
    const [showBubble, setShowBubble] = useState(false);

    // Cycle questions
    useEffect(() => {
        const interval = setInterval(() => {
            setShowBubble(false);
            setTimeout(() => {
                setQuestionIndex((prev) => (prev + 1) % QUESTIONS.length);
                setShowBubble(true);
            }, 500);
        }, 4000);

        // Initial show
        setTimeout(() => setShowBubble(true), 1000);

        return () => clearInterval(interval);
    }, []);

    // Smooth mouse tracking refs
    const targetRotation = useRef(new THREE.Vector2(0, 0));

    useFrame((state, delta) => {
        if (!groupRef.current || !headGroupRef.current) return;

        const { x, y } = state.mouse;

        // Smooth interaction
        targetRotation.current.x = THREE.MathUtils.lerp(targetRotation.current.x, y, delta * 3);
        targetRotation.current.y = THREE.MathUtils.lerp(targetRotation.current.y, x, delta * 3);

        // Head looks towards mouse
        headGroupRef.current.rotation.x = -targetRotation.current.x * 0.3;
        headGroupRef.current.rotation.y = targetRotation.current.y * 0.3;

        // Eyes track MORE (Reflexes)
        if (leftEyeRef.current && rightEyeRef.current) {
            const eyeX = -targetRotation.current.x * 0.2;
            const eyeY = targetRotation.current.y * 0.2;

            leftEyeRef.current.rotation.x = eyeX;
            leftEyeRef.current.rotation.y = eyeY;

            rightEyeRef.current.rotation.x = eyeX;
            rightEyeRef.current.rotation.y = eyeY;
        }
    });

    // MATERIALS
    const skinMaterial = useMemo(() => new THREE.MeshToonMaterial({ color: "#fca5a5" }), []); // Peach/Skin
    const darkMaterial = useMemo(() => new THREE.MeshToonMaterial({ color: "#1e293b" }), []); // Dark Slate
    const whiteMaterial = useMemo(() => new THREE.MeshToonMaterial({ color: "#ffffff" }), []);
    const hairMaterial = useMemo(() => new THREE.MeshToonMaterial({ color: "#475569" }), []); // Slate hair

    return (
        <group position={[0, -0.5, 0]}>
            <Float speed={2} rotationIntensity={0.1} floatIntensity={0.2}>
                <group ref={groupRef}>
                    <group ref={headGroupRef}>
                        {/* HEAD */}
                        <mesh position={[0, 0.2, 0]}>
                            <sphereGeometry args={[1, 32, 32]} />
                            <primitive object={skinMaterial} />
                        </mesh>

                        {/* CAP / HAIR */}
                        <mesh position={[0, 0.4, 0]} rotation={[-0.2, 0, 0]}>
                            <sphereGeometry args={[1.02, 32, 32, 0, Math.PI * 2, 0, Math.PI / 1.7]} />
                            <primitive object={hairMaterial} />
                        </mesh>
                        <mesh position={[0, 0.4, 0.8]} rotation={[0.2, 0, 0]}>
                            <cylinderGeometry args={[1, 1, 0.1, 32, 1, false, 0, Math.PI]} />
                            <primitive object={hairMaterial} />
                        </mesh>

                        {/* EYES GROUP */}
                        <group position={[0, 0.1, 0.85]}>
                            {/* Left Eye */}
                            <group ref={leftEyeRef} position={[-0.35, 0, 0]}>
                                <mesh>
                                    <sphereGeometry args={[0.25, 32, 32]} />
                                    <primitive object={whiteMaterial} />
                                </mesh>
                                <mesh position={[0, 0, 0.22]} scale={0.6}>
                                    <sphereGeometry args={[0.2, 32, 32]} />
                                    <primitive object={darkMaterial} />
                                </mesh>
                            </group>

                            {/* Right Eye */}
                            <group ref={rightEyeRef} position={[0.35, 0, 0]}>
                                <mesh>
                                    <sphereGeometry args={[0.25, 32, 32]} />
                                    <primitive object={whiteMaterial} />
                                </mesh>
                                <mesh position={[0, 0, 0.22]} scale={0.6}>
                                    <sphereGeometry args={[0.2, 32, 32]} />
                                    <primitive object={darkMaterial} />
                                </mesh>
                            </group>
                        </group>

                        {/* GLASSES (Simple frames) */}
                        <mesh position={[-0.35, 0.1, 0.9]}>
                            <torusGeometry args={[0.3, 0.04, 16, 32]} />
                            <primitive object={darkMaterial} />
                        </mesh>
                        <mesh position={[0.35, 0.1, 0.9]}>
                            <torusGeometry args={[0.3, 0.04, 16, 32]} />
                            <primitive object={darkMaterial} />
                        </mesh>
                        <mesh position={[0, 0.1, 0.9]} rotation={[0, 0, 1.57]}>
                            <cylinderGeometry args={[0.03, 0.03, 0.2]} />
                            <primitive object={darkMaterial} />
                        </mesh>


                        {/* SPEECH BUBBLE */}
                        <Html position={[1.2, 1.2, 0]} center transform style={{ pointerEvents: 'none' }}>
                            <div className={`transition-all duration-500 ease-out transform ${showBubble ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'}`}>
                                <div className="bg-white/90 backdrop-blur-sm px-4 py-3 rounded-2xl rounded-bl-sm shadow-xl border border-black/5 whitespace-nowrap">
                                    <p className="text-sm font-bold text-slate-800 font-sans">
                                        {QUESTIONS[questionIndex]}
                                    </p>
                                </div>
                            </div>
                        </Html>
                    </group>
                </group>
            </Float>

            {/* FLOATING TECH ICONS */}
            <group>
                <Float speed={1.5} rotationIntensity={1} floatIntensity={1} position={[-1.8, 1, -1]}>
                    <Text font="/fonts/Inter-Bold.woff" fontSize={0.6} color="#3178c6">
                        TS
                    </Text>
                </Float>
                <Float speed={1.2} rotationIntensity={1} floatIntensity={1} position={[1.8, 0.5, -2]}>
                    <Text fontSize={0.6} color="#f7df1e">
                        JS
                    </Text>
                </Float>
                <Float speed={2} rotationIntensity={2} floatIntensity={0.5} position={[-1.5, -1, 0]}>
                    {/* React Atom */}
                    <group scale={0.4}>
                        <mesh>
                            <sphereGeometry args={[0.2]} />
                            <meshBasicMaterial color="#61dafb" />
                        </mesh>
                        <mesh rotation={[0, 0, 0]}>
                            <torusGeometry args={[1, 0.05, 16, 32]} />
                            <meshBasicMaterial color="#61dafb" />
                        </mesh>
                        <mesh rotation={[1, 1, 0]}>
                            <torusGeometry args={[1, 0.05, 16, 32]} />
                            <meshBasicMaterial color="#61dafb" />
                        </mesh>
                        <mesh rotation={[-1, 1, 0]}>
                            <torusGeometry args={[1, 0.05, 16, 32]} />
                            <meshBasicMaterial color="#61dafb" />
                        </mesh>
                    </group>
                </Float>
            </group>
        </group>
    );
}
