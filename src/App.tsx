import { Html, useProgress } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Header from "components/homepage/Header";
import { Suspense, useEffect } from "react";
import { BsMouse } from "react-icons/bs";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import {
  Animator,
  batch,
  Fade,
  FadeIn,
  FadeOut,
  Move,
  MoveIn,
  MoveOut,
  ScrollContainer,
  ScrollPage,
  Sticky,
  ZoomIn,
  ZoomOut,
  StickyIn,
  Zoom,
} from "react-scroll-motion";
import "assets/css/about-us.scss";
import "assets/css/exprei.scss";

import phoneCase from "assets/images/phone-case.webp";
import AboutUs from "components/aboutus/about-us.componets";
import Skills from "components/expreiencc/skills.componet";

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html>
      <div>
        <div className="percent">
          <div className="number">
            <h3>
              {progress}
              <span>%</span>
            </h3>
          </div>
        </div>
      </div>
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
        <div style={{ pointerEvents: "none" }}>
          <Animator
            animation={batch(
              FadeIn(0, 0.95),

              Sticky()
            )}
          >
            <div className="container">
              <picture>
                <source srcSet={phoneCase} type="image/webp" />
                <img src={phoneCase} alt="" className="phone_case" />
              </picture>
            </div>
          </Animator>
        </div>
      </ScrollPage>
      <ScrollPage page={2}>
        <div style={{ pointerEvents: "none" }}>
          <AboutUs />
        </div>
      </ScrollPage>
      <ScrollPage page={3}>
        <Skills />
      </ScrollPage>
    </ScrollContainer>
  );
}

export default App;
