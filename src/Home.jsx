import * as THREE from 'three'
import { useEffect, useRef, useState } from 'react'
import { Canvas, extend, useThree, useFrame } from '@react-three/fiber'
import { useGLTF, useTexture, Environment, Lightformer, Text } from '@react-three/drei'
import { BallCollider, CuboidCollider, Physics, RigidBody, useRopeJoint, useSphericalJoint } from '@react-three/rapier'
import { MeshLineGeometry, MeshLineMaterial } from 'meshline'
import { Link } from 'react-router-dom'
import tagModel from './assets/scene.glb'
import bandTexture from './assets/bandd.png'
import Navbar from './Navbar'

extend({ MeshLineGeometry, MeshLineMaterial })
useGLTF.preload(tagModel)
useTexture.preload(bandTexture)

export default function App() {
  const isMobile = window.innerWidth <= 768
  

  
  return (
    <>
  <Navbar />
      
      <Canvas camera={{ position: isMobile ? [0, 0, 15] : [0, 0, 13], fov: 25 }}>
        <color attach="background" args={['#000000']} />
      
        <ambientLight intensity={1.2} />
      
        <Physics interpolate gravity={[0, -40, 0]} timeStep={1 / 60}>
          <Band isMobile={isMobile} />
        </Physics>
      
        <Environment blur={0.75}>
          <Lightformer intensity={2} color="white" position={[0, -1, 5]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
          <Lightformer intensity={3} color="white" position={[-1, -1, 1]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
          <Lightformer intensity={3} color="white" position={[1, 1, 1]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
          <Lightformer intensity={8} color="white" position={[-10, 0, 14]} rotation={[0, Math.PI / 2, Math.PI / 3]} scale={[100, 10, 1]} />
        </Environment>
      </Canvas>

      <main className="info-container">
         <p className="intro">Hi! I'm</p>
        <h1>Lucia Garcia</h1>
        <p className="subtitle">Software Developer & UX/UI Designer</p>
        <Link to="/portfolio" className="portfolio-button">
         VER PORTFOLIO
        </Link>
      </main>
    </>
  )
}

function Band({ maxSpeed = 50, minSpeed = 10, isMobile }) {
  const band = useRef(), fixed = useRef(), j1 = useRef(), j2 = useRef(), j3 = useRef(), card = useRef()
  const vec = new THREE.Vector3(), ang = new THREE.Vector3(), rot = new THREE.Vector3(), dir = new THREE.Vector3()
  const segmentProps = { type: 'dynamic', canSleep: true, colliders: false, angularDamping: 4, linearDamping: 4 }
  const { nodes, materials } = useGLTF(tagModel)
  const texture = useTexture(bandTexture)
  const { width, height } = useThree((state) => state.size)
  const [curve] = useState(() => new THREE.CatmullRomCurve3([new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()]))
  const [dragged, drag] = useState(false)
  const [hovered, hover] = useState(false)

  // Rotación inicial para móviles
  useEffect(() => {
    if (isMobile && card.current) {
      // Quaternion para rotar 180° en Y: (x=0, y=1, z=0, w=0)
      card.current.setRotation({ x: 0, y: 1, z: 0, w: 0 }, true)
    }
  }, [isMobile])

  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1])
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1])
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1])
  useSphericalJoint(j3, card, [[0, 0, 0], [0, 1.45, 0]])

  useEffect(() => {
    if (hovered) {
      document.body.style.cursor = dragged ? 'grabbing' : 'grab'
      return () => void (document.body.style.cursor = 'auto')
    }
  }, [hovered, dragged])

  useFrame((state, delta) => {
    if (dragged) {
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera)
      dir.copy(vec).sub(state.camera.position).normalize()
      vec.add(dir.multiplyScalar(state.camera.position.length()))
      ;[card, j1, j2, j3, fixed].forEach((ref) => ref.current?.wakeUp())
      card.current?.setNextKinematicTranslation({ x: vec.x - dragged.x, y: vec.y - dragged.y, z: vec.z - dragged.z })
    }

    if (fixed.current) {
      ;[j1, j2].forEach((ref) => {
        if (!ref.current.lerped) ref.current.lerped = new THREE.Vector3().copy(ref.current.translation())
        const clampedDistance = Math.max(0.1, Math.min(1, ref.current.lerped.distanceTo(ref.current.translation())))
        ref.current.lerped.lerp(ref.current.translation(), delta * (minSpeed + clampedDistance * (maxSpeed - minSpeed)))
      })

      curve.points[0].copy(j3.current.translation())
      curve.points[1].copy(j2.current.lerped)
      curve.points[2].copy(j1.current.lerped)
      curve.points[3].copy(fixed.current.translation())
      band.current.geometry.setPoints(curve.getPoints(32))

      ang.copy(card.current.angvel())
      rot.copy(card.current.rotation())
      card.current.setAngvel({ x: ang.x, y: ang.y - rot.y * 0.25, z: ang.z })
    }
  })

  curve.curveType = 'chordal'
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping


  return (
    <>
      <group position={[isMobile ? 1.2 : 1.5, isMobile ? 3.5 : 4, 0]}>
        <RigidBody ref={fixed} {...segmentProps} type="fixed" />
        <RigidBody position={[0.5, 0, 0]} ref={j1} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1, 0, 0]} ref={j2} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1.5, 0, 0]} ref={j3} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
      <RigidBody
  ref={card}
  {...segmentProps}
  type={dragged ? 'kinematicPosition' : 'dynamic'}
  position={[2, 0, 0]}
>
          <CuboidCollider args={[0.8, 1.125, 0.01]} />
          <group
            scale={isMobile ? 2.2 : 2.25}
            position={[0, -1.2, -0.05]}
            rotation={[0, Math.PI, 0]} // <- esto voltea la tarjeta
            onPointerOver={() => hover(true)}
            onPointerOut={() => hover(false)}
            onPointerUp={(e) => (e.target.releasePointerCapture(e.pointerId), drag(false))}
            onPointerDown={(e) => (e.target.setPointerCapture(e.pointerId), drag(new THREE.Vector3().copy(e.point).sub(vec.copy(card.current.translation()))))}
          >
            <mesh geometry={nodes.card.geometry}>
            <meshPhysicalMaterial
                  map={materials.base.map}
                  roughness={0.45}
                  metalness={0.25}
                  clearcoat={0.6}
                  clearcoatRoughness={0.3}
                />
            </mesh>
            <mesh geometry={nodes.clip.geometry} material={materials.metal} material-roughness={0.3} />
            <mesh geometry={nodes.clamp.geometry} material={materials.metal} />
          </group>
        </RigidBody>
      </group>

      <mesh ref={band}>
        <meshLineGeometry />
      <meshLineMaterial
          color="white"
          useMap
          map={texture}
          repeat={[-3, 1]}
          lineWidth={0.6}
          depthTest={false}
          resolution={[width, height]}
        />
      </mesh>
    </>
  )
}
