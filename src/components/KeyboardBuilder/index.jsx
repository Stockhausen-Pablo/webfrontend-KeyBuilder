import React, { Suspense, useRef} from 'react'
import {withStyles} from '@material-ui/core';
import styles from './styles'

import { Canvas, useFrame } from '@react-three/fiber'
import { ContactShadows, useGLTF, OrbitControls } from '@react-three/drei';
import { proxy } from 'valtio'
import classNames from 'classnames';
import PropTypes from 'prop-types';


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
    mesh.current.position.y = (1 + Math.sin(t / 0.5)) / 10
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


function KeyboardBuilder(props){

  const {classes, className, selectedCase} = props;

  const rootClassName = classNames(classes.root, className);

  return(
    <div className={classNames(rootClassName, classes.canvas)}>
      {selectedCase &&
      <Canvas
        camera={{position: [0, 0, 2.75]}}
        concurrent
        pixelRatio={[1, 2]}
      >
        <ambientLight intensity={0.3}/>
        <spotLight
          angle={0.1}
          intensity={0.3}
          penumbra={3}
          position={[5, 25, 20]}
        />
        <Suspense fallback={null}>
          <Keyboard
            url={selectedCase.modelname}
          />
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
          enableZoom={true}
          maxAzimuthAngle={Math.PI / 2}
          maxPolarAngle={Math.PI}
          minAzimuthAngle={-Math.PI / 2}
          minPolarAngle={0}
        />
      </Canvas>
      }
    </div>
  )
}

KeyboardBuilder.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  selectedCase: PropTypes.object.isRequired,
}

export default withStyles(styles)(KeyboardBuilder);