'use client';

import React, { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface WalkingCharacterProps {
  scrollProgress: number; // 0.0 to 1.0
}

export function WalkingCharacter({ scrollProgress }: WalkingCharacterProps) {
  const rootGroupRef = useRef<THREE.Group>(null);
  const avatarMeshRef = useRef<THREE.Mesh>(null);
  const pedestalRef = useRef<THREE.Group>(null);

  const [texture, setTexture] = useState<THREE.Texture | null>(null);
  const prevProgressRef = useRef<number>(scrollProgress);
  const velocityRef = useRef<number>(0);

  useEffect(() => {
    const loader = new THREE.TextureLoader();
    loader.load('/images/avatar_3d_blend_v3.png', (loadedTex) => {
      loadedTex.colorSpace = THREE.SRGBColorSpace;
      setTexture(loadedTex);
    });
  }, []);

  useFrame((state) => {
    if (!rootGroupRef.current) return;

    // Detect scrolling delta/velocity
    const deltaProgress = Math.abs(scrollProgress - prevProgressRef.current);
    prevProgressRef.current = scrollProgress;

    // Smooth velocity with damping
    const targetVelocity = deltaProgress > 0.0004 ? Math.min(deltaProgress * 90, 2.5) : 0;
    velocityRef.current = THREE.MathUtils.lerp(velocityRef.current, targetVelocity, 0.12);

    // Character path: Starts at Z = -14 and walks forward to Z = 2.5
    const targetZ = -14 + scrollProgress * 16.5;
    const targetX = Math.sin(scrollProgress * Math.PI * 3.5) * 1.8;

    rootGroupRef.current.position.z = THREE.MathUtils.lerp(rootGroupRef.current.position.z, targetZ, 0.08);
    rootGroupRef.current.position.x = THREE.MathUtils.lerp(rootGroupRef.current.position.x, targetX, 0.08);

    // Facing direction: character turns slightly in the direction of the X curve
    const turnAngle = Math.cos(scrollProgress * Math.PI * 3.5) * 0.35;
    rootGroupRef.current.rotation.y = THREE.MathUtils.lerp(rootGroupRef.current.rotation.y, turnAngle, 0.1);

    // Dynamic walking gait: Stride bobbing and tilt
    const walkCycleTime = state.clock.getElapsedTime() * 12 * Math.max(velocityRef.current, 0.15);
    const bob = Math.abs(Math.sin(walkCycleTime)) * 0.1 * (velocityRef.current > 0.15 ? 1 : 0.25);
    rootGroupRef.current.position.y = -1.2 + bob;

    // Stride tilt and roll
    const sway = Math.sin(walkCycleTime) * 0.04 * (velocityRef.current > 0.15 ? 1 : 0.1);
    rootGroupRef.current.rotation.z = sway;

    // Subtle leaning forward when moving fast
    const forwardLean = -Math.min(velocityRef.current * 0.08, 0.18);
    rootGroupRef.current.rotation.x = forwardLean;

    // Pedestal rotation for cybernetic effect
    if (pedestalRef.current) {
      pedestalRef.current.rotation.y = state.clock.getElapsedTime() * 0.5;
    }
  });

  return (
    <group ref={rootGroupRef} position={[0, -1.2, -14]}>
      {/* 1. Full HD 3D Character Billboard Mesh */}
      {texture && (
        <mesh ref={avatarMeshRef} position={[0, 1.45, 0]} castShadow receiveShadow>
          <planeGeometry args={[2.5, 3.3]} />
          <meshStandardMaterial
            map={texture}
            transparent
            roughness={0.25}
            metalness={0.1}
            side={THREE.DoubleSide}
            alphaTest={0.05}
          />
        </mesh>
      )}

      {/* 2. Cybernetic Pedestal / Holographic Platform */}
      <group ref={pedestalRef} position={[0, -0.05, 0]}>
        {/* Core Ring */}
        <mesh rotation={[-Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[1.2, 1.3, 0.1, 32]} />
          <meshStandardMaterial
            color="#0369a1"
            emissive="#0284c7"
            emissiveIntensity={0.5}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>

        {/* Outer Glowing Neon Ring */}
        <mesh position={[0, 0.06, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[1.2, 1.35, 32]} />
          <meshBasicMaterial color="#38bdf8" />
        </mesh>

        {/* Inner Gold Accents */}
        <mesh position={[0, 0.07, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[0.6, 0.7, 16]} />
          <meshBasicMaterial color="#f59e0b" />
        </mesh>
      </group>

      {/* 3. Ambient Floor Shadow Glow */}
      <mesh position={[0, -0.15, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.2, 1.8, 32]} />
        <meshBasicMaterial color="#0284c7" transparent opacity={0.3} />
      </mesh>
    </group>
  );
}
