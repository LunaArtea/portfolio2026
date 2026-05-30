import { Suspense } from "react";
import { Bounds, Center, Environment, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const modelUrl = `${import.meta.env.BASE_URL}models/dog-compressed.glb`;

function DogModel() {
  const { scene } = useGLTF(modelUrl);

  return (
    <Bounds fit clip observe margin={1.15}>
      <Center>
        <primitive object={scene} rotation={[0, -0.25, 0]} />
      </Center>
    </Bounds>
  );
}

export default function AboutDogModel() {
  return (
    <div className="absolute inset-[-28%] z-10 cursor-grab active:cursor-grabbing">
      <Canvas
        camera={{ position: [0, 0.6, 4.2], fov: 34 }}
        dpr={[1, 1.75]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={1.7} />
        <directionalLight position={[3, 5, 4]} intensity={2.1} />
        <directionalLight position={[-3, 2, -2]} intensity={0.8} />
        <Suspense fallback={null}>
          <DogModel />
          <Environment preset="city" />
        </Suspense>
        <OrbitControls
          autoRotate
          autoRotateSpeed={0.65}
          enableDamping
          enablePan={false}
          enableZoom={false}
          maxPolarAngle={Math.PI / 1.65}
          minPolarAngle={Math.PI / 3.1}
          rotateSpeed={0.6}
        />
      </Canvas>
    </div>
  );
}

useGLTF.preload(modelUrl);
