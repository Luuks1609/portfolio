"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import Image from "next/image";
import { slides } from "@/lib/projects";

export default function Work() {
  return (
    <Swiper
      slidesPerView={"auto"}
      spaceBetween={30}
      freeMode={true}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: true,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, FreeMode, Pagination]}
      className=""
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <Image
            alt="Card background"
            className="w-full h-full object-cover rounded-xl hover:-translate-y-4 duration-300"
            src={slide.img}
            height={100}
            width={1000}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
