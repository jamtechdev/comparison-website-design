import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Pagination } from "swiper";
import { Navigation } from "swiper";
import Image from "next/image";
import { useCallback, useState } from "react";

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
  const [swiperRef, setSwiperRef] = useState();

  const handlePrevious = useCallback(() => {
    swiperRef?.slidePrev();
  }, [swiperRef]);

  const handleNext = useCallback(() => {
    swiperRef?.slideNext();
  }, [swiperRef]);
  return (
    <section className="review-slider">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        // loop={true}
        pagination={true}
        onSwiper={setSwiperRef}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 6,
            spaceBetween: 20,
          },
        }}
        className="product-slider"
      >
        {product.map(function (item, index) {
          return (
            <SwiperSlide key={index}>
              <div className="review-card">
                <Image
                  src={item.image}
                  width={0}
                  height={0}
                  sizes="100%"
                  alt=""
                />
                <div className="footer_content">
                  <h6>{item.reviewName}</h6>
                  <p>{item.reviewContent}</p>
                </div>
                <span className="rating_count">{item.rating}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <span className="swiper-prev" onClick={handlePrevious}>
        <i className="ri-arrow-left-s-line"></i>
      </span>
      <span className="swiper-next" onClick={handleNext}>
        <i className="ri-arrow-right-s-line"></i>
      </span>
    </section>
  );
}
