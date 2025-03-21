"use client";
import styles from "./bottomswiper.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import s1 from "../../../public/swiper/1.webp";
import s2 from "../../../public/swiper/2.webp";
import s3 from "../../../public/swiper/3.webp";
import s4 from "../../../public/swiper/4.webp";
import Image from "next/image";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
export default function BottomSwiper() {
  const Slide1 = () => {
    return (
      <div className={styles.sliderWrap}>
        <Image src={s1} alt={"Slide 1"} className={styles.sliderImage} />
      </div>
    );
  };
  const Slide2 = () => {
    return (
      <div className={styles.sliderWrap}>
        <Image src={s2} alt={"Slide 2"} className={styles.sliderImage} />
      </div>
    );
  };
  const Slide3 = () => {
    return (
      <div className={styles.sliderWrap}>
        <Image src={s3} alt={"Slide 3"} className={styles.sliderImage} />
      </div>
    );
  };
  const Slide4 = () => {
    return (
      <div className={styles.sliderWrap}>
        <Image src={s4} alt={"Slide 4"} className={styles.sliderImage} />
      </div>
    );
  };
  return (
    <div className={styles.container}>
      <Swiper
        modules={[Autoplay, Pagination]}
        delay={2000}
        autoplay={true}
        speed={500}
        pagination={{
          clickable: true,
        }}
        spaceBetween={0}
        slidesPerView={1}
      >
        <SwiperSlide>
          <Slide1 />
        </SwiperSlide>
        <SwiperSlide>
          <Slide2 />
        </SwiperSlide>
        <SwiperSlide>
          <Slide3 />
        </SwiperSlide>
        <SwiperSlide>
          <Slide4 />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
