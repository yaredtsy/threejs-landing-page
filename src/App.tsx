import { Html, useProgress } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Header from "components/Header";
import { Suspense } from "react";
import { BsMouse } from "react-icons/bs";
import {
  Animator,
  batch,
  Fade,
  FadeIn,
  Move,
  MoveIn,
  MoveOut,
  ScrollContainer,
  ScrollPage,
  Sticky,
  ZoomIn,
  ZoomOut,
} from "react-scroll-motion";
import "assets/css/about-us.scss";

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
    <ScrollContainer>
      <ScrollPage page={0}>
        <Animator animation={batch(Fade(), Sticky(), MoveIn(0, -400))}>
          <div className="header_container">
            <Canvas camera={{ position: [0, 0, 5], fov: 70 }}>
              <color attach="background" args={["#000"]} />
              <Suspense fallback={<Loader />}>
                <Header />
              </Suspense>
              <ambientLight intensity={0.4} />
            </Canvas>
            <div className="header_scroll_content">
              <span className="h2">
                <BsMouse />
              </span>
              <p>scoll up</p>
            </div>
          </div>
        </Animator>
      </ScrollPage>
      <ScrollPage page={1}>
        <Animator animation={batch(Fade(), Move(), Sticky())}>
          <div className="container">
            <Animator animation={MoveIn(-500, 0)}>About</Animator>
            <Animator animation={MoveIn(500, 0)}> Us</Animator>
          </div>
        </Animator>
      </ScrollPage>
      <ScrollPage page={2}>
        <Animator animation={batch(Fade(), Move(), Sticky())}>
          <div className="container">
            <Animator animation={ZoomIn()}>Our Work</Animator>
          </div>
        </Animator>
      </ScrollPage>
    </ScrollContainer>
  );
}

export default App;
