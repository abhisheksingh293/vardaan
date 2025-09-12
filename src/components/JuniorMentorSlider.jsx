import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./JuniorMentorSlider.css";

export default function JuniorMentorSlider() {
  const mentors = [
    {
      img: "https://res.cloudinary.com/dxwszplz7/image/upload/v1751363391/aditi_tamglh.png",
      name: "Aditi Kumari",
      desc: "MGM Medical College",
      desc2: "M.B.B.S",
    },
    {
      img: "https://res.cloudinary.com/dxwszplz7/image/upload/v1751363392/ankit_fa7frp.png",
      name: "Ankit Bhaiya",
      desc: "NIT Jamshedpur",
      desc2: "B.Tech",
    },
    {
      img: "https://res.cloudinary.com/dxwszplz7/image/upload/v1751363395/dabdab_ecckz0.png",
      name: "Shubham Kumar",
      desc: "NIT Jamshedpur",
      desc2: "B.Tech",
    },
    {
      img: "https://res.cloudinary.com/dxwszplz7/image/upload/v1751363394/boby_xrehol.png",
      name: "Boby Mahato",
      desc: "Jamshedpur Woman College",
      desc2: "B.Com",
    },
    {
      img: "https://res.cloudinary.com/dxwszplz7/image/upload/v1751363393/anupama_ti5suq.png",
      name: "Anupama Kumari",
      desc: "Jamshedpur Woman College",
      desc2: "B.A",
    },
  ];
  return (
    <section className="slider-wrapper w-full ">
      <div className="card__container">
        <Swiper
          modules={[Pagination, A11y, Autoplay]}
          spaceBetween={-20}
          slidesPerView={3}
          centeredSlides={true}
          slidesPerGroup={1}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          speed={500}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 }, // mobile
            600: { slidesPerView: 1 }, // small tablets
            900: { slidesPerView: 3 }, // desktop/tablet
            1200: { slidesPerView: 3 },
          }}
        >
          {mentors.map((slide, idx) => (
            <SwiperSlide key={idx}>
              <article className="mentor-card">
                <div className="mentor-card-top">
                  <div className="mentor-avatar-bg">
                    <img src={slide.img} alt={slide.name} className="mentor-avatar" />
                  </div>
                </div>
                <div className="mentor-card-bottom">
                  <div className="mentor-name">{slide.name}</div>
                  <div className="mentor-college">{slide.desc}</div>
                  <div className="mentor-degree">{slide.desc2}</div>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

