"use client";

import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import * as THREE from "three";

interface FloatingIconProps {
  position: [number, number, number];
  text: string;
  index?: number;
}

export const FloatingIcon: React.FC<FloatingIconProps> = ({
  position,
  text,
  index = 0,
}) => {
  const groupRef = useRef<THREE.Group | null>(null);
  const pulseRef = useRef<THREE.Mesh | null>(null);
  const ringRef = useRef<THREE.Mesh | null>(null);

  const [hovered, setHovered] = useState(false);
  const randomOffset = useRef(Math.random() * Math.PI * 2);

  useFrame((state) => {
    if (!groupRef.current) return;

    const time = state.clock.getElapsedTime();

    groupRef.current.position.y =
      position[1] + Math.sin(time * 1.4 + randomOffset.current) * 0.14;

    groupRef.current.quaternion.copy(state.camera.quaternion);

    if (pulseRef.current) {
      const scale = 1 + Math.sin(time * 2 + index) * 0.12;
      pulseRef.current.scale.setScalar(scale);
    }

    if (ringRef.current) {
      ringRef.current.rotation.z += 0.02;
    }
  });

  return (
    <group
      ref={groupRef}
      position={position}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(true);
        document.body.style.cursor = "pointer";
      }}
      onPointerOut={() => {
        setHovered(false);
        document.body.style.cursor = "auto";
      }}
    >
      {/* Outer soft glow */}
      <mesh ref={pulseRef}>
        <sphereGeometry args={[0.28, 24, 24]} />
        <meshBasicMaterial
          color="#10b981"
          transparent
          opacity={hovered ? 0.22 : 0.08}
        />
      </mesh>

      {/* Main node */}
      <mesh>
        <sphereGeometry args={[hovered ? 0.19 : 0.16, 32, 32]} />
        <meshPhysicalMaterial
          color={hovered ? "#34d399" : "#065f46"}
          emissive={hovered ? "#34d399" : "#10b981"}
          emissiveIntensity={hovered ? 2.8 : 1}
          roughness={0.12}
          metalness={0.85}
          clearcoat={1}
          transparent
          opacity={0.95}
        />
      </mesh>

      {/* Glow ring */}
      <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[hovered ? 0.29 : 0.24, 0.012, 8, 48]} />
        <meshBasicMaterial
          color={hovered ? "#a7f3d0" : "#10b981"}
          transparent
          opacity={hovered ? 0.9 : 0.45}
        />
      </mesh>

      {/* Label background plate */}
      <mesh position={[0, -0.42, -0.01]}>
        <planeGeometry args={[text.length * 0.105 + 0.34, 0.28]} />
        <meshBasicMaterial
          color="#020403"
          transparent
          opacity={hovered ? 0.82 : 0.55}
        />
      </mesh>

      {/* Tech label */}
      <Text
        position={[0, -0.42, 0]}
        fontSize={hovered ? 0.21 : 0.18}
        color={hovered ? "#d1fae5" : "#9ca3af"}
        anchorX="center"
        anchorY="middle"
        font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfMZhrib2Bg-4.ttf"
        outlineWidth={0.004}
        outlineColor="#000000"
      >
        {text}
      </Text>
    </group>
  );
};

export default FloatingIcon;