import React, { Fragment } from "react";
import WorkExperience from "./WorkExperience";
import Expertise from "./Expertise";
import Bio from "./Bio";
import SectionTitle from "../common/SectionTitle";
import Contact from "./Contact";
import Welcome from "./Welcome";
import Navigation from "./Navigation";
import Legal from "./Legal";
import ScrollToTop from "react-scroll-up";
import arrowUp from "../assets/up_arrow_round.png";

const ScrollToTopCustomStyles = {
  position: "fixed",
  bottom: 50,
  right: 30,
  cursor: "pointer",
  transitionDuration: "0.2s",
  transitionTimingFunction: "linear",
  transitionDelay: "0s",
  zIndex: 99999
};

const contentWrapper = {
  overflowY: "scroll",
  height: " 100vh",
  overflowX: "hidden"
};

export default function Layout() {
  return (
    <Fragment>
      <Navigation />
      <ScrollToTop showUnder={160} style={ScrollToTopCustomStyles}>
        <div>
          <img src={arrowUp} alt="" title="Scroll up" />
        </div>
      </ScrollToTop>
      <div style={contentWrapper}>
        <Welcome />
        <Bio />
        <SectionTitle
          title="EXPERTISE"
          description="Skills I am good at but not limited to."
          id="expertise-section"
        />
        <Expertise />
        <SectionTitle
          title="WORK"
          description="Companies and People I worked with."
          id="work-section"
        />
        <WorkExperience />
        <SectionTitle
          title="FIND ME"
          description="Available to talk and collaborate about work."
          id="findme-section"
        />
        <Contact />
        <Legal />
      </div>
    </Fragment>
  );
}
