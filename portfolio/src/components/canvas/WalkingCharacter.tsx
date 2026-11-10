'use client';

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface WalkingCharacterProps {
  scrollProgress: number; // 0.0 to 1.0
}

export function WalkingCharacter({ scrollProgress }: WalkingCharacterProps) {
  const rootGroupRef = useRef<THREE.Group>(null);
  const leftLegRef = useRef<THREE.Group>(null);
  const rightLegRef = useRef<THREE.Group>(null);
  const leftArmRef = useRef<THREE.Group>(null);
  const rightArmRef = useRef<THREE.Group>(null);
  const headRef = useRef<THREE.Group>(null);

  const prevProgressRef = useRef<number>(scrollProgress);
  const velocityRef = useRef<number>(0);

  useFrame((state, delta) => {
    if (!rootGroupRef.current) return;

    // Detect scrolling delta/velocity
    const deltaProgress = Math.abs(scrollProgress - prevProgressRef.current);
    prevProgressRef.current = scrollProgress;
    
    // Smooth velocity with damping
    const targetVelocity = deltaProgress > 0.0005 ? Math.min(deltaProgress * 80, 2.5) : 0;
    velocityRef.current = THREE.MathUtils.lerp(velocityRef.current, targetVelocity, 0.15);

    // Character path: Starts at Z = -15 and walks forward to Z = 2, with smooth sideways weaving
    const targetZ = -14 + scrollProgress * 16.5;
    const targetX = Math.sin(scrollProgress * Math.PI * 3.5) * 1.8;
    
    rootGroupRef.current.position.z = THREE.MathUtils.lerp(rootGroupRef.current.position.z, targetZ, 0.08);
    rootGroupRef.current.position.x = THREE.MathUtils.lerp(rootGroupRef.current.position.x, targetX, 0.08);

    // Facing direction: character turns slightly in the direction of the X curve
    const turnAngle = Math.cos(scrollProgress * Math.PI * 3.5) * 0.45;
    rootGroupRef.current.rotation.y = THREE.MathUtils.lerp(rootGroupRef.current.rotation.y, turnAngle, 0.1);

    // Natural bobbing up and down while walking
    const walkCycleTime = state.clock.getElapsedTime() * 10 * Math.max(velocityRef.current, 0.1);
    const bob = Math.abs(Math.sin(walkCycleTime)) * 0.08 * (velocityRef.current > 0.2 ? 1 : 0.2);
    rootGroupRef.current.position.y = -1.2 + bob;

    // Gait animation: Limb rotation based on scroll movement
    const swingPhase = Math.sin(scrollProgress * 75);
    const gaitStrength = Math.min(Math.max(velocityRef.current * 1.2, 0.1), 1.0);

    if (leftLegRef.current && rightLegRef.current) {
      leftLegRef.current.rotation.x = swingPhase * 0.75 * gaitStrength;
      rightLegRef.current.rotation.x = -swingPhase * 0.75 * gaitStrength;
    }

    if (leftArmRef.current && rightArmRef.current) {
      leftArmRef.current.rotation.x = -swingPhase * 0.65 * gaitStrength;
      rightArmRef.current.rotation.x = swingPhase * 0.65 * gaitStrength;
      // Slight outward swing
      leftArmRef.current.rotation.z = 0.15 + (swingPhase * 0.1 * gaitStrength);
      rightArmRef.current.rotation.z = -0.15 - (swingPhase * 0.1 * gaitStrength);
    }

    // Gentle head look / breathing
    if (headRef.current) {
      headRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 1.5) * 0.08;
      headRef.current.rotation.x = -0.05 + Math.cos(state.clock.getElapsedTime() * 1.2) * 0.03;
    }
  });

  return (
    <group ref={rootGroupRef} position={[0, -1.2, -14]}>
      {/* Root Avatar Body */}

      {/* 1. Torso & Shirt (Smart Navy / Royal Blue Formal/Polo) */}
      <group position={[0, 1.45, 0]}>
        <mesh castShadow receiveShadow>
          <boxGeometry args={[0.72, 0.88, 0.38]} />
          <meshStandardMaterial color="#0f2b48" roughness={0.35} metalness={0.1} />
        </mesh>
        {/* Collar / V-neck detail */}
        <mesh position={[0, 0.35, 0.2]}>
          <boxGeometry args={[0.26, 0.14, 0.05]} />
          <meshStandardMaterial color="#38bdf8" roughness={0.2} />
        </mesh>
        {/* Albaik Coach Badge / Golden Lapel Pin */}
        <mesh position={[0.22, 0.28, 0.2]}>
          <cylinderGeometry args={[0.045, 0.045, 0.02, 16]} rotation={[Math.PI / 2, 0, 0]} />
          <meshStandardMaterial color="#f59e0b" roughness={0.2} metalness={0.8} emissive="#f59e0b" emissiveIntensity={0.3} />
        </mesh>
      </group>

      {/* 2. Head & Hair */}
      <group ref={headRef} position={[0, 2.15, 0]}>
        {/* Face */}
        <mesh castShadow>
          <sphereGeometry args={[0.26, 32, 32]} />
          <meshStandardMaterial color="#e0a96d" roughness={0.6} />
        </mesh>
        {/* Modern styled hair */}
        <mesh position={[0, 0.12, -0.04]} castShadow>
          <sphereGeometry args={[0.27, 24, 24]} />
          <meshStandardMaterial color="#1a1412" roughness={0.9} />
        </mesh>
        {/* Eyes (Subtle tech headset/vision or stylized eyes) */}
        <mesh position={[-0.09, 0.04, 0.23]}>
          <sphereGeometry args={[0.032, 16, 16]} />
          <meshStandardMaterial color="#0f172a" />
        </mesh>
        <mesh position={[0.09, 0.04, 0.23]}>
          <sphereGeometry args={[0.032, 16, 16]} />
          <meshStandardMaterial color="#0f172a" />
        </mesh>
        {/* Stylized Glasses / Tech Frames */}
        <mesh position={[0, 0.04, 0.24]}>
          <boxGeometry args={[0.3, 0.06, 0.03]} />
          <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={0.4} metalness={0.9} roughness={0.1} />
        </mesh>
      </group>

      {/* 3. Left Arm Group */}
      <group ref={leftArmRef} position={[-0.48, 1.78, 0]}>
        <mesh position={[0, -0.38, 0]} castShadow>
          <boxGeometry args={[0.18, 0.76, 0.2]} />
          <meshStandardMaterial color="#0f2b48" roughness={0.4} />
        </mesh>
        {/* Left Hand */}
        <mesh position={[0, -0.82, 0]} castShadow>
          <sphereGeometry args={[0.09, 16, 16]} />
          <meshStandardMaterial color="#e0a96d" />
        </mesh>
      </group>

      {/* 4. Right Arm Group */}
      <group ref={rightArmRef} position={[0.48, 1.78, 0]}>
        <mesh position={[0, -0.38, 0]} castShadow>
          <boxGeometry args={[0.18, 0.76, 0.2]} />
          <meshStandardMaterial color="#0f2b48" roughness={0.4} />
        </mesh>
        {/* Right Hand */}
        <mesh position={[0, -0.82, 0]} castShadow>
          <sphereGeometry args={[0.09, 16, 16]} />
          <meshStandardMaterial color="#e0a96d" />
        </mesh>
      </group>

      {/* 5. Left Leg Group */}
      <group ref={leftLegRef} position={[-0.2, 1.0, 0]}>
        <mesh position={[0, -0.45, 0]} castShadow receiveShadow>
          <boxGeometry args={[0.22, 0.9, 0.24]} />
          <meshStandardMaterial color="#0b1329" roughness={0.7} />
        </mesh>
        {/* Shoe */}
        <mesh position={[0, -0.92, 0.06]} castShadow>
          <boxGeometry args={[0.24, 0.16, 0.36]} />
          <meshStandardMaterial color="#f8fafc" roughness={0.2} />
        </mesh>
      </group>

      {/* 6. Right Leg Group */}
      <group ref={rightLegRef} position={[0.2, 1.0, 0]}>
        <mesh position={[0, -0.45, 0]} castShadow receiveShadow>
          <boxGeometry args={[0.22, 0.9, 0.24]} />
          <meshStandardMaterial color="#0b1329" roughness={0.7} />
        </mesh>
        {/* Shoe */}
        <mesh position={[0, -0.92, 0.06]} castShadow>
          <boxGeometry args={[0.24, 0.16, 0.36]} />
          <meshStandardMaterial color="#f8fafc" roughness={0.2} />
        </mesh>
      </group>

      {/* Walking Light Shadow Glow under feet */}
      <mesh position={[0, 0.02, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.1, 0.85, 32]} />
        <meshBasicMaterial color="#38bdf8" transparent opacity={0.35} />
      </mesh>
    </group>
  );
}
