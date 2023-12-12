// Blog.js

import React from "react";
import { Heading } from "../components/UI Components/Headings";
import AnimatedPage from "../components/AnimatedPage";
import SwiperCard from "../components/SwiperCard";

const Blog = () => {
  // Example images, replace this with your actual image URLs
  const swiper1Images = [
    "/images/blogaanpan4.jpg",
    "/images/blogaanpan1.jpg",
    "/images/blogaanpan2.jpg",
    "images/blogaanpan3.jpg",
  ];

  const swiper2Images = [
    "/images/blogaanpan5.jpg",
    "/images/blogaanpan6.jpg",
    "/images/blogaanpan7.jpg",
    "images/blogaanpan8.jpg",
  ];

  const swiper3Images = [
    "/images/blogaanpan9.jpg",
    "/images/blogaanpan10.jpg",
    "/images/blogaanpan11.jpg",
    "images/blogaanpan12.jpg",
  ];

  const swiper4Images = [
    "/images/blogaanpan14.jpg",
    "/images/blogaanpan15.jpg",
    "images/blogaanpan16.jpg",
    "/images/blogaanpan17.jpg",
  ];

  const swiper5Images = [
    "/images/blogaanpan18.jpg",
    "/images/blogaanpan19.jpg",
    "images/blogaanpan20.jpg",
  ];

  const swiper6Images = [
    "/images/blogaanpan21.jpg",
    "/images/blogaanpan12.jpg",
    "images/blogaanpan23.jpg",
  ];

  const swiper7Images = ["images/blogaanpan24.jpg"];

  return (
    <AnimatedPage>
      <div className="relative z-20">
        <div>
          <div className="text-center w-full h-[10rem] flex justify-center items-center">
            <Heading className="text-4xl uppercase tracking-widest">
              Blog
            </Heading>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-8">
          <SwiperCard images={swiper1Images} />
          <SwiperCard images={swiper2Images} />
          <SwiperCard images={swiper3Images} />
          <SwiperCard images={swiper4Images} />
          <SwiperCard images={swiper5Images} />
          <SwiperCard images={swiper6Images} />
          <SwiperCard images={swiper7Images} />
        </div>
        <div className="text-center py-6">
          <div className="text-xl">
            For more contents, check <span></span>
            <a
              href="https://www.facebook.com/anpanofficial"
              className="text-primaryRed underline"
              target="_blank"
            >
              https://www.facebook.com/anpanofficial{" "}
            </a>
          </div>
          <div>
            <h1 className="text-2xl mt-4">More blogs uploading soon...</h1>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Blog;
