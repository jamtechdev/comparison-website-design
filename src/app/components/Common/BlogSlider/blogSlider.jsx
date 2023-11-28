import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Pagination } from "swiper";
import { Navigation } from "swiper";
import Image from "next/image";
import Link from "next/link";

export default function BlogSlider({ blogData }) {
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
        navigation={{
          nextEl: ".blog-slider .swiper-next",
          prevEl: ".blog-slider .swiper-prev",
        }}
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
        {blogData &&
          blogData?.blog_posts.map(function (item, index) {
            return (
              <SwiperSlide key={index}>
                <Link href={`/single-blog`} style={{ color: "#27304e" }}>
                  <div className="blog-card">
                    <div className="blog-card-img">
                      {/* <Image
                        src={item.banner_image}
                        width={0}
                        height={0}
                        sizes="100%"
                        alt=""  
                      /> */}
                      <img
                        src={item.bannerImage}
                        width={0}
                        height={0}
                        sizes="100%"
                        alt=""
                      />
                      <p className="dates">{item.published_at}</p>
                    </div>
                    <span className="blog-title">{item.title}</span>
                    <p className="category">{item.category}</p>
                  </div>
                </Link>
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
