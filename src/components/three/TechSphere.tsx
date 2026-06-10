"use client";

import React, { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import FloatingIcon from "./FloatingIcon";
import { Line } from "@react-three/drei";

const techs = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind",
  "Three.js",
  "Node.js",
  "Git",
  "Framer",
  "GraphQL",
  "WebSocket",
  "Zustand",
  "Redux",
  "Firebase",
  "Docker",
  "Supabase",
  "Vercel",
];

export const TechSphere: React.FC = () => {
  const groupRef = useRef<THREE.Group | null>(null);
  const innerRingRef = useRef<THREE.Mesh | null>(null);
  const outerRingRef = useRef<THREE.Mesh | null>(null);

  const spherePositions = useMemo(() => {
    const radius = 2.85;
    const count = techs.length;
    const points: [number, number, number][] = [];

    for (let i = 0; i < count; i++) {
      const k = i + 0.5;
      const phi = Math.acos(1 - (2 * k) / count);
      const theta = Math.PI * (1 + Math.sqrt(5)) * k;

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      points.push([x, y, z]);
    }

    return points;
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    if (groupRef.current) {
      groupRef.current.rotation.y += 0.0028;
      groupRef.current.rotation.x = Math.sin(time * 0.18) * 0.12;
      groupRef.current.rotation.z = Math.cos(time * 0.12) * 0.04;
    }

    if (innerRingRef.current) {
      innerRingRef.current.rotation.z += 0.004;
      innerRingRef.current.rotation.x += 0.0015;
    }

    if (outerRingRef.current) {
      outerRingRef.current.rotation.z -= 0.0025;
      outerRingRef.current.rotation.y += 0.001;
    }
  });

  return (
    <group ref={groupRef} position={[0.55, -0.05, 0]}>
      {/* Soft glowing core */}
      <mesh>
        <sphereGeometry args={[0.55, 32, 32]} />
        <meshPhysicalMaterial
          color="#064e3b"
          emissive="#10b981"
          emissiveIntensity={1.7}
          roughness={0.18}
          metalness={0.7}
          clearcoat={1}
          transparent
          opacity={0.78}
        />
      </mesh>

      {/* Inner transparent sphere */}
      <mesh>
        <sphereGeometry args={[1.55, 32, 32]} />
        <meshBasicMaterial color="#10b981" transparent opacity={0.035} />
      </mesh>

      {/* Wireframe structure */}
      <mesh>
        <sphereGeometry args={[2.5, 22, 22]} />
        <meshBasicMaterial
          color="#34d399"
          wireframe
          transparent
          opacity={0.055}
        />
      </mesh>

      {/* Outer transparent shell */}
      <mesh>
        <sphereGeometry args={[3.08, 32, 32]} />
        <meshBasicMaterial
          color="#10b981"
          wireframe
          transparent
          opacity={0.025}
        />
      </mesh>

      {/* Diagonal orbital ring */}
      <mesh ref={innerRingRef} rotation={[Math.PI / 2.8, 0.4, 0]}>
        <torusGeometry args={[2.95, 0.012, 12, 128]} />
        <meshBasicMaterial
          color="#10b981"
          transparent
          opacity={0.32}
        />
      </mesh>

      {/* Second orbital ring */}
      <mesh ref={outerRingRef} rotation={[Math.PI / 2.1, -0.7, 0.2]}>
        <torusGeometry args={[3.35, 0.01, 12, 128]} />
        <meshBasicMaterial
          color="#34d399"
          transparent
          opacity={0.18}
        />
      </mesh>

      {/* Horizontal ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.65, 0.008, 12, 128]} />
        <meshBasicMaterial
          color="#ffffff"
          transparent
          opacity={0.12}
        />
      </mesh>

      {/* Connecting lines from center to nodes */}
      {spherePositions.map((position, index) => (
        <Line
          key={`line-${techs[index]}`}
          points={[[0, 0, 0], position]}
          color="#10b981"
          transparent
          opacity={0.08}
          lineWidth={1}
        />
      ))}

      {/* Floating nodes */}
      {techs.map((tech, index) => (
        <FloatingIcon
          key={tech}
          position={spherePositions[index]}
          text={tech}
          index={index}
        />
      ))}
    </group>
  );
};

export default TechSphere;