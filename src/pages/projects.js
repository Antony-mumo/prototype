import React from "react";
import Projects from "../components/Projects";
import { homeObjProject } from "../components/Projects/Data";
import ScrollToTop from "../components/Projects/ScrollToTop";

const ProjectPage = () => {
  return (
    <>
      <ScrollToTop />
      <Projects {...homeObjProject} />
    </>
  );
};

export default ProjectPage;
