"use client";

import { useRef, useMemo, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Sphere, Ring, Text, Float, MeshDistortMaterial, Trail } from "@react-three/drei";
import * as THREE from "three";

interface NodeData {
  id: string;
  name: string;
  color: string;
  angle: number;
  distance: number;
  size: number;
}

const SYSTEM_NODES: NodeData[] = [
  { id: "crm", name: "CRM", color: "#3b82f6", angle: 0, distance: 3.5, size: 0.3 },
  { id: "sales", name: "Sales", color: "#60a5fa", angle: 30, distance: 3.8, size: 0.25 },
  { id: "marketing", name: "Marketing", color: "#06b6d4", angle: 60, distance: 3.5, size: 0.28 },
  { id: "finance", name: "Finance", color: "#8b5cf6", angle: 90, distance: 4.0, size: 0.3 },
  { id: "commerce", name: "Commerce", color: "#3b82f6", angle: 120, distance: 3.6, size: 0.32 },
  { id: "inventory", name: "Inventory", color: "#22d3ee", angle: 150, distance: 3.4, size: 0.25 },
  { id: "customers", name: "Customers", color: "#06b6d4", angle: 180, distance: 3.7, size: 0.28 },
  { id: "ai", name: "AI", color: "#a78bfa", angle: 210, distance: 4.2, size: 0.35 },
  { id: "automation", name: "Automation", color: "#3b82f6", angle: 240, distance: 3.5, size: 0.27 },
  { id: "analytics", name: "Analytics", color: "#60a5fa", angle: 270, distance: 3.8, size: 0.3 },
  { id: "operations", name: "Operations", color: "#22d3ee", angle: 300, distance: 3.6, size: 0.26 },
  { id: "mobile", name: "Mobile", color: "#06b6d4", angle: 330, distance: 3.4, size: 0.25 },
];

function ConnectionLine({ start, end, color = "#3b82f6" }: { start: THREE.Vector3; end: THREE.Vector3; color?: string }) {
  const points = useMemo(() => [start, end], [start, end]);
  const lineRef = useRef<THREE.Line>(null);

  useFrame(({ clock }) => {
    if (lineRef.current) {
      const material = lineRef.current.material as THREE.LineBasicMaterial;
      material.opacity = 0.3 + Math.sin(clock.getElapsedTime() * 2) * 0.1;
    }
  });

  return (
    <line ref={lineRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={points.length}
          array={new Float32Array(points.flatMap((p) => [p.x, p.y, p.z]))}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial color={color} transparent opacity={0.3} />
    </line>
  );
}

function DataParticle({ path, speed = 1, color = "#06b6d4" }: { path: THREE.Vector3[]; speed?: number; color?: string }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const progress = useRef(0);

  useFrame((_, delta) => {
    if (!meshRef.current || path.length < 2) return;
    progress.current += delta * speed * 0.3;
    if (progress.current > 1) progress.current = 0;

    const segmentCount = path.length - 1;
    const segmentProgress = progress.current * segmentCount;
    const segmentIndex = Math.floor(segmentProgress);
    const localProgress = segmentProgress - segmentIndex;

    if (segmentIndex < path.length - 1) {
      const start = path[segmentIndex];
      const end = path[segmentIndex + 1];
      meshRef.current.position.lerpVectors(start, end, localProgress);
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[0.05, 8, 8]} />
      <meshBasicMaterial color={color} transparent opacity={0.8} />
    </mesh>
  );
}

function BusinessNode({ node, onHover }: { node: NodeData; onHover?: (id: string | null) => void }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  const position = useMemo(() => {
    const angleRad = (node.angle * Math.PI) / 180;
    return new THREE.Vector3(
      Math.cos(angleRad) * node.distance,
      Math.sin(angleRad) * node.distance * 0.3,
      Math.sin(angleRad) * node.distance
    );
  }, [node]);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      const time = clock.getElapsedTime();
      groupRef.current.position.y = position.y + Math.sin(time + node.angle) * 0.1;
      groupRef.current.rotation.y = time * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh
          ref={meshRef}
          onPointerOver={() => {
            setHovered(true);
            onHover?.(node.id);
          }}
          onPointerOut={() => {
            setHovered(false);
            onHover?.(null);
          }}
        >
          <sphereGeometry args={[node.size, 32, 32]} />
          <meshStandardMaterial
            color={node.color}
            emissive={node.color}
            emissiveIntensity={hovered ? 0.8 : 0.3}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>

        {/* Glow effect */}
        <mesh scale={hovered ? 1.5 : 1.2}>
          <sphereGeometry args={[node.size, 16, 16]} />
          <meshBasicMaterial
            color={node.color}
            transparent
            opacity={hovered ? 0.2 : 0.1}
          />
        </mesh>
      </Float>

      {/* Label */}
      <Text
        position={[0, -node.size - 0.3, 0]}
        fontSize={0.2}
        color="#94a3b8"
        anchorX="center"
        anchorY="top"
        font="/fonts/Inter-Bold.woff"
      >
        {node.name}
      </Text>
    </group>
  );
}

function CentralCore() {
  const coreRef = useRef<THREE.Mesh>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();

    if (coreRef.current) {
      coreRef.current.rotation.y = time * 0.2;
      coreRef.current.rotation.x = Math.sin(time * 0.5) * 0.1;
    }

    if (ring1Ref.current) {
      ring1Ref.current.rotation.z = time * 0.1;
      ring1Ref.current.rotation.x = time * 0.05;
    }

    if (ring2Ref.current) {
      ring2Ref.current.rotation.z = -time * 0.15;
      ring2Ref.current.rotation.y = time * 0.08;
    }
  });

  return (
    <group>
      {/* Main core sphere */}
      <mesh ref={coreRef}>
        <sphereGeometry args={[0.8, 64, 64]} />
        <MeshDistortMaterial
          color="#3b82f6"
          emissive="#2563eb"
          emissiveIntensity={0.5}
          roughness={0.1}
          metalness={0.9}
          distort={0.2}
          speed={2}
        />
      </mesh>

      {/* Inner glow */}
      <mesh scale={1.3}>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshBasicMaterial
          color="#3b82f6"
          transparent
          opacity={0.15}
        />
      </mesh>

      {/* Outer glow */}
      <mesh scale={2}>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshBasicMaterial
          color="#06b6d4"
          transparent
          opacity={0.05}
        />
      </mesh>

      {/* Ring 1 */}
      <mesh ref={ring1Ref}>
        <torusGeometry args={[1.4, 0.02, 16, 100]} />
        <meshBasicMaterial color="#3b82f6" transparent opacity={0.4} />
      </mesh>

      {/* Ring 2 */}
      <mesh ref={ring2Ref} rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[1.8, 0.015, 16, 100]} />
        <meshBasicMaterial color="#06b6d4" transparent opacity={0.3} />
      </mesh>

      {/* Ring 3 - vertical */}
      <mesh rotation={[0, 0, Math.PI / 2]}>
        <torusGeometry args={[1.6, 0.01, 16, 100]} />
        <meshBasicMaterial color="#8b5cf6" transparent opacity={0.2} />
      </mesh>
    </group>
  );
}

function ParticleField({ count = 200 }: { count?: number }) {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      temp.push({
        position: new THREE.Vector3(
          (Math.random() - 0.5) * 15,
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 15
        ),
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.01,
          (Math.random() - 0.5) * 0.01,
          (Math.random() - 0.5) * 0.01
        ),
        phase: Math.random() * Math.PI * 2,
      });
    }
    return temp;
  }, [count]);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const time = clock.getElapsedTime();

    particles.forEach((particle, i) => {
      particle.position.add(particle.velocity);

      // Boundary check
      if (Math.abs(particle.position.x) > 7) particle.velocity.x *= -1;
      if (Math.abs(particle.position.y) > 5) particle.velocity.y *= -1;
      if (Math.abs(particle.position.z) > 7) particle.velocity.z *= -1;

      dummy.position.copy(particle.position);
      dummy.scale.setScalar(0.5 + Math.sin(time * 2 + particle.phase) * 0.3);
      dummy.updateMatrix();
      meshRef.current!.setMatrixAt(i, dummy.matrix);
    });

    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <sphereGeometry args={[0.03, 8, 8]} />
      <meshBasicMaterial color="#3b82f6" transparent opacity={0.6} />
    </instancedMesh>
  );
}

export default function BusinessCore() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const { camera } = useThree();

  useEffect(() => {
    camera.position.set(0, 2, 8);
    camera.lookAt(0, 0, 0);
  }, [camera]);

  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={0.5} color="#3b82f6" />
      <directionalLight position={[-5, -5, -5]} intensity={0.3} color="#06b6d4" />
      <pointLight position={[0, 0, 0]} intensity={1} color="#3b82f6" distance={10} />
      <pointLight position={[3, 3, 3]} intensity={0.5} color="#8b5cf6" distance={8} />

      {/* Central Core */}
      <CentralCore />

      {/* System Nodes */}
      {SYSTEM_NODES.map((node) => (
        <BusinessNode
          key={node.id}
          node={node}
          onHover={setHoveredNode}
        />
      ))}

      {/* Connection lines to core */}
      {SYSTEM_NODES.map((node) => {
        const angleRad = (node.angle * Math.PI) / 180;
        const end = new THREE.Vector3(
          Math.cos(angleRad) * node.distance,
          Math.sin(angleRad) * node.distance * 0.3,
          Math.sin(angleRad) * node.distance
        );
        return (
          <ConnectionLine
            key={`conn-${node.id}`}
            start={new THREE.Vector3(0, 0, 0)}
            end={end}
            color={hoveredNode === node.id ? "#22d3ee" : "#3b82f6"}
          />
        );
      })}

      {/* Data particles */}
      {SYSTEM_NODES.slice(0, 6).map((node, i) => {
        const angleRad = (node.angle * Math.PI) / 180;
        const end = new THREE.Vector3(
          Math.cos(angleRad) * node.distance,
          Math.sin(angleRad) * node.distance * 0.3,
          Math.sin(angleRad) * node.distance
        );
        return (
          <DataParticle
            key={`particle-${node.id}`}
            path={[new THREE.Vector3(0, 0, 0), end]}
            speed={0.5 + i * 0.1}
            color={node.color}
          />
        );
      })}

      {/* Background particles */}
      <ParticleField count={150} />

      {/* Environment */}
      <fog attach="fog" args={["#030712", 10, 25]} />
    </>
  );
}

// Need to import useState
import { useState } from "react";
