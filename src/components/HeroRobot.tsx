import { useEffect, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { RoundedBox } from '@react-three/drei'
import * as THREE from 'three'

/*
  Mascota 3D del hero: un robot estilizado en los colores de la marca
  que simboliza la inteligencia artificial. Flota, parpadea y sigue el
  cursor con la mirada. Vive únicamente en la sección de inicio para
  no interferir con la lectura del resto de la página.
*/

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t
}

function Robot({ reducedMotion }: { reducedMotion: boolean }) {
  const group = useRef<THREE.Group>(null)
  const head = useRef<THREE.Group>(null)
  const eyeL = useRef<THREE.Mesh>(null)
  const eyeR = useRef<THREE.Mesh>(null)
  const coreMat = useRef<THREE.MeshStandardMaterial>(null)
  const tipMat = useRef<THREE.MeshStandardMaterial>(null)
  const armL = useRef<THREE.Group>(null)
  const armR = useRef<THREE.Group>(null)
  const ring = useRef<THREE.Mesh>(null)
  const pointer = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const onPointer = (e: PointerEvent) => {
      pointer.current.x = (e.clientX / window.innerWidth - 0.5) * 2
      pointer.current.y = (e.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener('pointermove', onPointer, { passive: true })
    return () => window.removeEventListener('pointermove', onPointer)
  }, [])

  useFrame(({ clock }) => {
    const t = clock.elapsedTime
    const motion = reducedMotion ? 0 : 1

    if (group.current) {
      group.current.position.y = Math.sin(t * 1.1) * 0.09 * motion
      group.current.rotation.y = Math.sin(t * 0.35) * 0.08 * motion
    }

    // la cabeza sigue al cursor
    if (head.current) {
      head.current.rotation.y = lerp(head.current.rotation.y, pointer.current.x * 0.5 * motion, 0.06)
      head.current.rotation.x = lerp(head.current.rotation.x, pointer.current.y * 0.28 * motion, 0.06)
    }

    // parpadeo periódico
    const bt = t % 3.8
    const closed = motion === 1 && bt > 3.55 && bt < 3.72
    const targetScale = closed ? 0.1 : 1
    if (eyeL.current) eyeL.current.scale.y = lerp(eyeL.current.scale.y, targetScale, 0.45)
    if (eyeR.current) eyeR.current.scale.y = lerp(eyeR.current.scale.y, targetScale, 0.45)

    // pulso del núcleo y la antena
    const pulse = (Math.sin(t * 2.2) + 1) / 2
    if (coreMat.current) coreMat.current.emissiveIntensity = 0.8 + pulse * 1.1 * motion
    if (tipMat.current) tipMat.current.emissiveIntensity = 0.8 + (1 - pulse) * 1.1 * motion

    // balanceo sutil de brazos
    if (armL.current) armL.current.rotation.z = 0.1 + Math.sin(t * 1.1 + 1) * 0.07 * motion
    if (armR.current) armR.current.rotation.z = -0.1 - Math.sin(t * 1.1) * 0.07 * motion

    // halo de la base
    if (ring.current) {
      const s = 1 + Math.sin(t * 1.1) * 0.05 * motion
      ring.current.scale.set(s, s, 1)
    }
  })

  return (
    <group ref={group} position={[0, 0.15, 0]}>
      {/* cabeza */}
      <group ref={head} position={[0, 0.62, 0]}>
        <RoundedBox args={[1.5, 1.12, 1.05]} radius={0.22} smoothness={6}>
          <meshStandardMaterial color="#2c2c33" metalness={0.65} roughness={0.32} />
        </RoundedBox>
        <RoundedBox args={[1.06, 0.6, 0.12]} radius={0.08} smoothness={4} position={[0, 0, 0.52]}>
          <meshStandardMaterial color="#0e0e12" metalness={0.3} roughness={0.55} />
        </RoundedBox>
        {/* ojos */}
        <mesh ref={eyeL} position={[-0.26, 0.02, 0.6]}>
          <capsuleGeometry args={[0.07, 0.14, 6, 12]} />
          <meshStandardMaterial color="#ff4438" emissive="#fa2a2a" emissiveIntensity={1.8} roughness={0.3} />
        </mesh>
        <mesh ref={eyeR} position={[0.26, 0.02, 0.6]}>
          <capsuleGeometry args={[0.07, 0.14, 6, 12]} />
          <meshStandardMaterial color="#ff4438" emissive="#fa2a2a" emissiveIntensity={1.8} roughness={0.3} />
        </mesh>
        {/* antena */}
        <mesh position={[0, 0.72, 0]}>
          <cylinderGeometry args={[0.025, 0.035, 0.3, 10]} />
          <meshStandardMaterial color="#3d3d45" metalness={0.7} roughness={0.3} />
        </mesh>
        <mesh position={[0, 0.94, 0]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial ref={tipMat} color="#ff4438" emissive="#fa2a2a" emissiveIntensity={1.2} roughness={0.35} />
        </mesh>
        {/* laterales */}
        <mesh position={[-0.8, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.16, 0.16, 0.14, 16]} />
          <meshStandardMaterial color="#3d3d45" metalness={0.7} roughness={0.3} />
        </mesh>
        <mesh position={[0.8, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.16, 0.16, 0.14, 16]} />
          <meshStandardMaterial color="#3d3d45" metalness={0.7} roughness={0.3} />
        </mesh>
      </group>

      {/* cuello */}
      <mesh position={[0, -0.05, 0]}>
        <cylinderGeometry args={[0.16, 0.2, 0.22, 14]} />
        <meshStandardMaterial color="#3d3d45" metalness={0.7} roughness={0.3} />
      </mesh>

      {/* torso */}
      <group position={[0, -0.75, 0]}>
        <RoundedBox args={[1.12, 1.0, 0.78]} radius={0.18} smoothness={6}>
          <meshStandardMaterial color="#2c2c33" metalness={0.65} roughness={0.32} />
        </RoundedBox>
        {/* núcleo de energía */}
        <mesh position={[0, 0.08, 0.4]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.15, 0.15, 0.05, 24]} />
          <meshStandardMaterial ref={coreMat} color="#ff4438" emissive="#fa2a2a" emissiveIntensity={1.2} roughness={0.35} />
        </mesh>
        <mesh position={[0, 0.08, 0.38]}>
          <torusGeometry args={[0.21, 0.025, 10, 28]} />
          <meshStandardMaterial color="#3d3d45" metalness={0.7} roughness={0.3} />
        </mesh>
      </group>

      {/* brazos */}
      <group ref={armL} position={[-0.72, -0.42, 0]}>
        <mesh position={[0, -0.32, 0]}>
          <capsuleGeometry args={[0.09, 0.42, 6, 12]} />
          <meshStandardMaterial color="#33333b" metalness={0.6} roughness={0.35} />
        </mesh>
      </group>
      <group ref={armR} position={[0.72, -0.42, 0]}>
        <mesh position={[0, -0.32, 0]}>
          <capsuleGeometry args={[0.09, 0.42, 6, 12]} />
          <meshStandardMaterial color="#33333b" metalness={0.6} roughness={0.35} />
        </mesh>
      </group>

      {/* halo flotante bajo el robot */}
      <mesh ref={ring} position={[0, -1.62, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.42, 0.62, 40]} />
        <meshBasicMaterial color="#fa2a2a" transparent opacity={0.18} side={THREE.DoubleSide} />
      </mesh>
    </group>
  )
}

export default function HeroRobot() {
  const reducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0, 5.1], fov: 40 }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
    >
      <ambientLight intensity={0.55} />
      <directionalLight position={[3, 4, 5]} intensity={1.35} />
      <pointLight position={[-3.5, -1, -2]} intensity={26} color="#fa2a2a" distance={12} />
      <pointLight position={[0, 2.5, 3.5]} intensity={8} color="#ffffff" distance={10} />
      <Robot reducedMotion={reducedMotion} />
    </Canvas>
  )
}
