import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Pagination } from "swiper";
import { Navigation } from "swiper";
import Image from "next/image";
import { useCallback, useState } from "react";

export default function BlogSlider() {
  const blogPost = [
    {
      image: "/images/controller.png",
      postDate: "SEPTEMBER 20 2022",
      postName: "Drinking Hot Water: Health Benefits and Risks",
      postCategory: "Electronics",
    },
    {
      image: "/images/controller.png",
      postDate: "SEPTEMBER 20 2022",
      postName: "Drinking Hot Water: Health Benefits and Risks",
      postCategory: "Electronics",
    },
    {
      image: "/images/controller.png",
      postDate: "SEPTEMBER 20 2022",
      postName: "Drinking Hot Water: Health Benefits and Risks",
      postCategory: "Electronics",
    },
    {
      image: "/images/controller.png",
      postDate: "SEPTEMBER 20 2022",
      postName: "Drinking Hot Water: Health Benefits and Risks",
      postCategory: "Electronics",
    },
    {
      image: "/images/controller.png",
      postDate: "SEPTEMBER 20 2022",
      postName: "Drinking Hot Water: Health Benefits and Risks",
      postCategory: "Electronics",
    },
    {
      image: "/images/controller.png",
      postDate: "SEPTEMBER 20 2022",
      postName: "Drinking Hot Water: Health Benefits and Risks",
      postCategory: "Electronics",
    },
    {
      image: "/images/controller.png",
      postDate: "SEPTEMBER 20 2022",
      postName: "Drinking Hot Water: Health Benefits and Risks",
      postCategory: "Electronics",
    },
    {
      image: "/images/controller.png",
      postDate: "SEPTEMBER 20 2022",
      postName: "Drinking Hot Water: Health Benefits and Risks",
      postCategory: "Electronics",
    },
    {
      image: "/images/controller.png",
      postDate: "SEPTEMBER 20 2022",
      postName: "Drinking Hot Water: Health Benefits and Risks",
      postCategory: "Electronics",
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
    <section className="blog-slider">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        loop={true}
        onSwiper={setSwiperRef}
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
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
        className="blog-slider"
      >
        {blogPost.map(function (item, index) {
          return (
            <SwiperSlide key={index}>
              <div className="blog-card">
                <Image
                  src={item.image}
                  width={0}
                  height={0}
                  sizes="100%"
                  alt=""
                />
                <p className="dates">{item.postDate}</p>
                <h6>{item.postName}</h6>
                <p className="category">{item.postCategory}</p>
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
