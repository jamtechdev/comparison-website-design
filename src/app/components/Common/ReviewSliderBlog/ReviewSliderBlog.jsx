import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Pagination } from "swiper";
import { Navigation } from "swiper";
import Image from "next/image";

export default function ReviewSlider() {
  const product = [
    {
      image: "/images/review-image.png",
      reviewName: "Klarstein 22X 58 Imagine",
      reviewContent: "Kitchen Robots",
      rating: "8.0",
    },
    {
      image: "/images/review-image2.png",
      reviewName: "DJI MINI 3 Pro",
      reviewContent: "Kitchen Robots",
      rating: "8.0",
    },
    {
      image: "/images/review-image3.png",
      reviewName: "Ninebot Segway 22",
      reviewContent: "Kitchen Robots",
      rating: "8.0",
    },
    {
      image: "/images/review-image.png",
      reviewName: "Klarstein 22X 58 Imagine",
      reviewContent: "Kitchen Robots",
      rating: "8.0",
    },
    {
      image: "/images/review-image2.png",
      reviewName: "DJI MINI 3 Pro",
      reviewContent: "Kitchen Robots",
      rating: "8.0",
    },
    {
      image: "/images/review-image3.png",
      reviewName: "Ninebot Segway 22",
      reviewContent: "Kitchen Robots",
      rating: "8.0",
    },
    {
      image: "/images/review-image.png",
      reviewName: "Klarstein 22X 58 Imagine",
      reviewContent: "Kitchen Robots",
      rating: "8.0",
    },
    {
      image: "/images/review-image2.png",
      reviewName: "DJI MINI 3 Pro",
      reviewContent: "Kitchen Robots",
      rating: "8.0",
    },
    {
      image: "/images/review-image3.png",
      reviewName: "Ninebot Segway 22",
      reviewContent: "Kitchen Robots",
      rating: "8.0",
    },
  ];
  return (
    <section className="review-slider">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        loop={true}
        navigation={{ nextEl: ".review-slider .swiper-next", prevEl: ".review-slider .swiper-prev" }}
        pagination={true}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        }}
        className="product-slider"
      >
        {product.map(function (item, index) {
          return (
            <SwiperSlide key={index}>
              <div className="review-wrapper">
                <div className="review-card">
                  <Image
                    src={item.image}
                    width={0}
                    height={0}
                    sizes="100%"
                    alt=""
                  />
                  <div className="footer_content">
                    <span>{item.reviewName}</span>
                    <p>{item.reviewContent}</p>
                  </div>
                  <span className="rating_count">{item.rating}</span>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <span className="swiper-prev">
        <i className="ri-arrow-left-s-line"></i>
      </span>
      <span className="swiper-next">
        <i className="ri-arrow-right-s-line"></i>
      </span>
    </section>
  );
}
