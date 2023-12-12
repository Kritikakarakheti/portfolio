import React, { useState } from "react";
import BlogSlider from "../components/UI Components/BlogSliderItem";
import { Heading } from "../components/UI Components/Headings";
import AnimatedPage from "../components/AnimatedPage";
import ParticlesComponent from "../components/ParticlesComponent";

const Projects = () => {
  return (
    <AnimatedPage>
      <div className="bg-[rgba(0,0,0,0.6)] absolute inset-0 -z-[10]">
        <ParticlesComponent />
      </div>
      <div className="bg-secondary projectFont pb-10">
        <div className=" text-center w-full h-[10rem] flex justify-center items-center">
          <Heading className="text-4xl uppercase tracking-widest">
            Projects
          </Heading>
        </div>
        <BlogSlider />
      </div>
    </AnimatedPage>
  );
};

export default Projects;
