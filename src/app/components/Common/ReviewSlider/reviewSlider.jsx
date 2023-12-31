import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Pagination } from "swiper";
import { Navigation } from "swiper";
import Image from "next/image";
import Link from "next/link";

export default function ReviewSlider({ favSlider }) {
  const product = [
    {
      image: "/images/review-image.png",
      reviewName: "Klarstein 22X 58 Imagine",
      reviewContent: "Kitchen Robots",
      rating: "7.6",
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
      rating: "2.0",
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
      rating: "7.0",
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
      rating: "5.0",
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
        navigation={{
          nextEl: ".review-slider .swiper-next",
          prevEl: ".review-slider .swiper-prev",
        }}
        pagination={true}
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
        {favSlider?.map(function (item, index) {
          return (
            <SwiperSlide key={index}>
              <Link href={`/product/${item?.permalink}`}>
                <div className="review-wrapper">
                  <div className="review-card">
                    <img
                      src={
                        item?.main_image
                          ? item?.main_image
                          : "/images/nofound.png"
                      }
                      width={0}
                      height={0}
                      sizes="100%"
                      alt=""
                    />
                    <div className="footer_content">
                      <span>{item?.name}</span>
                      <p>{item?.category}</p>
                    </div>
                    <span
                      className="rating_count"
                      style={{
                        background:
                          item.rating >= 7.5
                            ? "#093673"
                            : item.rating >= 5 && item.rating < 7.5
                            ? "#437ECE"
                            : "#85B2F1",
                      }}
                    >
                      {item?.overall_score}
                    </span>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
      {favSlider?.length > 6 ? (
        <>
          <span className="swiper-prev">
            <i className="ri-arrow-left-s-line"></i>
          </span>
          <span className="swiper-next">
            <i className="ri-arrow-right-s-line"></i>
          </span>
        </>
      ) : (
        ""
      )}
    </section>
  );
}
