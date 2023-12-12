import React from "react";
import { Heading } from "../components/UI Components/Headings";
import AnimatedPage from "../components/AnimatedPage";
import GalleryCard from "../components/GalleryCard";

const Gallary = () => {
  return (
    <AnimatedPage>
      <div>
        <div className=" text-center w-full h-[10rem] flex justify-center items-center">
          <Heading className="text-4xl uppercase tracking-widest">
            Gallery
          </Heading>
        </div>
        <div>
          <GalleryCard />
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Gallary;
