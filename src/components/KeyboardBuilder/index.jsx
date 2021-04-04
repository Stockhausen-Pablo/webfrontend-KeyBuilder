import React, { Suspense, useRef, useState, useEffect } from 'react'
import {withStyles} from '@material-ui/core';
import styles from './styles'

import { Canvas, useFrame } from 'react-three-fiber'
import { ContactShadows, Environment, useGLTF, OrbitControls } from '@react-three/drei';
import { proxy, useProxy } from 'valtio'
import { HexColorPicker } from 'react-colorful'

const state = proxy({
  current: null,
  items: {
    laces: '#ffffff',
    mesh: '#ffffff',
    caps: '#ffffff',
    inner: '#ffffff',
    sole: '#ffffff',
    stripes: '#ffffff',
    band: '#ffffff',
    patch: '#ffffff',
  },
})

function Keyboard({url}) {
  const mesh = useRef();
  const gltf = useGLTF(url, true);

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    mesh.current.rotation.z = -0.2 - (1 + Math.sin(t / 1.5)) / 20
    mesh.current.rotation.x = Math.cos(t / 4) / 8
    mesh.current.rotation.y = Math.sin(t / 4) / 8
    mesh.current.position.y = (1 + Math.sin(t / 1.5)) / 10
  })

  return (
    <mesh
      ref={mesh}
    >
      <primitive
        dispose={null}
        object={gltf.scene}
      />
    </mesh>
  )
}


const KeyboardBuilder = (props) => {
  return(
    <Canvas
      camera={{ position: [0, 0, 2.75] }}
      concurrent
      pixelRatio={[1, 2]}
    >
      <ambientLight intensity={0.3} />
      <spotLight
        angle={0.1}
        intensity={0.3}
        penumbra={1}
        position={[5, 25, 20]}
      />
      <Suspense fallback={null}>
        <Keyboard url={'/bamboo_case.glb'}/>
        <ContactShadows
          blur={2}
          far={1}
          height={10}
          opacity={0.25}
          position={[0, -0.8, 0]}
          rotation-x={Math.PI / 2}
          width={10}
        />
      </Suspense>
      <OrbitControls
        autoRotate
        enablePan={false}
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
    </Canvas>
  )
}

export default withStyles(styles)(KeyboardBuilder);