// ProjectModal.js
import React, { useEffect, useState } from "react";
import { ImCross } from "react-icons/im";
import SwiperComponent from "../SwiperComponent";

const ProjectModal = ({ project, onClose }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Set isModalOpen to true when the component mounts to trigger the fade-in animation
  useEffect(() => {
    setIsModalOpen(true);
    // Disable scrolling on the body when the modal is open
    document.body.style.overflow = "hidden";

    return () => {
      // Re-enable scrolling on the body when the modal is closed
      document.body.style.overflow = "visible";
    };
  }, []);

  const closeModal = () => {
    // Set isModalOpen to false to trigger the fade-out animation
    setIsModalOpen(false);
    // Call the onClose function after the fade-out animation completes
    setTimeout(onClose, 100); // Adjust the delay to match your CSS transition duration
  };

  return (
    <div
      className={`modal-overlay  overflow-y-scroll ${
        isModalOpen ? "open" : ""
      }`}
    >
      <div className="glass-effect-second  w-[60%] m-auto border rounded-xl mt-[2rem] overflow-hidden">
        <div className="modal-button-parent inline fixed right-20">
          <button
            onClick={closeModal}
            className="modal-button overflow-hidden relative z-10 border rounded-full p-2"
          >
            <ImCross className="iconCross relative text-xs" />
          </button>
        </div>
        <div className="p-6 overflow-y-scroll text-black flex justify-evenly flex-col h-full">
          {/* <div className="flex justify-center items-center pb-5">
            {project.video ? (
              <video width="full" height="240" autoPlay controls>
                <source src={project.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img src={project.image} alt="" className="w-[28rem]" />
            )}
          </div> */}
          <div>
            <SwiperComponent project={project} />
          </div>
          <h2 className="text-2xl text-left font-bold py-2">
            {project.projectTitle}
          </h2>

          <p className="text-justify">{project.projectDescription}</p>
          <h1 className="font-bold pt-8 pb-2 text-red-500">My Role:</h1>
          <p>{project.projectRole1}</p>
          <p> {project.projectRole2}</p>
          <p>{project.projectRole3}</p>
          <div>
            {project.facebookLink ||
            project.appLink ||
            project.websiteLink ||
            project.generalLink ? (
              <h1 className="font-bold pt-3 text-red-500">Links:</h1>
            ) : null}
            {project.facebookLink && (
              <div>
                <h1 className="pt-3">Facebook Link:</h1>
                <p>
                  <a
                    href={project.facebookLink}
                    className="hover:underline text-blue-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.facebookLink}
                  </a>
                </p>
              </div>
            )}
            {project.appLink && (
              <div>
                <h1 className=" pt-3">App Link:</h1>
                <p>
                  <a
                    href={project.appLink}
                    className="hover:underline text-blue-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.appLink}
                  </a>
                </p>
              </div>
            )}
            {project.websiteLink && (
              <div>
                <h1 className="pt-3">Website Link:</h1>
                <p>
                  <a
                    href={project.websiteLink}
                    className="hover:underline text-blue-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.websiteLink}
                  </a>
                </p>
              </div>
            )}
            {project.generalLink && (
              <div>
                <h1 className="pt-3">Link:</h1>
                <p>
                  <a
                    href={project.generalLink}
                    className="hover:underline text-blue-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.generalLink}
                  </a>
                  {project.imageBelowLink && (
                    <div>
                      <img
                        src={project.imageBelowLink}
                        alt="Image Below Link"
                        className="w-full mt-4"
                      />
                    </div>
                  )}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
