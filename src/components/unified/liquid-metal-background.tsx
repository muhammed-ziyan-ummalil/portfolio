"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere, Float } from "@react-three/drei";
import { useRef } from "react";

function LiquidSphere() {
    const materialRef = useRef<any>();

    useFrame(({ clock }) => {
        if (materialRef.current) {
            materialRef.current.distort = 0.4 + Math.sin(clock.getElapsedTime()) * 0.1;
        }
    });

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
            <Sphere args={[1, 100, 100]} scale={1.8}>
                <MeshDistortMaterial
                    ref={materialRef}
                    color="#1a1a1a"
                    attach="material"
                    distort={0.4}
                    speed={2}
                    roughness={0.2}
                    metalness={1}
                />
            </Sphere>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} color="#00f0ff" />
            <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#bd00ff" />
        </Float>
    );
}

export function LiquidMetalBackground() {
    return (
        <div className="absolute inset-0 -z-10">
            <Canvas>
                <LiquidSphere />
            </Canvas>
        </div>
    );
}
