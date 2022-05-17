import React from "react";
import { Animator, batch, FadeIn, MoveIn, ZoomIn } from "react-scroll-motion";
import { AiFillCode, AiOutlineHtml5 } from "react-icons/ai";
import { FaLaptop, FaPython } from "react-icons/fa";
import { SiTypescript, SiJavascript } from "react-icons/si";

const Skills = () => {
  return (
    <div style={{ pointerEvents: "none" }} className="container exp_container">
      <div className="left-side">
        <Animator
          animation={batch(ZoomIn(0.1, 1), FadeIn(0, 0.75), MoveIn(0, 1000))}
        >
          <div className="skill-box">
            <div className="skill-header">
              {" "}
              <AiFillCode className="icon" />
              <span className="skill-title">Back-End</span>
            </div>
            <div className="skill-body">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
              molestias perspiciatis nihil eveniet deserunt, repudiandae fugit
              porro modi debitis illo veniam inventore eius dicta omnis sequi
              accusantium est? Consequatur, nihil?
              <ul>
                <li className="skills-list">
                  <FaPython />
                  python
                </li>
                <li className="skills-list">
                  <SiTypescript />
                  typescript
                </li>
                <li className="skills-list">
                  <SiJavascript />
                  javascript
                </li>
              </ul>
            </div>
          </div>
        </Animator>
      </div>
      <div className="right-side">
        <Animator
          animation={batch(ZoomIn(0.1, 1), FadeIn(0, 0.75), MoveIn(0, 3000))}
        >
          <div className="skill-box">
            <div className="skill-header">
              {" "}
              <FaLaptop className="icon" />
              <span className="skill-title">Front-end</span>
            </div>
            <div className="skill-body">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit
              totam possimus voluptates voluptatum, voluptas ratione officia
              repellat distinctio, eos ipsa, autem placeat saepe perferendis
              adipisci voluptate inventore ut rem repellendus.
              <ul>
                <li className="skills-list">
                  <AiOutlineHtml5 />
                  HTML
                </li>
                <li className="skills-list">
                  <SiJavascript />
                  javascript
                </li>
                <li className="skills-list">
                  <SiTypescript />
                  typescript
                </li>
                <li className="skills-list">
                  <SiJavascript />
                  javascript
                </li>
              </ul>
            </div>
          </div>
        </Animator>
      </div>
      {/* <Animator animation={batch()}></Animator> */}
    </div>
  );
};

export default Skills;
