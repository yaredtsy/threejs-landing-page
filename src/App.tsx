import { Html, useProgress } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Header from "components/Header";
import React, { Suspense } from "react";

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html>
      <span style={{ color: "#FFF" }}> {progress} %loaded</span>
    </Html>
  );
};
function App() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 70 }}>
      <color attach="background" args={["#000"]} />
      <Suspense fallback={<Loader />}>
        <Header />
      </Suspense>
      <ambientLight intensity={0.4} />
    </Canvas>
  );
}

export default App;
