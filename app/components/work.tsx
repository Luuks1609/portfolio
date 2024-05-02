"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import { Image } from "@nextui-org/image";

const slides = [
  {
    url: "https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg",
    alt: "Fruit",
  },
  {
    url: "https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg",
    alt: "Fruit",
  },
  {
    url: "https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg",
    alt: "Fruit",
  },
  {
    url: "https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg",
    alt: "Fruit",
  },
];

export default function Work() {
  return (
    <Swiper
      slidesPerView={"auto"}
      spaceBetween={30}
      freeMode={true}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, FreeMode, Pagination]}
      className=""
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} className="">
          <Image
            alt={slide.alt}
            src={slide.url}
            className="hover:-translate-y-4"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
