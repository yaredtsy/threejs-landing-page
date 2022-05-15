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
} from "react-scroll-motion";
import "assets/css/about-us.scss";
import phoneCase from "assets/images/phone-case.webp";

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
          <Animator animation={batch(Fade(0, 0.75), Move(), Sticky(50, 40))}>
            <div className="container">
              <Animator
                animation={batch(
                  FadeIn(1, 0.75),

                  Sticky(50, 60)
                )}
              >
                <div className="phone_case_container">
                  <picture>
                    <source srcSet={phoneCase} type="image/webp" />
                    <img src={phoneCase} alt="" className="phone_case" />
                  </picture>
                </div>
              </Animator>
              <Animator
                animation={batch(ZoomIn(0.7, 1), FadeIn(0, 1), FadeOut(1, 0.5))}
              >
                <div className="about-us">
                  <div className="content">
                    <h1 className="title">About Us</h1>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Nesciunt fuga distinctio doloribus obcaecati numquam
                      rerum. Cupiditate cum esse consequuntur incidunt
                      voluptatum? Vel laboriosam modi molestiae natus
                      dignissimos nihil praesentium odit!lorem, Lorem ipsum,
                      dolor sit amet consectetur adipisicing elit. Nesciunt fuga
                      distinctio doloribus obcaecati numquam rerum. Cupiditate
                      cum esse consequuntur incidunt voluptatum? Vel laboriosam
                      modi molestiae natus dignissimos nihil praesentium
                      odit!lorem
                    </p>
                  </div>
                </div>
              </Animator>
            </div>
          </Animator>
        </div>
      </ScrollPage>
    </ScrollContainer>
  );
}

export default App;
