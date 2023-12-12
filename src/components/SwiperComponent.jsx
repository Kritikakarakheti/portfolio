//import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "../utils/rotator.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default ({ project }) => {
  const width = {
    width: "100%",
  };
  return (
    <div>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        style={width}
        scrollbar={{ draggable: true }}
      >
        {project.imageSwiper.map((media, index) => (
          <SwiperSlide key={index} className="swiper-slide_">
            <div className="image-container ">
              {media.type === "video" ? (
                <video
                  width="full"
                  className="m-auto"
                  height="200"
                  autoPlay
                  controls
                >
                  <source src={media.url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <div className="w-full ">
                  <img
                    src={media.url}
                    className="m-auto w-[full] h-[22rem] object-cover"
                    alt={`Project ${project.id} - Image ${index + 1}`}
                  />
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
