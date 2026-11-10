'use client';

import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { StageScene } from './StageScene';

interface PortfolioCanvasProps {
  scrollProgress: number; // 0.0 to 1.0
}

export function PortfolioCanvas({ scrollProgress }: PortfolioCanvasProps) {
  const [mounted, setMounted] = useState(false);
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    setMounted(true);
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setHasWebGL(false);
      }
    } catch {
      setHasWebGL(false);
    }
  }, []);

  if (!mounted) {
    return (
      <div className="fixed inset-0 pointer-events-none z-0 bg-[#070a12] flex items-center justify-center">
        <div className="w-10 h-10 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin opacity-50" />
      </div>
    );
  }

  // Graceful 2.5D CSS Grid Fallback if WebGL is unsupported
  if (!hasWebGL) {
    return (
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#070a12]">
        <div 
          className="absolute inset-0 opacity-20 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px] transition-transform duration-300"
          style={{ transform: `translateY(${scrollProgress * 200}px)` }}
        />
        {/* Stylized walking avatar badge */}
        <div 
          className="absolute left-1/2 bottom-12 -translate-x-1/2 w-16 h-28 bg-gradient-to-t from-sky-600 to-amber-400 rounded-full blur-md opacity-40 animate-pulse"
        />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#070a12]">
      <Canvas
        shadows
        camera={{ position: [0, 1.2, 5.5], fov: 48 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <color attach="background" args={['#070a12']} />
        <fog attach="fog" args={['#070a12', 4, 22]} />

        {/* Ambient & Directional Lighting */}
        <ambientLight intensity={0.65} />
        <directionalLight
          position={[4, 8, 6]}
          intensity={1.2}
          castShadow
          shadow-mapSize={[1024, 1024]}
        />
        <pointLight position={[-3, 2, 0]} intensity={1.5} color="#38bdf8" distance={10} />
        <pointLight position={[3, 2, -6]} intensity={1.5} color="#f59e0b" distance={10} />
        <pointLight position={[0, 4, 3]} intensity={2.0} color="#6366f1" distance={12} />

        <Suspense fallback={null}>
          <StageScene />
        </Suspense>
      </Canvas>

      {/* Subtle Bottom Ambient Gradient Overlay */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#070a12] via-[#070a12]/60 to-transparent pointer-events-none" />
    </div>
  );
}

