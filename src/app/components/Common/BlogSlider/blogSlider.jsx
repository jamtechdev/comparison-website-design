import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Pagination } from "swiper";
import { Navigation } from "swiper";
import Image from "next/image";

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
  return (
    <section className="blog-slider">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        loop={true}
        navigation={{ nextEl: ".blog-slider .swiper-next", prevEl: ".blog-slider .swiper-prev" }}
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
                <div className="blog-card-img">
                  <Image
                    src={item.image}
                    width={0}
                    height={0}
                    sizes="100%"
                    alt=""
                  />
                  <p className="dates">{item.postDate}</p>
                </div>
                <span className="blog-title">{item.postName}</span>
                <p className="category">{item.postCategory}</p>
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
