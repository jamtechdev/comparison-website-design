import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Pagination } from "swiper";
import { Navigation } from "swiper";
import Image from "next/image";
import Link from "next/link";

export default function LatesGuid({ favSlider }) {
  return (
    <>
      <section className="product-slider">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          loop={true}
          navigation={{
            nextEl: ".product-slider .swiper-next",
            prevEl: ".product-slider .swiper-prev",
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
          {" "}
          {favSlider?.length > 0 &&
            favSlider?.map((section, index) => {
              return (
                <>
                  <SwiperSlide key={index}>
                    <Link
                      href={`/${section?.permalink}`}
                      style={{ color: "#27304e" }}
                    >
                      <div className="product-card">
                        <Image
                          src={
                            section.bannerImage === null
                              ? section?.bannerImage
                              : `/images/nofound.png`
                          }
                          width={0}
                          height={0}
                          sizes="100%"
                          alt=""
                        />
                        <span>
                          <Link
                            href={`/${section?.permalink}`}
                            style={{ color: "#27304e" }}
                          >
                            {" "}
                            {section?.title}{" "}
                          </Link>
                        </span>
                      </div>
                    </Link>
                  </SwiperSlide>
                </>
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
    </>
  );
}
