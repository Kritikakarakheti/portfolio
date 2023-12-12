import React from "react";
import Header from "./header/Header";
import Typewriter from "./Typewriter";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import bgImage from "../assets/image/backgroundImage.jpg";
import ContactUs from "../pages/Contact";
import ContentTabbing from "./ContentTabbing";
import ParticlesComponent from "./ParticlesComponent";

const Hero = () => {
  const dynamicTextArray = [
    "This is the first dynamic text.",
    "This is the second dynamic text.",
    "And this is the third dynamic text.",
  ];

  const backgroundImage_ = {
    backgroundImage: `url(${bgImage})`,
    backgroundPosition: "center",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  };

  return (
    <>
      <div className="w-full h-[100vh] sm:h-[100vh] flex justify-center items-center overflow-hidden">
        <div
          style={backgroundImage_}
          className="absolute w-full h-[100vh] inset-0 overflow-hidden"
        >
          {" "}
          <div className="relative z-[10]">
            <ParticlesComponent />
          </div>
        </div>
        <div className="absolute  overflow-hidden bg-[rgba(0,0,0,0.6)] inset-0 z-10"></div>
        {/* Header */}
        <div className="relative z-20">{/* <Header /> */}</div>
        {/* introduction in the middle */}
        <div className=" w-full text-center space-y-10 mt-20 relative z-10">
          {/* profile image */}
          {/* <div className="flex justify-center">
            <img
              loading="lazy"
              className="border-4 border-solid border-[white] w-52 h-52 object-cover rounded-full"
              src="https://img.freepik.com/premium-photo/young-smart-indian-businesswoman-smiling-face-standing-blur-background-modern-office-building-generative-ai-aig20_31965-117685.jpg"
              alt=""
            />
          </div> */}

          {/* introduction */}
          <div className="">
            <h1 className="text-4xl font-semibold">Home</h1>
          </div>

          {/* typewriter */}
          {/* <div className="">
            <Typewriter
              textArray={dynamicTextArray}
              speed={60} // Adjust the speed here
              textColor="#e31b6d"
            />
          </div> */}

          {/* arrow down */}
          <div className="w-full flex justify-center text-4xl animate-bounce">
            <a href="#kritika" className="animate-bounce">
              <i class="fa-solid fa-angles-down fa-bounce"></i>
            </a>
          </div>
        </div>
        {/*  */}
      </div>
      <span id="kritika" />
      <div className="bg-[rgba(0,0,0,0.6)] relative z-50">
        <div className="w-[70%]  rounded-2xl border m-auto p-4">
          <div className="flex justify-between w-full items-center">
            <div className="w-[80%] ">
              <img
                src="/images/introKK.png"
                className="w-[20rem] h-[29rem] rounded-3xl m-auto"
                alt=""
              />
            </div>

            <div>
              <h1 className="text-6xl mb-9 text-blue-300 font-bold">
                Kritika Karakheti
              </h1>
              <div className="pt-3 text-xl select-none">
                <p className="italic text-2xl ">
                  “A drifting particle of consciousness, navigating the
                  intricate synaptic pathways of the human brain, fueled by an
                  ardent love for neuroscience.”
                </p>
                <br />
                <p className="text-lg mt-8 text-red-300">
                  Together, we can further unravel the enigma of the brain,
                  ultimately contributing to a brighter and more emotionally
                  intelligent world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[rgba(0,0,0,0.6)] relative z-30">
        <ContentTabbing />
      </div>
      <ContactUs />
    </>
  );
};

export default Hero;
