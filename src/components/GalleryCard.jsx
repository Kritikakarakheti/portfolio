import React, { useState } from "react";
import { videoData } from "../data/galleryData";
import { photoData } from "../data/galleryData";
import { Heading } from "./UI Components/Headings";
import { FaPlus } from "react-icons/fa";

import "../utils/rotator.css";

const VideoCard = () => {
  return (
    <div className="p-5 grid grid-cols-2 gap-5 relative z-[10]">
      {videoData.map((galleryVideo) => (
        <div key={galleryVideo.id} className="border font-bold text-xl py-5">
          <video width="100%" height="" controls>
            <source src={galleryVideo.video} type="video/mp4" />
          </video>
          <div className="text-center">
            <p>{galleryVideo.videoDesc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

const GalleryCard = () => {
  const [hoveredPhoto, setHoveredPhoto] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const onHoverFunc = (photoId) => {
    setHoveredPhoto(photoId);
  };

  const openModal = (photo) => {
    setSelectedPhoto(photo);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <div>
        <VideoCard />
        {/* Your VideoCard component */}
      </div>
      <Heading>Photos</Heading>
      <div className="grid grid-cols-3 place-items-center gap-4 p-6">
        {photoData.map((photo) => (
          <div
            key={photo.id}
            className="plus-icon-parent relative z-[10] w-[80%]"
            onMouseOver={() => onHoverFunc(photo.id)}
            onMouseOut={() => onHoverFunc(null)}
          >
            <div className="w-full">
              <img
                src={photo.url}
                alt=""
                className="w-[100%] h-[30rem] object-cover"
              />
              <p className="py-2 font-bold">{photo.imgDesc}</p>
            </div>
            {hoveredPhoto === photo.id && (
              <div
                className="plus-icon text-3xl flex justify-center items-center"
                onClick={() => openModal(photo)}
              >
                <FaPlus />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalOpen && (
        <div
          className="modal-overlay bg-orange-500 w-[20%]"
          onClick={closeModal}
        >
          <img src={selectedPhoto.url} alt="" className="w-[40%] modal-image" />
        </div>
      )}
    </div>
  );
};

export default GalleryCard;
