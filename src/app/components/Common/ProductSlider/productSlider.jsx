import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Pagination } from "swiper";
import { Navigation } from "swiper";
import Image from "next/image";
import { useCallback, useState } from "react";

export default function ProductSlider() {
  const product = [
    {
      image: "/images/p1.png",
      productName: "Best Monitors",
    },
    {
      image: "/images/p2.png",
      productName: "Best Washing Machines",
    },
    {
      image: "/images/p3.png",
      productName: "Best Robot Vacuum Cleaners",
    },
    {
      image: "/images/p4.png",
      productName: "Best Drones",
    },
    {
      image: "/images/p5.png",
      productName: "Best Kitchen Robots",
    },
    {
      image: "/images/p6.png",
      productName: "Best Electric Scooters",
    },
    {
      image: "/images/p1.png",
      productName: "Best Monitors",
    },
    {
      image: "/images/p2.png",
      productName: "Best Washing Machines",
    },
    {
      image: "/images/p3.png",
      productName: "Best Robot Vacuum Cleaners",
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
    <section className="product-slider">
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
            slidesPerView: 4,
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
              <div className="product-card">
                <Image
                  src={item.image}
                  width={0}
                  height={0}
                  sizes="100%"
                  alt=""
                />
                <h6>{item.productName}</h6>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <span className="swiper-prev" onClick={handlePrevious}><i className="ri-arrow-left-s-line"></i></span>
      <span className="swiper-next" onClick={handleNext}><i className="ri-arrow-right-s-line"></i></span>
    </section>
  );
}
