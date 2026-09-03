"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function ThreeCanvas() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isSupported, setIsSupported] = useState(true);

  useEffect(() => {
    if (!mountRef.current) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      return;
    }

    const container = mountRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 18;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      container.appendChild(renderer.domElement);
    } catch (e) {
      console.warn("WebGL not available, using fallback", e);
      setIsSupported(false);
      return;
    }

    // Master Group for Parallax
    const masterGroup = new THREE.Group();
    scene.add(masterGroup);

    // 1. Central Core: Glowing Icosahedron
    const coreGeometry = new THREE.IcosahedronGeometry(3.6, 2);
    const coreMaterial = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
    masterGroup.add(coreMesh);

    // Inner glowing sphere
    const innerGeometry = new THREE.SphereGeometry(2.2, 16, 16);
    const innerMaterial = new THREE.MeshBasicMaterial({
      color: 0x8b5cf6,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    });
    const innerMesh = new THREE.Mesh(innerGeometry, innerMaterial);
    masterGroup.add(innerMesh);

    // 2. Neural Nodes (Points)
    const particleCount = 180;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const cyanColor = new THREE.Color(0x00f0ff);
    const violetColor = new THREE.Color(0x8b5cf6);
    const blueColor = new THREE.Color(0x3b82f6);

    for (let i = 0; i < particleCount; i++) {
      const radius = 4.2 + Math.random() * 2.8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      particlePositions[i * 3] = x;
      particlePositions[i * 3 + 1] = y;
      particlePositions[i * 3 + 2] = z;

      const mixedColor = i % 3 === 0 ? cyanColor : i % 3 === 1 ? violetColor : blueColor;
      particleColors[i * 3] = mixedColor.r;
      particleColors[i * 3 + 1] = mixedColor.g;
      particleColors[i * 3 + 2] = mixedColor.b;
    }

    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
    particlesGeometry.setAttribute("color", new THREE.BufferAttribute(particleColors, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.18,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    });

    const particleSystem = new THREE.Points(particlesGeometry, particlesMaterial);
    masterGroup.add(particleSystem);

    // 3. Cybernetic Orbital Rings
    const ringGeometry1 = new THREE.TorusGeometry(6.2, 0.03, 16, 100);
    const ringMaterial1 = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      transparent: true,
      opacity: 0.4,
    });
    const ring1 = new THREE.Mesh(ringGeometry1, ringMaterial1);
    ring1.rotation.x = Math.PI / 3;
    masterGroup.add(ring1);

    const ringGeometry2 = new THREE.TorusGeometry(7.0, 0.02, 16, 100);
    const ringMaterial2 = new THREE.MeshBasicMaterial({
      color: 0x8b5cf6,
      transparent: true,
      opacity: 0.35,
    });
    const ring2 = new THREE.Mesh(ringGeometry2, ringMaterial2);
    ring2.rotation.y = Math.PI / 4;
    ring2.rotation.x = -Math.PI / 6;
    masterGroup.add(ring2);

    // Mouse Interaction / Parallax
    let targetX = 0;
    let targetY = 0;
    let windowHalfX = window.innerWidth / 2;
    let windowHalfY = window.innerHeight / 2;

    const handleMouseMove = (event: MouseEvent) => {
      targetX = (event.clientX - windowHalfX) * 0.0008;
      targetY = (event.clientY - windowHalfY) * 0.0008;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
      windowHalfX = window.innerWidth / 2;
      windowHalfY = window.innerHeight / 2;
    };

    window.addEventListener("resize", handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth Rotation
      coreMesh.rotation.x = elapsedTime * 0.15;
      coreMesh.rotation.y = elapsedTime * 0.22;

      innerMesh.rotation.x = -elapsedTime * 0.2;
      innerMesh.rotation.y = -elapsedTime * 0.28;

      particleSystem.rotation.y = elapsedTime * 0.08;
      particleSystem.rotation.x = Math.sin(elapsedTime * 0.1) * 0.1;

      ring1.rotation.z = elapsedTime * 0.18;
      ring2.rotation.z = -elapsedTime * 0.14;

      // Pulse core scale subtly
      const scale = 1 + Math.sin(elapsedTime * 1.5) * 0.04;
      coreMesh.scale.set(scale, scale, scale);

      // Smooth Parallax Dampening
      masterGroup.rotation.y += (targetX - masterGroup.rotation.y) * 0.05;
      masterGroup.rotation.x += (targetY - masterGroup.rotation.x) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (renderer.domElement && renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
      // Dispose geometries & materials
      coreGeometry.dispose();
      coreMaterial.dispose();
      innerGeometry.dispose();
      innerMaterial.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      ringGeometry1.dispose();
      ringMaterial1.dispose();
      ringGeometry2.dispose();
      ringMaterial2.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-full min-h-[380px] sm:min-h-[460px] flex items-center justify-center">
      {/* 3D WebGL Mounting Container */}
      <div ref={mountRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      {/* Elegant Fallback or Overlay AI Pulse Monogram */}
      <div className="relative z-10 flex flex-col items-center justify-center pointer-events-none">
        <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-gradient-to-tr from-cyan-500/20 via-blue-600/10 to-violet-500/20 backdrop-blur-md border border-cyan-400/30 flex items-center justify-center shadow-[0_0_50px_rgba(0,240,255,0.25)] group">
          <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-[#080d24]/90 border border-violet-400/40 flex flex-col items-center justify-center">
            <span className="font-heading text-2xl sm:text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-300 to-violet-400 bg-clip-text text-transparent tracking-widest">
              SH
            </span>
            <span className="text-[9px] uppercase tracking-[0.2em] text-cyan-400/80 font-mono mt-0.5">
              AI / ML
            </span>
          </div>
        </div>

        {/* Ambient Halo Glow */}
        <div className="absolute -inset-10 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none -z-10 animate-pulse-slow" />
      </div>
    </div>
  );
}
