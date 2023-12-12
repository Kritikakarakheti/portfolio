// SwiperCard.js

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import { ImCross } from "react-icons/im";
import "../utils/rotator.css";

const SwiperCard = ({ images }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (index) => {
    setSelectedImage(images[index]);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalOpen(false);
  };

  return (
    <>
      <div className="relative">
        <Swiper effect={"cards"} grabCursor={true} modules={[EffectCards]}>
          {images.map((image, index) => (
            <SwiperSlide
              className="swiper-slide relative z-[100] bg-black"
              key={index}
              onClick={() => openModal(index)}
            >
              <div className="flex flex-col text-center cursor-pointer">
                <img src={image} alt={`Slide ${index + 1}`} />
                <p className="">{index + 1}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Modal */}
        {modalOpen && (
          <div className="fixed z-[500000] top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
            <div className="max-w-2xl w-full p-4 bg-white rounded-lg">
              <img src={selectedImage} alt="Selected" className="w-full" />
              <button
                className="absolute  right-20 top-20 mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
                onClick={closeModal}
              >
                <ImCross className="iconCross relative text-xs" />
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SwiperCard;
