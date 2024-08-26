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

const slides = [
  {
    img: "/projects/koningsvogel.svg",
    alt: "Koningsvogel",
    url: "https://koningsvogel.vercel.app/",
  },
  {
    img: "/projects/unit-a.png",
    alt: "Unit-A",
    url: "https://unit-a-security.vercel.app/",
  },
  {
    img: "/projects/translatetunes.png",
    alt: "TranslateTunes",
    url: "https://translatetunes.web.app/",
  },
  {
    img: "/projects/antivlam.png",
    alt: "Antivlam",
    url: "https://antivlam.vercel.app",
  },
  {
    img: "/projects/dronesecurity.svg",
    alt: "DroneSecurity",
    url: "https://dronesecurity.nl",
  },
  {
    img: "/projects/isospect.svg",
    alt: "Isospect",
    url: "https://isospect.nl",
  },
  {
    img: "/projects/isospect-portal.svg",
    alt: "Isospect Portal",
    url: "https://portal.isospect.nl",
  },
  {
    img: "/projects/maisonlepuy.svg",
    alt: "MaisonlePuy",
    url: "https://maisonlepuy.nl",
  },
  {
    img: "/projects/qrspot.svg",
    alt: "QRSpot",
    url: "https://qrspot.nl",
  },
  {
    img: "/projects/qrspot-ios.svg",
    alt: "QRSpot App",
  },
  {
    img: "/projects/loveforpets.svg",
    alt: "Love For Pets",
    url: "https://loveforpets.nl",
  },

  {
    img: "/projects/antivlam-urenregistratie.svg",
    alt: "Antivlam Urenregistratie",
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
          {slide.url ? (
            <a href={slide.url} target="_blank">
              <Image
                alt="Card background"
                className="w-full h-full object-cover rounded-xl hover:-translate-y-4 duration-300"
                src={slide.img}
                height={100}
                width={1000}
              />
            </a>
          ) : (
            <Image
              alt="Card background"
              className="w-full h-full object-cover rounded-xl"
              src={slide.img}
              height={100}
              width={1000}
            />
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
