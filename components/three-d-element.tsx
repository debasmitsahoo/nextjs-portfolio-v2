"use client";

import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useCursor } from "@react-three/drei";
import * as THREE from "three";

export function ThreeDElement() {
    const meshRef = useRef<THREE.Mesh>(null);
    const [hovered, setHover] = useState(false);

    useCursor(hovered);

    useFrame((state, delta) => {
        if (meshRef.current) {
            // Rotate constantly
            meshRef.current.rotation.x += delta * 0.1;
            meshRef.current.rotation.y += delta * 0.15;

            // Subtle float movement
            meshRef.current.position.y = Math.sin(state.clock.elapsedTime / 1.5) * 0.1;

            // React to mouse slightly
            const { x, y } = state.mouse;
            meshRef.current.rotation.x += y * 0.05;
            meshRef.current.rotation.y += x * 0.05;
        }
    });

    return (
        <mesh
            ref={meshRef}
            onPointerOver={() => setHover(true)}
            onPointerOut={() => setHover(false)}
            scale={hovered ? 1.1 : 1}
            position={[0, 0, 0]}
        >
            <torusKnotGeometry args={[1, 0.3, 128, 16]} />
            <meshStandardMaterial
                color={hovered ? "#475569" : "#334155"} // Slate 600 to 700
                roughness={0.3}
                metalness={0.8}
                wireframe={true}
            />
        </mesh>
    );
}
