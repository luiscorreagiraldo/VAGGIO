import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css/autoplay";
import "../hojas-de-estilo/reviewSlider.css";
import Review from "./reviews";
import SwiperCore, { Autoplay } from "swiper";
SwiperCore.use([Autoplay]);

const ReviewSlider = () => {
  return (
    <div className="container-fluid py-4 px-0 justify-content-center">
      <Swiper
          freeMode={true}
          grabCursor={true}
          modules={[FreeMode]}
          className="mySwiper"
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            480: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
      >
        <SwiperSlide className="reviewSlider">
          <Review
            reviewImage="1"
            name="BENEDICT"
            lastName="CUMBERATCH"
            reviewText="Lorem ipsum dolor sit, amet consectetur adipisicing elit.
               Voluptatibus necessitatibus laudantium harum ducimus doloribus."
          >
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </Review>
        </SwiperSlide>

        <SwiperSlide >
          <Review
            reviewImage="2"
            name="ANGELINA"
            lastName="JOLIE"
            reviewText="Lorem ipsum dolor sit, amet consectetur adipisicing elit.
             Voluptatibus necessitatibus laudantium harum ducimus."
          >
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </Review>
        </SwiperSlide>

        <SwiperSlide>
          <Review
            reviewImage="3"
            name="CATE"
            lastName="BLANCHETT"
            reviewText="Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Voluptas laudantium harum ducimus doloribus?
                  Veniam, quo cumque ex"
          >
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </Review>
        </SwiperSlide>
        <SwiperSlide id="reviewSlider">
          <Review
            reviewImage="4"
            name="GUILLERMO"
            lastName="DEL TORO"
            reviewText="Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Voluptas laucimus doloribus?
                  Veniam, quo cumque harum ducimus ex"
          >
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </Review>
        </SwiperSlide>

        <SwiperSlide id="reviewSlider">
          <Review
            reviewImage="5"
            name="JUSTIN"
            lastName="TRUDEAU"
            reviewText="Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Voluptas laducimus doloribus?
                  Veniam, quo cumque harum ducimus ex"
          >
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </Review>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default ReviewSlider;
