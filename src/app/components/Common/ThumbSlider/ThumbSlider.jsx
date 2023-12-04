import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import Image from "next/image";
import { useCallback, useState } from "react";
import { Form } from "react-bootstrap";

export default function ThumbSlider({ productData }) {
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
  const BassUrl = "https://frontum.online/";
  const handlePrevious = useCallback(() => {
    swiperRef?.slidePrev();
  }, [swiperRef]);

  const handleNext = useCallback(() => {
    swiperRef?.slideNext();
  }, [swiperRef]);
  return (
    <section className="thumb-section-container">
      <ul className="thumb-images">
        {productData?.all_images?.slice(0, 4)?.map((item, index) => {
          return (
            <>
              <li>
                <img
                  src={`${item?.image}`}
                  width={0}
                  height={0}
                  sizes="100%"
                  alt=""
                />
              </li>
            </>
          );
        })}
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
          {productData?.all_images.map(function (item, index) {
            return (
              <SwiperSlide key={index}>
                <img
                  src={`${item?.image}`}
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
        <p>Similar Alternatives:</p>
        <ul>
          <li className="active">
            <span>9 kg</span>
          </li>
          <li>
            <span>10 kg</span>
          </li>
        </ul>
      </div>

      <div className="alternatives">
        <p className="version-availabel">Color available:</p>
        <Form className="color-section">
          {productData?.available_colors?.map((data, key) => {
            return (
              <>
                <div className="color-item">
                  <Form.Check
                    inline
                    label={data?.color}
                    name="color"
                    type="radio"
                    defaultChecked={key === 0}
                    id={`inline-${data?.color}-${key}`}
                  />
                </div>
              </>
            );
          })}
        </Form>
      </div>
    </section>
  );
}
