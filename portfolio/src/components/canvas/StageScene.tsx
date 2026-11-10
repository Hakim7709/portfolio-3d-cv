'use client';

import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function StageScene() {
  const runwayGridRef = useRef<THREE.GridHelper>(null);
  const particlesRef = useRef<THREE.Points>(null);

  // Generate ambient floating cyber particles
  const particleCount = 200;
  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const col = new Float32Array(particleCount * 3);
    const palette = [
      new THREE.Color('#38bdf8'), // Sky cyan
      new THREE.Color('#f59e0b'), // Albaik Gold
      new THREE.Color('#10b981'), // Emerald
      new THREE.Color('#818cf8')  // Indigo
    ];

    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 24;
      pos[i * 3 + 1] = Math.random() * 8 - 1;
      pos[i * 3 + 2] = Math.random() * 26 - 16;

      const c = palette[Math.floor(Math.random() * palette.length)];
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }
    return [pos, col];
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.getElapsedTime() * 0.03;
    }
  });

  return (
    <group>
      {/* 1. Endless Cybernetic Walkway Grid */}
      <gridHelper
        ref={runwayGridRef}
        args={[36, 36, '#38bdf8', '#1e293b']}
        position={[0, -1.2, -4]}
      />

      {/* Floating Floor Glow Center Path */}
      <mesh position={[0, -1.21, -4]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[2.8, 32]} />
        <meshBasicMaterial color="#0369a1" transparent opacity={0.12} />
      </mesh>

      {/* Glowing Path Guide Rails */}
      <mesh position={[-1.4, -1.18, -4]}>
        <boxGeometry args={[0.08, 0.04, 32]} />
        <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={0.8} />
      </mesh>
      <mesh position={[1.4, -1.18, -4]}>
        <boxGeometry args={[0.08, 0.04, 32]} />
        <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={0.8} />
      </mesh>

      {/* 2. Floating Waypoint Gate 1: Albaik & Saudi Hub (Z = -12) */}
      <group position={[0, 0.5, -12]}>
        {/* Golden Arch */}
        <mesh position={[-2.4, 0.8, 0]}>
          <cylinderGeometry args={[0.08, 0.08, 3.8]} />
          <meshStandardMaterial color="#f59e0b" emissive="#f59e0b" emissiveIntensity={0.6} />
        </mesh>
        <mesh position={[2.4, 0.8, 0]}>
          <cylinderGeometry args={[0.08, 0.08, 3.8]} />
          <meshStandardMaterial color="#f59e0b" emissive="#f59e0b" emissiveIntensity={0.6} />
        </mesh>
        <mesh position={[0, 2.7, 0]}>
          <boxGeometry args={[4.9, 0.12, 0.12]} />
          <meshStandardMaterial color="#f59e0b" emissive="#f59e0b" emissiveIntensity={0.9} />
        </mesh>
      </group>

      {/* 3. Floating Waypoint Gate 2: Operations & HACCP Arena (Z = -7) */}
      <group position={[0, 0.5, -7]}>
        <mesh position={[-2.4, 0.8, 0]}>
          <cylinderGeometry args={[0.08, 0.08, 3.8]} />
          <meshStandardMaterial color="#10b981" emissive="#10b981" emissiveIntensity={0.6} />
        </mesh>
        <mesh position={[2.4, 0.8, 0]}>
          <cylinderGeometry args={[0.08, 0.08, 3.8]} />
          <meshStandardMaterial color="#10b981" emissive="#10b981" emissiveIntensity={0.6} />
        </mesh>
        <mesh position={[0, 2.7, 0]}>
          <boxGeometry args={[4.9, 0.12, 0.12]} />
          <meshStandardMaterial color="#10b981" emissive="#10b981" emissiveIntensity={0.9} />
        </mesh>
      </group>

      {/* 4. Floating Waypoint Gate 3: IT & Tech Lab (Z = -2) */}
      <group position={[0, 0.5, -2]}>
        <mesh position={[-2.4, 0.8, 0]}>
          <cylinderGeometry args={[0.08, 0.08, 3.8]} />
          <meshStandardMaterial color="#38bdf8" emissive="#38bdf8" emissiveIntensity={0.7} />
        </mesh>
        <mesh position={[2.4, 0.8, 0]}>
          <cylinderGeometry args={[0.08, 0.08, 3.8]} />
          <meshStandardMaterial color="#38bdf8" emissive="#38bdf8" emissiveIntensity={0.7} />
        </mesh>
        <mesh position={[0, 2.7, 0]}>
          <boxGeometry args={[4.9, 0.12, 0.12]} />
          <meshStandardMaterial color="#38bdf8" emissive="#38bdf8" emissiveIntensity={0.9} />
        </mesh>
      </group>

      {/* 5. Floating Waypoint Gate 4: Global Departure Terminal / Ireland (Z = 3) */}
      <group position={[0, 0.5, 3]}>
        <mesh position={[-2.4, 0.8, 0]}>
          <cylinderGeometry args={[0.09, 0.09, 3.8]} />
          <meshStandardMaterial color="#6366f1" emissive="#6366f1" emissiveIntensity={0.8} />
        </mesh>
        <mesh position={[2.4, 0.8, 0]}>
          <cylinderGeometry args={[0.09, 0.09, 3.8]} />
          <meshStandardMaterial color="#6366f1" emissive="#6366f1" emissiveIntensity={0.8} />
        </mesh>
        <mesh position={[0, 2.7, 0]}>
          <boxGeometry args={[4.9, 0.14, 0.14]} />
          <meshStandardMaterial color="#6366f1" emissive="#6366f1" emissiveIntensity={1.0} />
        </mesh>
      </group>

      {/* 6. Ambient Floating Dust Particles */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
          <bufferAttribute
            attach="attributes-color"
            args={[colors, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.06}
          vertexColors
          transparent
          opacity={0.75}
        />
      </points>
    </group>
  );
}
