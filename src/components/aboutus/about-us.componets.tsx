import React from "react";
import {
  Animator,
  batch,
  FadeIn,
  MoveIn,
  StickyIn,
  ZoomIn,
} from "react-scroll-motion";

import phoneCase from "assets/images/phone-case.webp";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const AboutUs = () => {
  return (
    <Animator animation={batch(FadeIn(0, 0.75), MoveIn(), StickyIn(50, 40))}>
      <div className="container">
        <Animator animation={batch(ZoomIn(0.7, 1), FadeIn(0, 1))}>
          <div className="about-us">
            <div className="about-us_content ">
              <h1 className="title">About Us</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Nesciunt fuga distinctio doloribus obcaecati numquam rerum.
                Cupiditate cum esse consequuntur incidunt voluptatum? Vel
                laboriosam modi molestiae natus dignissimos nihil praesentium
                odit!lorem, Lorem ipsum, dolor sit amet consectetur adipisicing
                elit. Nesciunt fuga distinctio doloribus obcaecati numquam
                rerum. Cupiditate cum esse consequuntur incidunt voluptatum? Vel
                laboriosam modi molestiae natus dignissimos nihil praesentium
                odit!lorem
              </p>
              <div className="about__cards" style={{ pointerEvents: "auto" }}>
                <Animator animation={MoveIn(-5000, 0)}>
                  <article className="about__card">
                    <FaAward className="about__icon" />
                    <h5>Experience</h5>

                    <small>3+ Years working</small>
                  </article>
                </Animator>
                <Animator animation={ZoomIn(0, 1)}>
                  <article className="about__card">
                    <FiUsers className="about__icon" />
                    <h5>Clients</h5>

                    <small>200_ worldwide</small>
                  </article>
                </Animator>
                <Animator animation={MoveIn(5000, 0)}>
                  <article className="about__card">
                    <VscFolderLibrary className="about__icon" />
                    <h5>Projects</h5>

                    <small>80+ Completed Projects</small>
                  </article>
                </Animator>
              </div>
            </div>
          </div>
        </Animator>
        <Animator
          animation={batch(
            FadeIn(1, 0.75),

            StickyIn(50, 60)
          )}
        >
          <div className="phone_case_container">
            <picture>
              <source srcSet={phoneCase} type="image/webp" />
              <img src={phoneCase} alt="" className="phone_case" />
            </picture>
          </div>
        </Animator>
      </div>
    </Animator>
  );
};

export default AboutUs;
