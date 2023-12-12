import React from "react";
import { Heading } from "../components/UI Components/Headings";
import AnimatedPage from "../components/AnimatedPage";
import "../utils/rotator.css";

const honorsData = [
  {
    id: 1,
    honorName: "1. Excellence Award Recipient",
    button: "Certified Awardee",
    honorDesc:
      "Prestigious honor bestowed upon the student in recognition of excellent achievement in academic work as well as extracurricular activities.",
  },
  {
    id: 2,
    honorName: "2. National Children Theatre Festival Best Act",
    button: "Best Act Award",
    honorDesc:
      "For the act 'Faaliyera Heera,' i.e., Thrown Diamonds, the theatre performance received the Best Act Award at the National Children's Theatre Festival. The act was on the importance of gender equality and advocated against gender-based abortions.",
  },
  {
    id: 3,
    honorName: "3. Inter-School Debate Competition Champion",
    button: "Championship Awardee",
    honorDesc:
      "During junior high school, I had the chance to represent my school and participate in debate championships. I won the National Interschool Debate Championships thrice, competing against representatives from other schools.",
  },
  {
    id: 4,
    honorName: "4. National Convention of Student Quality Circle",
    button: "Total Quality Person",
    honorDesc:
      "I was honored to be one of the five candidates chosen from my school to actively participate and represent in the National Convention of Student Quality Circle twice.",
  },
  {
    id: 5,
    honorName: "5. Finalist in the Young Leader Fellowship",
    button: "Under Top 10 Rank",
    honorDesc:
      "I was fortunate to be chosen as a finalist in The Young Leaders Fellowship Program 2022, a globally competitive opportunity with a low acceptance rate. This program provides a unique leadership platform to address community initiatives in education, health, and economic stability.",
  },

  {
    id: 6,
    honorName: "6. Young Scientist (5th Nepal Youth Science Summit)",
    button: "Honorable Mentions",
    honorDesc:
      "I was honored to present my research poster of 'Fool Your Brain' among selected researchers of Nepal and get the title of Young Scientist.",
  },
];

const Rotator = () => {
  return (
    <div className="container">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

const HonorsCard = () => {
  return (
    <div className="grid grid-cols-3 w-[94%] m-auto place-items-center">
      {honorsData.map((honors) => (
        <div className="honors">
          <div className=" py-5">
            <div className="pl-3">
              <Rotator />
            </div>
            <div className="font-bold italic text-lg text-blue-300">
              <h1>{honors.honorName}</h1>
            </div>
            <div className="py-2">
              <p>{honors.honorDesc}</p>
            </div>
            <div className="py-2 px-4 text-black bg-[#d9d9d9] inline-flex rounded-xl mt-4">
              <button>{honors.button}</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const Honors = () => {
  return (
    <AnimatedPage>
      <div>
        <div className=" text-center w-full h-[10rem] flex justify-center items-center">
          <Heading className="text-4xl uppercase tracking-widest">
            Honors
          </Heading>
        </div>
        {/*  */}
        <div className="">
          <HonorsCard />
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Honors;
