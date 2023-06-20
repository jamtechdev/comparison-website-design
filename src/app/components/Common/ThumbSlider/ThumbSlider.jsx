import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import Image from "next/image";
import { useCallback, useState } from "react";

export default function ThumbSlider() {
  const product = [
    {
      image: "/images/review-image.png",
    },
    {
      image: "/images/review-image.png",
    },
    {
      image: "/images/review-image.png",
    },
    {
      image: "/images/review-image.png",
    },
    {
      image: "/images/review-image.png",
    },
    {
      image: "/images/review-image.png",
    },
    {
      image: "/images/review-image.png",
    },
    {
      image: "/images/review-image.png",
    },
    {
      image: "/images/review-image.png",
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
    <section className="thumb-section-container">
      <ul className="thumb-images">
        <li>
          <Image src="/images/review-image.png" width={0} height={0} sizes="100%" alt="" />
        </li>
        <li>
          <Image src="/images/review-image.png" width={0} height={0} sizes="100%" alt="" />
        </li>
        <li>
          <Image src="/images/review-image.png" width={0} height={0} sizes="100%" alt="" />
        </li>
        <li>
          <Image src="/images/review-image.png" width={0} height={0} sizes="100%" alt="" />
        </li>
      </ul>
      <section className="thumb-slider">
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          loop={true}
          onSwiper={setSwiperRef}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
          }}
        >
          {product.map(function (item, index) {
            return (
              <SwiperSlide key={index}>
                <Image
                  src={item.image}
                  width={0}
                  height={0}
                  sizes="100%"
                  alt=""
                />
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
      <div className="alternatives">
            <h6>Similar Alternatives:</h6>
            <ul>
                <li className="active"><span>9 kg</span></li>
                <li><span>10 kg</span></li>
            </ul>
        </div>
    </section>
  );
}
