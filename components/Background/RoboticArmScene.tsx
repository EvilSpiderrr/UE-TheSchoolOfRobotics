'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh } from 'three'

function RoboticArmSegment({ position, rotation, length, delay = 0 }: {
  position: [number, number, number]
  rotation: [number, number, number]
  length: number
  delay?: number
}) {
  const meshRef = useRef<Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime() + delay
      meshRef.current.rotation.y = Math.sin(time * 0.3) * 0.3
      meshRef.current.rotation.x = Math.sin(time * 0.2) * 0.2
    }
  })

  return (
    <group position={position} rotation={rotation}>
      <mesh ref={meshRef}>
        <cylinderGeometry args={[0.08, 0.08, length, 16]} />
        <meshBasicMaterial color="#FFFFFF" transparent opacity={0.35} />
      </mesh>
      <mesh position={[0, length / 2, 0]}>
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshBasicMaterial color="#FFFFFF" transparent opacity={0.4} />
      </mesh>
    </group>
  )
}

function SensorNode({ position, delay = 0 }: { position: [number, number, number], delay?: number }) {
  const meshRef = useRef<Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime() + delay
      meshRef.current.position.y = position[1] + Math.sin(time * 0.5) * 0.1
      meshRef.current.rotation.z = time * 0.2
    }
  })

  return (
    <mesh ref={meshRef} position={position}>
      <ringGeometry args={[0.12, 0.18, 16]} />
      <meshBasicMaterial color="#FFFFFF" transparent opacity={0.35} />
    </mesh>
  )
}

function PathLine({ start, end, delay = 0 }: { 
  start: [number, number, number]
  end: [number, number, number]
  delay?: number
}) {
  const points = [
    [start[0], start[1], start[2]],
    [end[0], end[1], end[2]],
  ]

  return (
    <line>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={points.length}
          array={new Float32Array(points.flat())}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial color="#FFFFFF" transparent opacity={0.4} linewidth={3} />
    </line>
  )
}

export default function RoboticArmScene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={0.3} />
      
      {/* Main robotic arm */}
      <group position={[-2, -1, 0]}>
        <RoboticArmSegment 
          position={[0, 0, 0]} 
          rotation={[0, 0, 0]} 
          length={1.5} 
          delay={0}
        />
        <RoboticArmSegment 
          position={[0, 1.5, 0]} 
          rotation={[0.5, 0, 0]} 
          length={1.2} 
          delay={0.5}
        />
        <RoboticArmSegment 
          position={[0, 2.7, 0]} 
          rotation={[-0.3, 0, 0]} 
          length={0.8} 
          delay={1}
        />
      </group>

      {/* Sensor nodes */}
      <SensorNode position={[2, 1, 0]} delay={0} />
      <SensorNode position={[-1, 2, 0]} delay={0.7} />
      <SensorNode position={[1.5, -1, 0]} delay={1.4} />
      <SensorNode position={[-2.5, 1.5, 0]} delay={2.1} />

      {/* Path lines (A* path simulation) */}
      <PathLine start={[-2, -1, 0]} end={[2, 1, 0]} delay={0} />
      <PathLine start={[2, 1, 0]} end={[-1, 2, 0]} delay={0.5} />
      <PathLine start={[-1, 2, 0]} end={[1.5, -1, 0]} delay={1} />
    </>
  )
}
