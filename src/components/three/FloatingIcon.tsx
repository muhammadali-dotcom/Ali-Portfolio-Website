"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import * as THREE from "three";

interface FloatingIconProps {
  position: [number, number, number];
  text: string;
  index?: number;
}

export default function FloatingIcon({
  position,
  text,
  index = 0,
}: FloatingIconProps) {
  const groupRef = useRef<THREE.Group | null>(null);
  const glowRef = useRef<THREE.Mesh | null>(null);
  const coreRef = useRef<THREE.Mesh | null>(null);
  const outerRingRef = useRef<THREE.Mesh | null>(null);
  const innerRingRef = useRef<THREE.Mesh | null>(null);

  const [hovered, setHovered] = useState(false);

  const randomOffset = useMemo(() => Math.random() * Math.PI * 2, []);

  const labelWidth = useMemo(() => {
    return Math.max(0.78, text.length * 0.105 + 0.38);
  }, [text]);

  useEffect(() => {
    return () => {
      document.body.style.cursor = "auto";
    };
  }, []);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    const time = state.clock.getElapsedTime();

    const floatY = Math.sin(time * 1.25 + randomOffset) * 0.16;
    const floatX = Math.cos(time * 0.85 + randomOffset) * 0.035;

    groupRef.current.position.set(
      position[0] + floatX,
      position[1] + floatY,
      position[2]
    );

    groupRef.current.quaternion.copy(state.camera.quaternion);

    const targetScale = hovered ? 1.16 : 1;
    groupRef.current.scale.lerp(
      new THREE.Vector3(targetScale, targetScale, targetScale),
      0.12
    );

    if (glowRef.current) {
      const glowScale = hovered
        ? 1.45 + Math.sin(time * 2.4 + index) * 0.08
        : 1.1 + Math.sin(time * 2 + index) * 0.06;

      glowRef.current.scale.setScalar(glowScale);
    }

    if (coreRef.current) {
      coreRef.current.rotation.y += delta * 0.8;
      coreRef.current.rotation.x += delta * 0.35;
    }

    if (outerRingRef.current) {
      outerRingRef.current.rotation.z += delta * 1.15;
    }

    if (innerRingRef.current) {
      innerRingRef.current.rotation.z -= delta * 0.85;
    }
  });

  return (
    <group
      ref={groupRef}
      position={position}
      onPointerOver={(event) => {
        event.stopPropagation();
        setHovered(true);
        document.body.style.cursor = "pointer";
      }}
      onPointerOut={(event) => {
        event.stopPropagation();
        setHovered(false);
        document.body.style.cursor = "auto";
      }}
    >
      {/* Soft outer aura */}
      <mesh ref={glowRef}>
        <sphereGeometry args={[0.34, 32, 32]} />
        <meshBasicMaterial
          color="#10b981"
          transparent
          opacity={hovered ? 0.18 : 0.075}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Secondary glow */}
      <mesh>
        <sphereGeometry args={[0.24, 32, 32]} />
        <meshBasicMaterial
          color="#34d399"
          transparent
          opacity={hovered ? 0.16 : 0.065}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Main premium core */}
      <mesh ref={coreRef}>
        <icosahedronGeometry args={[hovered ? 0.2 : 0.17, 2]} />
        <meshPhysicalMaterial
          color={hovered ? "#34d399" : "#047857"}
          emissive={hovered ? "#34d399" : "#10b981"}
          emissiveIntensity={hovered ? 2.6 : 1.25}
          roughness={0.18}
          metalness={0.72}
          clearcoat={1}
          clearcoatRoughness={0.08}
          transparent
          opacity={0.98}
        />
      </mesh>

      {/* Inner bright dot */}
      <mesh position={[0, 0, 0.012]}>
        <sphereGeometry args={[0.065, 24, 24]} />
        <meshBasicMaterial
          color="#d1fae5"
          transparent
          opacity={hovered ? 0.9 : 0.55}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Outer rotating ring */}
      <mesh ref={outerRingRef} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[hovered ? 0.33 : 0.28, 0.01, 12, 72]} />
        <meshBasicMaterial
          color={hovered ? "#a7f3d0" : "#10b981"}
          transparent
          opacity={hovered ? 0.9 : 0.42}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Inner rotating ring */}
      <mesh ref={innerRingRef} rotation={[Math.PI / 2, 0, Math.PI / 4]}>
        <torusGeometry args={[hovered ? 0.245 : 0.215, 0.006, 8, 64]} />
        <meshBasicMaterial
          color="#34d399"
          transparent
          opacity={hovered ? 0.72 : 0.28}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Label shadow/glass plate */}
      <mesh position={[0, -0.46, -0.012]}>
        <planeGeometry args={[labelWidth, 0.32]} />
        <meshBasicMaterial
          color="#020403"
          transparent
          opacity={hovered ? 0.82 : 0.58}
          depthWrite={false}
        />
      </mesh>

      {/* Label subtle border */}
      <mesh position={[0, -0.46, -0.008]}>
        <planeGeometry args={[labelWidth + 0.035, 0.355]} />
        <meshBasicMaterial
          color="#10b981"
          transparent
          opacity={hovered ? 0.16 : 0.075}
          depthWrite={false}
        />
      </mesh>

      {/* Tech label */}
      <Text
        position={[0, -0.46, 0.01]}
        fontSize={hovered ? 0.2 : 0.175}
        color={hovered ? "#ecfdf5" : "#a7f3d0"}
        anchorX="center"
        anchorY="middle"
        font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfMZhrib2Bg-4.ttf"
        outlineWidth={0.0035}
        outlineColor="#020403"
      >
        {text}
      </Text>
    </group>
  );
}

export { FloatingIcon };