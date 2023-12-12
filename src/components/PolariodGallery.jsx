// PolaroidGallery.js

import React from "react";

const PolaroidGallery = ({ images }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {images.map((image, index) => (
        <div key={index} className="p-4 m-4 bg-white shadow-md">
          <div className="relative">
            <img
              src={image}
              alt={`Polaroid ${index + 1}`}
              className="w-full h-auto"
            />
            <div className="absolute top-0 left-0 w-full h-full border-4 border-white"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <span className="text-xl font-bold">Polaroid {index + 1}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PolaroidGallery;
