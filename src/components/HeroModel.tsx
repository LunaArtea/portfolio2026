import { Suspense } from "react";
import { Bounds, Center, Environment, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const modelUrl = `${import.meta.env.BASE_URL}models/walle-exportado.compressed.glb`;

function WalleModel() {
  const { scene } = useGLTF(modelUrl);

  return (
    <Bounds fit clip observe margin={1.75}>
      <Center>
        <primitive object={scene} rotation={[0, -0.55, 0]} />
      </Center>
    </Bounds>
  );
}

export default function HeroModel() {
  return (
    <div className="absolute inset-[-8%] z-10 cursor-grab active:cursor-grabbing">
      <Canvas
        camera={{ position: [0, 0.7, 4.6], fov: 32 }}
        dpr={[1, 1.75]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={1.5} />
        <directionalLight position={[3, 5, 4]} intensity={2.2} />
        <directionalLight position={[-3, 2, -2]} intensity={0.7} />
        <Suspense fallback={null}>
          <WalleModel />
          <Environment preset="city" />
        </Suspense>
        <OrbitControls
          autoRotate
          autoRotateSpeed={0.75}
          enableDamping
          enablePan={false}
          enableZoom={false}
          maxPolarAngle={Math.PI / 1.7}
          minPolarAngle={Math.PI / 3.2}
          rotateSpeed={0.6}
        />
      </Canvas>
    </div>
  );
}

useGLTF.preload(modelUrl);
