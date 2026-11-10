'use client';

import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, useAnimations } from '@react-three/drei';
import * as THREE from 'three';

interface WalkingCharacterProps {
  scrollProgress: number; // 0.0 to 1.0
}

export function WalkingCharacter({ scrollProgress }: WalkingCharacterProps) {
  const rootGroupRef = useRef<THREE.Group>(null);
  const pedestalRef = useRef<THREE.Group>(null);

  // Load real 3D rigged humanoid model with skeletal bone animations
  const { scene, animations } = useGLTF('/models/Soldier.glb');
  const { actions } = useAnimations(animations, rootGroupRef);

  const prevProgressRef = useRef<number>(scrollProgress);
  const velocityRef = useRef<number>(0);

  useEffect(() => {
    // Style materials to match Hakim's smart-casual navy & cyber aesthetic
    scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        if (mesh.material) {
          const mat = mesh.material as THREE.MeshStandardMaterial;
          if (mesh.name.toLowerCase().includes('visor')) {
            mat.color = new THREE.Color('#06b6d4');
            mat.emissive = new THREE.Color('#06b6d4');
            mat.emissiveIntensity = 0.6;
            mat.roughness = 0.1;
            mat.metalness = 0.9;
          } else {
            mat.color = new THREE.Color('#162d4a'); // Deep navy blazer
            mat.roughness = 0.35;
          }
        }
      }
    });

    // Start in Idle pose
    if (actions['Idle']) {
      actions['Idle'].play();
    }

    return () => {
      Object.values(actions).forEach((action) => action?.stop());
    };
  }, [scene, actions]);

  useFrame((state) => {
    if (!rootGroupRef.current) return;

    // Calculate real-time scrolling delta and velocity
    const deltaProgress = Math.abs(scrollProgress - prevProgressRef.current);
    prevProgressRef.current = scrollProgress;

    const targetVelocity = deltaProgress > 0.0003 ? Math.min(deltaProgress * 95, 3.0) : 0;
    velocityRef.current = THREE.MathUtils.lerp(velocityRef.current, targetVelocity, 0.15);

    // Path position: character walks along Z axis and sways gently along X
    const targetZ = -13 + scrollProgress * 15.2;
    const targetX = Math.sin(scrollProgress * Math.PI * 3.5) * 1.5;

    rootGroupRef.current.position.z = THREE.MathUtils.lerp(rootGroupRef.current.position.z, targetZ, 0.08);
    rootGroupRef.current.position.x = THREE.MathUtils.lerp(rootGroupRef.current.position.x, targetX, 0.08);

    // Facing direction: character turns slightly in direction of curvature
    const turnAngle = Math.cos(scrollProgress * Math.PI * 3.5) * 0.35;
    rootGroupRef.current.rotation.y = THREE.MathUtils.lerp(rootGroupRef.current.rotation.y, turnAngle, 0.1);

    // Pedestal rotation
    if (pedestalRef.current) {
      pedestalRef.current.rotation.y = state.clock.getElapsedTime() * 0.5;
    }

    // Blend between Idle and Walk animations based on scroll activity
    const isMoving = velocityRef.current > 0.1;
    if (actions['Walk'] && actions['Idle']) {
      if (isMoving) {
        actions['Idle'].fadeOut(0.2);
        actions['Walk'].reset().fadeIn(0.2).play();
        actions['Walk'].timeScale = Math.max(velocityRef.current * 0.85, 0.6);
      } else {
        actions['Walk'].fadeOut(0.35);
        actions['Idle'].reset().fadeIn(0.35).play();
      }
    }
  });

  return (
    <group ref={rootGroupRef} position={[0, -1.2, -13]} scale={[1.4, 1.4, 1.4]}>
      {/* 1. Real Rigged 3D Character Mesh */}
      <primitive object={scene} />

      {/* 2. Cybernetic Pedestal / Holographic Base */}
      <group ref={pedestalRef} position={[0, 0.02, 0]}>
        <mesh rotation={[-Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.9, 1.0, 0.06, 32]} />
          <meshStandardMaterial
            color="#0284c7"
            emissive="#0284c7"
            emissiveIntensity={0.6}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>
        <mesh position={[0, 0.04, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[0.85, 0.98, 32]} />
          <meshBasicMaterial color="#38bdf8" />
        </mesh>
        <mesh position={[0, 0.05, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[0.45, 0.55, 16]} />
          <meshBasicMaterial color="#f59e0b" />
        </mesh>
      </group>

      {/* 3. Shadow Light Glow */}
      <mesh position={[0, -0.05, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.2, 1.4, 32]} />
        <meshBasicMaterial color="#0284c7" transparent opacity={0.35} />
      </mesh>
    </group>
  );
}

useGLTF.preload('/models/Soldier.glb');
