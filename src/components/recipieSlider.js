import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css/autoplay";
import "../hojas-de-estilo/reviewSlider.css";
import Recipie from "./bestRecipies";
import SwiperCore, { Autoplay } from "swiper";
SwiperCore.use([Autoplay]);

const RecipieSlider = () => {
  return (
    <div className="container py-4 px-4 justify-content-center">
      <Swiper
        freeMode={true}
        grabCursor={true}
        modules={[FreeMode]}
        className="mySwiper"
        slidesPerView={"auto"}
        spaceBetween={30}
        loop={true}
        // autoplay={{
        //   delay: 3000,
        //   disableOnInteraction: false,
        // }}
      >
        <SwiperSlide>
          <Recipie recipeImage="1" name="GRILLED LOBSTER" />
        </SwiperSlide>

        <SwiperSlide>
          <Recipie recipeImage="2" name="SALMON ROLL" />
        </SwiperSlide>

        <SwiperSlide>
          <Recipie recipeImage="3" name="BAKED SHRIMP" />
        </SwiperSlide>

        <SwiperSlide>
          <Recipie recipeImage="4" name="COHO SALMON" />
        </SwiperSlide>

        <SwiperSlide>
          <Recipie recipeImage="5" name="SHIRMP PASTA" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default RecipieSlider;
