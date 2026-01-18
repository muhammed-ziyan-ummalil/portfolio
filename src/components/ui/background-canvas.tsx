"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Float, Stars, Text, Text3D, Center } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import { useState, useRef, useMemo } from "react";
import * as THREE from "three";

// Minimalist Glass Crystal (Hero)
// Pushed back in Z-space to not block text
function GlassCrystal({ position, scale = 1 }: { position: [number, number, number], scale?: number }) {
    const mesh = useRef<THREE.Mesh>(null);

    useFrame((state, delta) => {
        if (mesh.current) {
            mesh.current.rotation.x += delta * 0.1;
            mesh.current.rotation.y += delta * 0.15;
        }
    });

    return (
        <Float speed={1} rotationIntensity={0.5} floatIntensity={0.5}>
            <mesh ref={mesh} position={position} scale={scale}>
                <octahedronGeometry args={[1, 0]} />
                <meshPhysicalMaterial
                    color="#d8b4fe" // Light purple
                    roughness={0}
                    metalness={0.1}
                    transmission={0.9} // Glass-like
                    thickness={0.5} // Refraction
                    clearcoat={1}
                />
            </mesh>
        </Float>
    );
}

// Minimalist Data Node (Engineer)
function DataNode({ position }: { position: [number, number, number] }) {
    return (
        <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
            <mesh position={position}>
                <boxGeometry args={[0.4, 0.4, 0.4]} />
                <meshBasicMaterial
                    color="#22d3ee"
                    wireframe
                    transparent
                    opacity={0.3}
                />
            </mesh>
        </Float>
    );
}

// Mu Symbol (Community)
function MuSymbol({ position, opacity = 0.6, scale = 1 }: { position: [number, number, number], opacity?: number, scale?: number }) {
    return (
        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
            <Text
                font="/fonts/Inter-Bold.ttf" // Fallback to default if load fails usually works in drei newer versions or uses default
                fontSize={2 * scale}
                color="#ec4899"
                position={position}
                fillOpacity={opacity}
                anchorX="center"
                anchorY="middle"
            >
                µ
            </Text>
        </Float>
    );
}

function StarField(props: any) {
    const ref = useRef<THREE.Points>(null);
    const [sphere] = useState(() => random.inSphere(new Float32Array(3000), { radius: 25 }));

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 30;
            ref.current.rotation.y -= delta / 40;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#fff"
                    size={0.015} // Smaller stars
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.4}
                />
            </Points>
        </group>
    );
}

function DefaultScene() {
    return (
        <>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} color="#a855f7" />
            <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={0.5} />

            {/* Objects pushed WAY back to z=-5 to -15 */}
            <GlassCrystal position={[-6, 2, -5]} scale={1.2} />
            <GlassCrystal position={[6, -3, -8]} scale={1.5} />
            <GlassCrystal position={[0, 5, -10]} scale={0.8} />
            <GlassCrystal position={[-5, -4, -6]} scale={1} />

            {/* Center void - kept empty for text */}

            <Float speed={0.8} rotationIntensity={0.2} floatIntensity={0.2}>
                <mesh position={[0, 0, -15]} scale={4}>
                    {/* Wireframe Nebula Core - Very subtle */}
                    <torusKnotGeometry args={[1, 0.3, 100, 16]} />
                    <meshBasicMaterial
                        color="#4c1d95"
                        wireframe
                        transparent
                        opacity={0.05}
                    />
                </mesh>
            </Float>
        </>
    );
}

function DataScene() {
    return (
        <>
            <ambientLight intensity={0.5} />
            <Stars radius={100} depth={50} count={1000} factor={4} saturation={0} fade speed={0.5} />

            <DataNode position={[-4, 2, -5]} />
            <DataNode position={[4, -1, -6]} />
            <DataNode position={[-2, 4, -8]} />
            <DataNode position={[3, -3, -5]} />

            {/* Digital floor grid - minimal */}
            <gridHelper
                args={[40, 40, 0x083344, 0x083344]}
                position={[0, -5, -10]}
                rotation={[0.1, 0, 0]}
            />
        </>
    );
}

function CommunityScene() {
    return (
        <>
            <ambientLight intensity={0.8} />
            <pointLight position={[5, 5, 5]} intensity={1} color="#ec4899" />

            {/* NO STARS - Clean look for MuLearn */}

            {/* Floating Mu Symbols */}
            <MuSymbol position={[-4, 2, -5]} scale={1} opacity={0.3} />
            <MuSymbol position={[5, -3, -6]} scale={1.2} opacity={0.2} />
            <MuSymbol position={[-3, -4, -4]} scale={0.8} opacity={0.3} />

            {/* Central Large Mu - Background water mark style */}
            <Float speed={0.5} rotationIntensity={0.1} floatIntensity={0.1}>
                <Text
                    fontSize={8}
                    color="#be185d"
                    position={[0, 0, -12]}
                    fillOpacity={0.05}
                    anchorX="center"
                    anchorY="middle"
                >
                    µ
                </Text>
            </Float>

            {/* Connection Ring */}
            <Float speed={0.5} rotationIntensity={0.2} floatIntensity={0.1}>
                <mesh position={[0, 0, -10]} rotation={[Math.PI / 3, 0, 0]}>
                    <torusGeometry args={[5, 0.02, 16, 100]} />
                    <meshBasicMaterial
                        color="#ec4899"
                        transparent
                        opacity={0.2}
                    />
                </mesh>
            </Float>
        </>
    );
}

interface BackgroundCanvasProps {
    variant?: 'default' | 'data' | 'community';
}

export function BackgroundCanvas({ variant = 'default' }: BackgroundCanvasProps) {
    return (
        <div className="absolute inset-0 -z-10 w-full h-full pointer-events-none">
            <Canvas
                camera={{ position: [0, 0, 5], fov: 50 }}
                gl={{ antialias: true, alpha: true }}
                style={{ background: 'transparent' }}
            >
                {variant === 'default' && <DefaultScene />}
                {variant === 'data' && <DataScene />}
                {variant === 'community' && <CommunityScene />}

                {/* Subtle fog for depth */}
                <fog attach="fog" args={['#000', 5, 30]} />
            </Canvas>
        </div>
    );
}
