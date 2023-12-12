import React from "react";
import { Heading } from "../components/UI Components/Headings";
import AnimatedPage from "../components/AnimatedPage";
import CV from "./CV";
import ParticlesComponent from "../components/ParticlesComponent";

const Biography = () => {
  return (
    <>
      <AnimatedPage>
        <div className="bg-[rgba(0,0,0,0.6)] absolute inset-0 -z-[10]">
          <ParticlesComponent />
        </div>
        <div className="h-[100vh] flex items-center justify-between gap-9 w-[80%] m-auto text-primary relative z-30">
          <div className="">
            <img
              src="/images/biography.jpg"
              className="w-[30rem] h-[30rem] rounded-full object-cover"
              alt=""
            />
            <h1 className="text-center mt-5 text-2xl">Me during hike</h1>
          </div>
          <div className="w-[80%] m-auto">
            <div className="uppercase mb-3   text-blue-300 font-bold">
              <Heading className="text-left">About me</Heading>
            </div>
            {/* <div className='w-24 h-24 bg-orange-500'>
                    <span className="loader">d</span>
                </div> */}
            {/* about me introduction text */}
            <div className="text-lg mb-5 text-justify">
              <p>
                A recent high school graduate, driven by an unquenchable thirst
                for knowledge, perpetually exploring opportunities to expand the
                understanding. Demonstrated diligence and a collaborative
                spirit- from organizing major events to working in various
                research endeavors. Possessing a natural affinity for leadership
                and a steadfast commitment to excellence coupled with
                organizational and communication skills. Enthusiastic about
                directing the passion for biology and psychology toward the role
                of Student Researcher.
              </p>
            </div>
          </div>
        </div>
        {/*  */}
        <div>
          <CV />
        </div>
      </AnimatedPage>
    </>
  );
};

export default Biography;
