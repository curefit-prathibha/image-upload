import { useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { useGLTF, useAnimations, useScroll, ScrollControls, SoftShadows, OrbitControls } from "@react-three/drei"
import { EffectComposer, TiltShift2 } from "@react-three/postprocessing"
// import model from './scene.gltf'
// import cartoon from './cartoon.glb'
// import MAN from './MAN(1).glb'
// import MANGLT from './MAN.gltf'
// import jump from './jump-transformed.glb'
// import ManModel from "./MAN"
// import MyModel from "./MANN"
import ModelWaving from './MAN_WAVING'
import DancingModel from './DANCE'
import LayingModel from './LAYING_DOWN'
import FlexModel from './FLEX'
import { PlaneBufferGeometry, Mesh, MeshBasicMaterial } from 'three';

// function Model(props) {
//   const scroll = useScroll()
// //   const { nodes, materials, animations } = useGLTF(cartoon)
// const gltf = useGLTF(MAN)
// //   const { ref, actions } = useAnimations(animations)
// //   useEffect(() => void (actions.jump.reset().play().paused = true), [])
// //   useFrame(() => (actions.jump.time = actions.jump.getClip().duration * scroll.offset))
//   return (
//     // <group {...props} ref={ref}>
//     //   <primitive object={nodes.mixamorigHips} />
//     //   <skinnedMesh castShadow receiveShadow geometry={nodes.Ch03.geometry} material={materials.Ch03_Body} skeleton={nodes.Ch03.skeleton} />
//     // </group>
//     <primitive object={gltf.scene} scale={0.3} />
//   )
// }

const LayingAvatar = () => (
  <Canvas shadows>
    {/* <color attach="background" args={["#f0f0f0"]} />
    <fog attach="fog" args={["#f0f0f0", 0, 20]} /> */}
    <ambientLight color={0xffffff} intensity={3} />
    <directionalLight position={[-5, 5, 5]} castShadow shadow-mapSize={1024} />
    {/* <ScrollControls damping={0.2} maxSpeed={0.5} pages={2}> */}
    <group position={[0, 1, 0]} scale={0.9}>
        {/* <DancingModel /> */}
        <LayingModel />
        {/* <ModelWaving /> */}
        {/* <FlexModel /> */}
        </group>
      {/* <Model /> */}
      {/* <Model /> */}
    {/* </ScrollControls> */}
    <OrbitControls />
    <mesh position={[0, -1.01, 0]} receiveShadow>
    {/* <planeBufferGeometry args={[10, 10, 1, 1]} /> */}
    <shadowMaterial transparent opacity={0.4} />
    </mesh>
    {/* <SoftShadows size={40} samples={16} />
    <EffectComposer disableNormalPass multisampling={4}>
      <TiltShift2 blur={1} />
    </EffectComposer> */}
  </Canvas>
)

export default LayingAvatar
