import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import AnimatedMenu from "../UI Components/AnimatedMenu";

const Header = () => {
  // scroll down = header color change
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    window.scrollY > 10 ? setScrolling(true) : setScrolling(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const headerClasses = `sticky z-[80] top-0 left-0 right-0 transition-all ${
    scrolling ? "bg-[#f1f1f1] text-black" : ""
  }`;
  // const headerClasses = `fixed top-0 left-0 right-0 transition-all ${scrolling ? '' : ''
  //     }`;

  const transitionClass = {
    transition: "background-color 0.3s ease-in-out, color 0.2s ease-in-out",
  };
  return (
    <div className={twMerge(headerClasses)} style={transitionClass}>
      <header className="header w-[88%] m-auto p-4 flex justify-between items-center">
        {/* logo */}
        <div className="relative flex flex-col p-2">
          <a
            href="https://kritikakarakheti.com.np/"
            target="_blank"
            className=""
          >
            <h1 className="text-3xl">Kritika K.</h1>
          </a>
          <p className="text-sm absolute bottom-[-0.7rem]">
            Student Researcher
          </p>
        </div>

        {/* header navigations */}
        <nav className="navbar relative left-10 max-md:hidden">
          <ul className="inline-flex space-x-8 uppercase text-base">
            <li>
              <Link to="/">Home</Link>
            </li>
            {/*  */}
            <li>
              <Link to="/biography">Biography</Link>
            </li>
            {/*  */}
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            {/*  */}
            <li>
              <Link to="/research">Research</Link>
            </li>
            {/*  */}
            <li>
              <Link to="/honors">Honors</Link>
            </li>
            {/*  */}
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            {/*  */}
            <li>
              <Link to="/gallary">Gallery</Link>
            </li>

            {/*  */}
            {/* <li>
                        <a href="#">Home</a>
                    </li> */}
          </ul>
        </nav>
        <div>
          <button className="pl-3 pr-3 pt-2 pb-2 bg-primaryBlue text-white border-0 rounded-xl max-md:hidden">
            <a href="/#contact">Contact me</a>
          </button>
        </div>
        <div className="md:hidden">
          <AnimatedMenu />
        </div>
      </header>
    </div>
  );
};

export default Header;
