import React from "react";
import { Heading } from "../components/UI Components/Headings";
import AnimatedPage from "../components/AnimatedPage";
import { MdOutlineMail } from "react-icons/md";
import { researchData } from "../data/researchData";
import ParticlesComponent from "../components/ParticlesComponent";

const Research = () => {
  const openPdfInNewTab = (researchItem) => {
    window.open(researchItem.pdfUrl, "_blank");
  };
  return (
    <AnimatedPage>
      <div className="bg-[rgba(0,0,0,0.6)] absolute inset-0 -z-[10]">
        <ParticlesComponent />
      </div>
      <div>
        <div className="w-full h-28 flex justify-center items-center text-4xl font-semibold">
          <div className=" text-center w-full h-[10rem] flex justify-center items-center">
            <Heading className="text-4xl uppercase tracking-widest">
              Research
            </Heading>
          </div>
        </div>
        {/*  */}
        <div>
          <div className="text-center text-xl ">
            <h1>Research Works</h1>
          </div>
          {/* cards */}
          <div className="relative z-[10] space-y-5 w-[90%] m-auto">
            <div className="p-2">
              {researchData.map((researchItem) => (
                <div
                  className="mt-12 bg-secondaryDark p-4 rounded-xl"
                  key={researchItem.id}
                >
                  <div className="text-center pt-2 pb-4">
                    <h1 className="text-2xl italic">
                      {researchItem.researchTitle}
                    </h1>
                  </div>
                  <div className="flex items-start justify-between">
                    <div className="flex">
                      <img
                        className="w-[68rem] h-[30rem] object-cover"
                        src={researchItem.researchImage}
                        alt=""
                      />
                    </div>
                    <div className="w-[100%] pl-6 space-y-3">
                      <h3 className="text-xl underline underline-offset-4">
                        Abstract
                      </h3>
                      <p>{researchItem.researchDescription}</p>
                      <div className="border p-4 w-[60%] text-white flex items-center gap-x-3 pt-2 pb-2 pl-4 pr-4">
                        <div className="w-[6rem]">
                          <img
                            src="https://play-lh.googleusercontent.com/BkRfMfIRPR9hUnmIYGDgHHKjow-g18-ouP6B2ko__VnyUHSi1spcc78UtZ4sVUtBH4g"
                            alt=""
                            className="w-full"
                          />
                        </div>
                        <div className="">
                          <div
                            onClick={() => openPdfInNewTab(researchItem)}
                            className="inline-flex gap-x-3 cursor-pointer text-xl items-center bg-primaryBlue py-2 px-5"
                          >
                            <span>
                              <MdOutlineMail className="text-2xl" />
                            </span>
                            <button>Read full-text PDF</button>
                          </div>
                          <div className="pt-3">
                            To read the full-text of this research, you can
                            click here.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Research;
