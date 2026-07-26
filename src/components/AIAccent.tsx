import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useTheme } from '../theme'

/*
  Acento decorativo de la sección IA: un icosaedro de alambre que gira
  lentamente con un núcleo pulsante, en el mismo lenguaje visual que el
  robot del hero. Es puramente ornamental (aria-hidden en el contenedor).
*/

function Shape({ color, reducedMotion }: { color: string; reducedMotion: boolean }) {
  const group = useRef<THREE.Group>(null)
  const core = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    const t = clock.elapsedTime
    const motion = reducedMotion ? 0 : 1
    if (group.current) {
      group.current.rotation.y = t * 0.28 * motion + 0.6
      group.current.rotation.x = Math.sin(t * 0.4) * 0.3 * motion + 0.2
      group.current.position.y = Math.sin(t * 0.9) * 0.07 * motion
    }
    if (core.current) {
      const s = 1 + Math.sin(t * 2) * 0.12 * motion
      core.current.scale.setScalar(s)
    }
  })

  return (
    <group ref={group}>
      <mesh>
        <icosahedronGeometry args={[1.25, 0]} />
        <meshBasicMaterial color={color} wireframe transparent opacity={0.55} />
      </mesh>
      <mesh ref={core}>
        <icosahedronGeometry args={[0.5, 1]} />
        <meshBasicMaterial color={color} transparent opacity={0.32} />
      </mesh>
    </group>
  )
}

export default function AIAccent() {
  const { theme } = useTheme()
  const color = theme === 'dark' ? '#fa2a2a' : '#c1281e'
  const reducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 3.6], fov: 40 }} gl={{ alpha: true }}>
      <Shape color={color} reducedMotion={reducedMotion} />
    </Canvas>
  )
}
