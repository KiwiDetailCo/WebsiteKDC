import { Canvas } from '@react-three/fiber'
import { Environment, ContactShadows, useGLTF } from '@react-three/drei'
import { Suspense, useLayoutEffect, useMemo, useRef } from 'react'
import * as THREE from 'three'

// --- tweakables for placement ---
const TARGET_SIZE = 4.6        // largest dimension in world units
const ROT_Y = 2.5              // facing direction (radians) — tuned to face right + toward camera
const POS = [1.15, -0.35, 0]   // x (right), y (height), z

function Porsche() {
  const { scene } = useGLTF('/models/porsche.glb')
  const ref = useRef()
  // clone so HMR / reuse is safe
  const model = useMemo(() => scene.clone(true), [scene])

  useLayoutEffect(() => {
    // center on origin, rest on the ground (y=0), and normalise scale
    const box = new THREE.Box3().setFromObject(model)
    const size = box.getSize(new THREE.Vector3())
    const center = box.getCenter(new THREE.Vector3())
    const maxDim = Math.max(size.x, size.y, size.z)
    const s = TARGET_SIZE / maxDim
    model.position.set(-center.x, -center.y, -center.z)
    model.traverse((o) => {
      if (o.isMesh) {
        o.castShadow = true
        o.receiveShadow = true
        if (o.material) o.material.envMapIntensity = 1.2
      }
    })
    if (ref.current) {
      ref.current.scale.setScalar(s)
      // lift so the bottom of the (scaled) model sits on y=0
      ref.current.position.y = (size.y / 2) * s
    }
  }, [model])

  return (
    <group position={POS} rotation={[0, ROT_Y, 0]}>
      <group ref={ref}>
        <primitive object={model} />
      </group>
    </group>
  )
}

export default function CarScene() {
  return (
    <div className="bg-canvas">
      <Canvas
        shadows
        dpr={[1, 1.8]}
        camera={{ position: [5.2, 1.15, 5.8], fov: 36 }}
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={['#08080a']} />
        <fog attach="fog" args={['#08080a', 10, 22]} />
        <ambientLight intensity={0.4} />
        <spotLight position={[6, 8, 4]} angle={0.5} penumbra={1} intensity={2.4} castShadow color="#ffffff" />
        <pointLight position={[-6, 2, -4]} intensity={2.4} color="#8b3fd9" />
        <pointLight position={[4, 1, -5]} intensity={1.4} color="#5b8cff" />
        <Suspense fallback={null}>
          <Porsche />
          <Environment preset="night" />
        </Suspense>
        <ContactShadows position={[0, 0, 0]} opacity={0.55} scale={12} blur={2.6} far={4} color="#000000" />
      </Canvas>
    </div>
  )
}

useGLTF.preload('/models/porsche.glb')
