import { Canvas, useFrame } from '@react-three/fiber'
import { RoundedBox, Environment, ContactShadows, Float } from '@react-three/drei'
import { useRef, useMemo } from 'react'
import * as THREE from 'three'

// Smoothly tracked normalized scroll progress (0..1-ish), shared via a ref.
function useScrollProgress() {
  const ref = useRef(0)
  if (typeof window !== 'undefined') {
    // attach once
    if (!ref.current?.__bound) {
      const state = { v: 0, __bound: true }
      const onScroll = () => {
        const max = document.documentElement.scrollHeight - window.innerHeight
        state.v = max > 0 ? window.scrollY / max : 0
      }
      window.addEventListener('scroll', onScroll, { passive: true })
      onScroll()
      ref.current = state
    }
  }
  return ref
}

function Wheel({ x, z }) {
  return (
    <group position={[x, -0.62, z]} rotation={[0, 0, Math.PI / 2]}>
      <mesh castShadow>
        <cylinderGeometry args={[0.42, 0.42, 0.34, 36]} />
        <meshStandardMaterial color="#0a0a0a" roughness={0.85} metalness={0.2} />
      </mesh>
      {/* rim */}
      <mesh position={[0, 0.175, 0]}>
        <cylinderGeometry args={[0.27, 0.27, 0.05, 24]} />
        <meshStandardMaterial color="#cfd2d8" roughness={0.25} metalness={1} />
      </mesh>
      {/* spokes */}
      {Array.from({ length: 6 }).map((_, i) => (
        <mesh key={i} position={[0, 0.18, 0]} rotation={[0, (i / 6) * Math.PI * 2, 0]}>
          <boxGeometry args={[0.5, 0.04, 0.07]} />
          <meshStandardMaterial color="#b9bcc4" roughness={0.3} metalness={1} />
        </mesh>
      ))}
      <mesh position={[0, 0.2, 0]}>
        <cylinderGeometry args={[0.08, 0.08, 0.06, 16]} />
        <meshStandardMaterial color="#8b3fd9" emissive="#8b3fd9" emissiveIntensity={0.6} />
      </mesh>
    </group>
  )
}

function Car() {
  const paint = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: '#0c0c10',
        roughness: 0.18,
        metalness: 0.9,
        clearcoat: 1,
        clearcoatRoughness: 0.08,
        envMapIntensity: 1.4,
      }),
    []
  )
  const glass = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: '#10131a',
        roughness: 0.08,
        metalness: 0.2,
        transmission: 0.55,
        transparent: true,
        opacity: 0.85,
        envMapIntensity: 1.2,
      }),
    []
  )

  return (
    <group position={[0, 0.1, 0]}>
      {/* lower body */}
      <RoundedBox args={[3.5, 0.62, 1.55]} radius={0.16} smoothness={5} position={[0, -0.25, 0]} material={paint} castShadow />
      {/* mid body / shoulder */}
      <RoundedBox args={[3.3, 0.5, 1.62]} radius={0.22} smoothness={5} position={[-0.05, 0.06, 0]} material={paint} castShadow />
      {/* hood taper (front) */}
      <RoundedBox args={[1.0, 0.34, 1.5]} radius={0.16} smoothness={5} position={[1.35, 0.12, 0]} material={paint} castShadow />
      {/* cabin / greenhouse */}
      <RoundedBox args={[1.85, 0.62, 1.42]} radius={0.26} smoothness={5} position={[-0.15, 0.5, 0]} material={paint} castShadow />
      {/* windshield + windows */}
      <RoundedBox args={[1.55, 0.5, 1.46]} radius={0.24} smoothness={5} position={[-0.12, 0.52, 0]} material={glass} />
      {/* roof cap */}
      <RoundedBox args={[1.5, 0.16, 1.34]} radius={0.12} smoothness={5} position={[-0.2, 0.82, 0]} material={paint} />

      {/* headlights */}
      <mesh position={[1.82, 0.05, 0.5]}>
        <boxGeometry args={[0.08, 0.16, 0.34]} />
        <meshStandardMaterial color="#eef3ff" emissive="#dfe9ff" emissiveIntensity={2.2} />
      </mesh>
      <mesh position={[1.82, 0.05, -0.5]}>
        <boxGeometry args={[0.08, 0.16, 0.34]} />
        <meshStandardMaterial color="#eef3ff" emissive="#dfe9ff" emissiveIntensity={2.2} />
      </mesh>
      {/* tail lights */}
      <mesh position={[-1.74, 0.08, 0.52]}>
        <boxGeometry args={[0.07, 0.14, 0.3]} />
        <meshStandardMaterial color="#ff2d40" emissive="#ff2d40" emissiveIntensity={2.4} />
      </mesh>
      <mesh position={[-1.74, 0.08, -0.52]}>
        <boxGeometry args={[0.07, 0.14, 0.3]} />
        <meshStandardMaterial color="#ff2d40" emissive="#ff2d40" emissiveIntensity={2.4} />
      </mesh>

      {/* purple underglow — soft, tucked just under the sills */}
      <mesh position={[0, -0.72, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[1.5, 48]} />
        <meshBasicMaterial color="#8b3fd9" transparent opacity={0.32} blending={THREE.AdditiveBlending} depthWrite={false} />
      </mesh>

      <Wheel x={1.15} z={0.82} />
      <Wheel x={1.15} z={-0.82} />
      <Wheel x={-1.15} z={0.82} />
      <Wheel x={-1.15} z={-0.82} />
    </group>
  )
}

function Rig({ scroll }) {
  const group = useRef()
  useFrame((state, delta) => {
    const p = scroll.current?.v ?? 0
    const t = state.clock.elapsedTime
    if (group.current) {
      // base 3/4 angle + a full extra turn across the page scroll + gentle idle sway
      const target = -0.5 + p * Math.PI * 2.2 + Math.sin(t * 0.3) * 0.08
      group.current.rotation.y = THREE.MathUtils.damp(group.current.rotation.y, target, 3, delta)
      group.current.position.y = Math.sin(t * 0.8) * 0.06
      group.current.rotation.z = THREE.MathUtils.damp(group.current.rotation.z, Math.sin(t * 0.4) * 0.02, 3, delta)
    }
  })
  return (
    <group ref={group} position={[1.15, 0.05, 0]} scale={0.96}>
      <Float speed={1.2} rotationIntensity={0} floatIntensity={0.3}>
        <Car />
      </Float>
    </group>
  )
}

export default function CarScene() {
  const scroll = useScrollProgress()
  return (
    <div className="bg-canvas">
      <Canvas
        shadows
        dpr={[1, 1.8]}
        camera={{ position: [5.2, 1.15, 5.8], fov: 36 }}
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={['#08080a']} />
        <fog attach="fog" args={['#08080a', 9, 20]} />
        <ambientLight intensity={0.35} />
        <spotLight position={[6, 8, 4]} angle={0.5} penumbra={1} intensity={2.2} castShadow color="#ffffff" />
        <pointLight position={[-6, 2, -4]} intensity={2.4} color="#8b3fd9" />
        <pointLight position={[4, 1, -5]} intensity={1.4} color="#5b8cff" />
        <Rig scroll={scroll} />
        <ContactShadows position={[0, -1.05, 0]} opacity={0.55} scale={12} blur={2.6} far={4} color="#000000" />
        <Environment preset="night" />
      </Canvas>
    </div>
  )
}
