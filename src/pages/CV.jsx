import React from "react";
import {
  CVDate,
  CVHeading,
  CVLocation,
  CVRole,
} from "../components/UI Components/Headings";
import { education } from "../data/cvData/cv";
import { workExperience } from "../data/cvData/cv";
import { additionalExperience } from "../data/cvData/cv";

const CV = () => {
  return (
    <div className="w-[70%] m-auto">
      {/* Education part */}
      <div>
        <div className="">
          <CVHeading>Education</CVHeading>
        </div>
        <div>
          {education.map((educationData) => (
            <div className="py-3">
              {/* Lean Q. */}
              <div>
                <p>{educationData.location}</p>
                <CVLocation>
                  <a
                    href={educationData.links}
                    className="hover:underline"
                    target="_blank"
                  >
                    {educationData.name}
                  </a>
                </CVLocation>
                <CVDate>{educationData.date}</CVDate>
              </div>
              {/* bullets */}
              <div>
                <p>- {educationData.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="mt-3">
          <CVHeading>Experiences</CVHeading>
        </div>
        <div>
          {additionalExperience.map((experienceData) => (
            <div className="py-3">
              {/* Lean Q. */}
              <div>
                <CVRole>{experienceData.nameDesc}</CVRole>
                <CVLocation>
                  <a
                    href={experienceData.links}
                    className="hover:underline"
                    target="_blank"
                  >
                    {experienceData.name}
                  </a>
                </CVLocation>
                <CVDate>{experienceData.date}</CVDate>
              </div>
              {/* bullets */}
              <div className="ml-6 w-[80%]">
                <ul className="list-disc">
                  <li>{experienceData.description1}</li>
                  <li>{experienceData.description2}</li>
                </ul>
              </div>
            </div>
          ))}
        </div>
        {/*  */}
        <div>
          {workExperience.map((workData) => (
            <div className="py-3">
              {/* Lean Q. */}
              <div>
                <CVRole>{workData.nameDesc}</CVRole>
                <CVLocation>
                  <a
                    href={workData.links}
                    className="hover:underline"
                    target="_blank"
                  >
                    {workData.name}
                  </a>
                </CVLocation>
                <CVDate>{workData.date}</CVDate>
              </div>
              {/* bullets */}
              <div className="ml-6 w-[80%]">
                <ul className="list-disc">
                  <li>{workData.description1}</li>
                  <li>{workData.description2}</li>
                </ul>
              </div>
            </div>
          ))}
        </div>
        {/*  */}

        <hr />
      </div>
    </div>
  );
};

export default CV;

// {/* education part */}
// <div>
// <div>
//   <CVHeading>Education</CVHeading>
//   <div>
//     {/* golden gate */}
//     <div>
//       <img src="" alt="" />
//     </div>
//     <div>
//       {/* gyan niketan data */}
//       <div>
//         <h1>Gyan Niketan</h1>
//         <p>School Leaning Certificate (SLC)</p>
//       </div>
//       {/* golden gate data */}
//       <div>
//         <h1>Golden Gate International College</h1>
//         <p>+2</p>
//         <p>Sept 2022 020 20- 2020</p>
//       </div>
//     </div>
//   </div>
// </div>
// </div>
