import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, SoftShadows, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';


const Earth = () => {

  const earth = useGLTF('./planet/scene.gltf')

  return (
    <primitive
    object={earth.scene}
    scale={1.4}
    position-y={0}
    rotation-y={0}
    />
  )
}

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameLoop='demand'
      gL={{ preserveDrawingBuffer: true }}
      camera={{ 
        fov: 45,
        near: 0.1,
        far: 200,
        postiton: [-4, 3, 6]
      }}
      >

      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls 
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}

        />

        <Earth />
      </Suspense>
    </Canvas>
  )
}

export default EarthCanvas