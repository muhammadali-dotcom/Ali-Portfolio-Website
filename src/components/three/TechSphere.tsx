"use client";

import { useMemo, useRef } from "react";
import { Line } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

import FloatingIcon from "./FloatingIcon";

const techs = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "JavaScript",
  "SQL",
  "PostgreSQL",
  "MongoDB",
  "Tailwind",
  "Git",
];

const SPHERE_RADIUS = 2.85;

type VectorTuple = [number, number, number];

function createSpherePoints(count: number, radius: number): VectorTuple[] {
  const points: VectorTuple[] = [];

  for (let index = 0; index < count; index++) {
    const k = index + 0.5;
    const phi = Math.acos(1 - (2 * k) / count);
    const theta = Math.PI * (1 + Math.sqrt(5)) * k;

    points.push([
      radius * Math.sin(phi) * Math.cos(theta),
      radius * Math.sin(phi) * Math.sin(theta),
      radius * Math.cos(phi),
    ]);
  }

  return points;
}

function createParticlePoints(count: number, radius: number): VectorTuple[] {
  const points: VectorTuple[] = [];

  for (let index = 0; index < count; index++) {
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    const particleRadius = radius + Math.random() * 0.45;

    points.push([
      particleRadius * Math.sin(phi) * Math.cos(theta),
      particleRadius * Math.sin(phi) * Math.sin(theta),
      particleRadius * Math.cos(phi),
    ]);
  }

  return points;
}

export function TechSphere() {
  const groupRef = useRef<THREE.Group | null>(null);
  const coreRef = useRef<THREE.Mesh | null>(null);
  const glowRef = useRef<THREE.Mesh | null>(null);
  const innerRingRef = useRef<THREE.Mesh | null>(null);
  const outerRingRef = useRef<THREE.Mesh | null>(null);
  const tiltedRingRef = useRef<THREE.Mesh | null>(null);
  const particleGroupRef = useRef<THREE.Group | null>(null);

  const spherePositions = useMemo(() => {
    return createSpherePoints(techs.length, SPHERE_RADIUS);
  }, []);

  const particlePositions = useMemo(() => {
    return createParticlePoints(34, 3.35);
  }, []);

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();

    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.18;
      groupRef.current.rotation.x = Math.sin(time * 0.18) * 0.1;
      groupRef.current.rotation.z = Math.cos(time * 0.14) * 0.045;
    }

    if (coreRef.current) {
      coreRef.current.rotation.y += delta * 0.75;
      coreRef.current.rotation.x += delta * 0.28;
      const coreScale = 1 + Math.sin(time * 2) * 0.035;
      coreRef.current.scale.setScalar(coreScale);
    }

    if (glowRef.current) {
      const glowScale = 1.08 + Math.sin(time * 1.8) * 0.04;
      glowRef.current.scale.setScalar(glowScale);
    }

    if (innerRingRef.current) {
      innerRingRef.current.rotation.z += delta * 0.55;
      innerRingRef.current.rotation.x += delta * 0.16;
    }

    if (outerRingRef.current) {
      outerRingRef.current.rotation.z -= delta * 0.42;
      outerRingRef.current.rotation.y += delta * 0.2;
    }

    if (tiltedRingRef.current) {
      tiltedRingRef.current.rotation.z += delta * 0.32;
      tiltedRingRef.current.rotation.y -= delta * 0.12;
    }

    if (particleGroupRef.current) {
      particleGroupRef.current.rotation.y -= delta * 0.08;
      particleGroupRef.current.rotation.x = Math.sin(time * 0.12) * 0.08;
    }
  });

  return (
    <group ref={groupRef} position={[0.55, -0.05, 0]}>
      {/* Main core glow */}
      <mesh ref={glowRef}>
        <sphereGeometry args={[0.95, 48, 48]} />
        <meshBasicMaterial
          color="#10b981"
          transparent
          opacity={0.075}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Premium core */}
      <mesh ref={coreRef}>
        <icosahedronGeometry args={[0.55, 3]} />
        <meshPhysicalMaterial
          color="#047857"
          emissive="#10b981"
          emissiveIntensity={1.9}
          roughness={0.16}
          metalness={0.78}
          clearcoat={1}
          clearcoatRoughness={0.08}
          transparent
          opacity={0.92}
        />
      </mesh>

      {/* Inner light dot */}
      <mesh position={[0, 0, 0.08]}>
        <sphereGeometry args={[0.18, 32, 32]} />
        <meshBasicMaterial
          color="#d1fae5"
          transparent
          opacity={0.45}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Inner transparent energy sphere */}
      <mesh>
        <sphereGeometry args={[1.45, 48, 48]} />
        <meshBasicMaterial
          color="#10b981"
          transparent
          opacity={0.035}
          depthWrite={false}
        />
      </mesh>

      {/* Main wireframe sphere */}
      <mesh>
        <sphereGeometry args={[2.52, 28, 28]} />
        <meshBasicMaterial
          color="#34d399"
          wireframe
          transparent
          opacity={0.065}
          depthWrite={false}
        />
      </mesh>

      {/* Outer soft wireframe shell */}
      <mesh>
        <sphereGeometry args={[3.12, 36, 36]} />
        <meshBasicMaterial
          color="#10b981"
          wireframe
          transparent
          opacity={0.032}
          depthWrite={false}
        />
      </mesh>

      {/* Diagonal orbital ring */}
      <mesh ref={innerRingRef} rotation={[Math.PI / 2.75, 0.42, 0]}>
        <torusGeometry args={[2.95, 0.012, 12, 160]} />
        <meshBasicMaterial
          color="#10b981"
          transparent
          opacity={0.34}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Outer orbital ring */}
      <mesh ref={outerRingRef} rotation={[Math.PI / 2.08, -0.72, 0.22]}>
        <torusGeometry args={[3.34, 0.01, 12, 160]} />
        <meshBasicMaterial
          color="#34d399"
          transparent
          opacity={0.2}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Thin white premium orbit */}
      <mesh ref={tiltedRingRef} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.66, 0.006, 12, 160]} />
        <meshBasicMaterial
          color="#ecfdf5"
          transparent
          opacity={0.13}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Subtle background particles */}
      <group ref={particleGroupRef}>
        {particlePositions.map((position, index) => (
          <mesh key={`particle-${index}`} position={position}>
            <sphereGeometry args={[index % 3 === 0 ? 0.018 : 0.012, 12, 12]} />
            <meshBasicMaterial
              color={index % 2 === 0 ? "#10b981" : "#a7f3d0"}
              transparent
              opacity={index % 2 === 0 ? 0.42 : 0.28}
              depthWrite={false}
              blending={THREE.AdditiveBlending}
            />
          </mesh>
        ))}
      </group>

      {/* Connecting lines from core to tech nodes */}
      {spherePositions.map((position, index) => (
        <Line
          key={`line-${techs[index]}`}
          points={[[0, 0, 0], position]}
          color={index % 2 === 0 ? "#10b981" : "#34d399"}
          transparent
          opacity={0.095}
          lineWidth={0.85}
        />
      ))}

      {/* Subtle cross-links for more network depth */}
      {spherePositions.map((position, index) => {
        const nextIndex = (index + 3) % spherePositions.length;

        return (
          <Line
            key={`cross-line-${techs[index]}`}
            points={[position, spherePositions[nextIndex]]}
            color="#10b981"
            transparent
            opacity={0.035}
            lineWidth={0.55}
          />
        );
      })}

      {/* Floating tech nodes */}
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
}

export default TechSphere;