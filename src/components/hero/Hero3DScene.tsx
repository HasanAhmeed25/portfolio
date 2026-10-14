import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from '../../context/ThemeContext';

interface WorkspaceProps {
  isDark: boolean;
}

// 3D Developer Workspace Model: Sleek Monitor / Laptop, Clean Keyboard Plate, Floating Tech Elements
const DeveloperWorkspace: React.FC<WorkspaceProps> = ({ isDark }) => {
  const groupRef = useRef<THREE.Group>(null);
  const floatingCubeRef = useRef<THREE.Mesh>(null);
  const floatingSphereRef = useRef<THREE.Mesh>(null);
  const orbitTorusRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      // Gentle idle breathing
      groupRef.current.position.y = Math.sin(t * 0.8) * 0.05;
    }
    if (floatingCubeRef.current) {
      floatingCubeRef.current.rotation.x += delta * 0.3;
      floatingCubeRef.current.rotation.y += delta * 0.4;
      floatingCubeRef.current.position.y = 1.1 + Math.sin(t * 1.2) * 0.12;
    }
    if (floatingSphereRef.current) {
      floatingSphereRef.current.position.x = 1.6 + Math.cos(t * 0.9) * 0.15;
      floatingSphereRef.current.position.y = 0.6 + Math.sin(t * 1.1) * 0.15;
      floatingSphereRef.current.position.z = 0.5 + Math.sin(t * 0.7) * 0.15;
    }
    if (orbitTorusRef.current) {
      orbitTorusRef.current.rotation.z -= delta * 0.25;
      orbitTorusRef.current.rotation.x += delta * 0.15;
    }
  });

  // Color tokens
  const bodyColor = isDark ? "#1E2638" : "#E2E6EF";
  const screenBezelColor = isDark ? "#151B27" : "#FFFFFF";
  const screenDisplayColor = isDark ? "#0F141F" : "#172033";
  const accentBlue = isDark ? "#3B82F6" : "#2463EB";
  const softBlue = isDark ? "#60A5FA" : "#93C5FD";
  const deskBaseColor = isDark ? "#121722" : "#F6F7F9";
  const codeLineMuted = isDark ? "#28344B" : "#324360";

  return (
    <group ref={groupRef} position={[0, -0.4, 0]}>
      {/* 1. Base / Desk Shadow Plate */}
      <mesh position={[0, -0.65, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[5, 4]} />
        <meshBasicMaterial 
          color={deskBaseColor} 
          transparent 
          opacity={isDark ? 0.3 : 0.6} 
        />
      </mesh>

      {/* 2. Workstation Monitor / Laptop Screen */}
      <group position={[0, 0.45, -0.2]}>
        {/* Outer Monitor Frame / Bezel */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[2.5, 1.65, 0.08]} />
          <meshStandardMaterial
            color={screenBezelColor}
            roughness={0.2}
            metalness={isDark ? 0.4 : 0.1}
          />
        </mesh>

        {/* Display Screen */}
        <mesh position={[0, 0, 0.045]}>
          <planeGeometry args={[2.34, 1.48]} />
          <meshBasicMaterial color={screenDisplayColor} />
        </mesh>

        {/* Simulated Code Lines / Code Editor Window on Display */}
        {/* Top window dots */}
        <mesh position={[-0.95, 0.6, 0.048]}>
          <circleGeometry args={[0.025, 16]} />
          <meshBasicMaterial color="#EF4444" />
        </mesh>
        <mesh position={[-0.87, 0.6, 0.048]}>
          <circleGeometry args={[0.025, 16]} />
          <meshBasicMaterial color="#F59E0B" />
        </mesh>
        <mesh position={[-0.79, 0.6, 0.048]}>
          <circleGeometry args={[0.025, 16]} />
          <meshBasicMaterial color="#10B981" />
        </mesh>

        {/* Simulated Code Lines */}
        <mesh position={[-0.45, 0.42, 0.048]}>
          <planeGeometry args={[1.0, 0.04]} />
          <meshBasicMaterial color={accentBlue} />
        </mesh>
        <mesh position={[-0.2, 0.3, 0.048]}>
          <planeGeometry args={[1.5, 0.035]} />
          <meshBasicMaterial color={softBlue} />
        </mesh>
        <mesh position={[-0.3, 0.18, 0.048]}>
          <planeGeometry args={[1.3, 0.035]} />
          <meshBasicMaterial color={codeLineMuted} />
        </mesh>
        <mesh position={[-0.1, 0.06, 0.048]}>
          <planeGeometry args={[1.7, 0.035]} />
          <meshBasicMaterial color={codeLineMuted} />
        </mesh>
        <mesh position={[-0.4, -0.06, 0.048]}>
          <planeGeometry args={[1.1, 0.035]} />
          <meshBasicMaterial color={accentBlue} />
        </mesh>
        <mesh position={[-0.25, -0.18, 0.048]}>
          <planeGeometry args={[1.4, 0.035]} />
          <meshBasicMaterial color={softBlue} />
        </mesh>
        <mesh position={[-0.5, -0.3, 0.048]}>
          <planeGeometry args={[0.9, 0.035]} />
          <meshBasicMaterial color={codeLineMuted} />
        </mesh>
        <mesh position={[-0.35, -0.42, 0.048]}>
          <planeGeometry args={[1.2, 0.035]} />
          <meshBasicMaterial color={codeLineMuted} />
        </mesh>

        {/* Active Syntax Highlight / IoT Telemetry Pill on Display */}
        <mesh position={[0.7, -0.38, 0.048]}>
          <planeGeometry args={[0.65, 0.22]} />
          <meshBasicMaterial color={accentBlue} />
        </mesh>

        {/* Monitor Stand Hinge & Base */}
        <mesh position={[0, -0.9, -0.05]}>
          <cylinderGeometry args={[0.07, 0.09, 0.4, 16]} />
          <meshStandardMaterial
            color={bodyColor}
            roughness={0.3}
            metalness={0.4}
          />
        </mesh>
        <mesh position={[0, -1.08, 0]}>
          <cylinderGeometry args={[0.42, 0.44, 0.035, 32]} />
          <meshStandardMaterial
            color={bodyColor}
            roughness={0.25}
            metalness={0.4}
          />
        </mesh>
      </group>

      {/* 3. Sleek Keyboard Plate */}
      <group position={[0, -0.55, 0.65]}>
        {/* Keyboard body */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[1.9, 0.035, 0.7]} />
          <meshStandardMaterial
            color={bodyColor}
            roughness={0.3}
            metalness={isDark ? 0.3 : 0.15}
          />
        </mesh>

        {/* Keyboard Key Surface Texture */}
        <mesh position={[0, 0.02, -0.05]}>
          <boxGeometry args={[1.75, 0.015, 0.48]} />
          <meshStandardMaterial
            color={isDark ? "#172031" : "#FFFFFF"}
            roughness={0.4}
          />
        </mesh>

        {/* Spacebar Key Accent */}
        <mesh position={[0, 0.03, 0.12]}>
          <boxGeometry args={[0.65, 0.015, 0.08]} />
          <meshStandardMaterial
            color={accentBlue}
            roughness={0.3}
          />
        </mesh>
      </group>

      {/* 4. Minimal Ceramic Coffee Mug (Developer Workspace Detail) */}
      <group position={[-1.6, -0.45, 0.4]}>
        <mesh>
          <cylinderGeometry args={[0.16, 0.14, 0.34, 24]} />
          <meshStandardMaterial
            color={isDark ? "#28344C" : "#FFFFFF"}
            roughness={0.2}
          />
        </mesh>
        {/* Coffee Liquid */}
        <mesh position={[0, 0.14, 0]}>
          <circleGeometry args={[0.14, 24]} />
          <meshStandardMaterial color="#4A2E18" roughness={0.6} />
        </mesh>
      </group>

      {/* 5. Floating Modern Component Tokens (Soft studio geometry) */}
      {/* Blue Code Block Cube */}
      <mesh ref={floatingCubeRef} position={[-1.75, 1.1, 0.2]}>
        <boxGeometry args={[0.32, 0.32, 0.32]} />
        <meshStandardMaterial
          color={accentBlue}
          roughness={0.2}
          metalness={0.3}
        />
      </mesh>

      {/* Soft Ceramic Sphere */}
      <mesh ref={floatingSphereRef} position={[1.6, 0.6, 0.5]}>
        <sphereGeometry args={[0.22, 32, 32]} />
        <meshStandardMaterial
          color={isDark ? "#2B374E" : "#FFFFFF"}
          roughness={0.15}
          metalness={0.2}
        />
      </mesh>

      {/* Subtle Orbital Halo Ring */}
      <mesh ref={orbitTorusRef} position={[1.4, 0.95, -0.1]} rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[0.42, 0.018, 16, 48]} />
        <meshStandardMaterial
          color={softBlue}
          roughness={0.3}
          metalness={0.6}
        />
      </mesh>
    </group>
  );
};

// Interactive Parallax Container
interface SceneContentProps {
  mouse: React.MutableRefObject<[number, number]>;
  isDark: boolean;
}

const SceneContent: React.FC<SceneContentProps> = ({ mouse, isDark }) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      const targetX = (mouse.current[0] * Math.PI) / 16;
      const targetY = (mouse.current[1] * Math.PI) / 18;
      groupRef.current.rotation.y += (targetX - groupRef.current.rotation.y) * 0.04;
      groupRef.current.rotation.x += (-targetY - groupRef.current.rotation.x) * 0.04;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={1.2} rotationIntensity={0.12} floatIntensity={0.25}>
        <DeveloperWorkspace isDark={isDark} />
      </Float>
    </group>
  );
};

export const Hero3DScene: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const mouse = useRef<[number, number]>([0, 0]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = ((clientX - left) / width) * 2 - 1;
    const y = -(((clientY - top) / height) * 2 - 1);
    mouse.current = [x, y];
  };

  const handleMouseLeave = () => {
    mouse.current = [0, 0];
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-[360px] sm:h-[440px] lg:h-[490px] cursor-grab active:cursor-grabbing flex items-center justify-center select-none"
      aria-label="Interactive 3D Developer Workspace"
    >
      <Canvas
        key={theme}
        camera={{ position: [0, 0.4, 5.0], fov: 42 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'default' }}
        dpr={[1, 1.8]}
      >
        {/* Soft, natural studio lighting with zero neon glow */}
        <ambientLight intensity={isDark ? 0.6 : 0.95} color={isDark ? "#172033" : "#FFFFFF"} />
        <directionalLight
          position={[5, 7, 5]}
          intensity={isDark ? 1.4 : 1.3}
          color={isDark ? "#A0B8E8" : "#FFFFFF"}
        />
        <directionalLight
          position={[-5, -2, 3]}
          intensity={isDark ? 0.6 : 0.5}
          color={isDark ? "#1E293B" : "#EEF4FF"}
        />
        <pointLight
          position={[2.5, 3.5, 2.5]}
          intensity={isDark ? 0.8 : 0.4}
          color={isDark ? "#60A5FA" : "#2463EB"}
        />

        <SceneContent mouse={mouse} isDark={isDark} />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 1.7}
          minPolarAngle={Math.PI / 2.7}
          rotateSpeed={0.35}
        />
      </Canvas>

      {/* Subtle Studio Badge */}
      <div className="absolute bottom-3 right-3 pointer-events-none z-10">
        <span className="font-mono text-[10px] text-text-muted bg-background-card px-2.5 py-1 rounded-md border border-border shadow-subtle transition-colors">
          Interactive Workspace · WebGL
        </span>
      </div>
    </div>
  );
};
