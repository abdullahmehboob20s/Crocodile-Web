import React from "react";
import styles from "./ItemSelector.module.css";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import SwiperCore, { Navigation, EffectCoverflow } from "swiper";
SwiperCore.use([Navigation, EffectCoverflow]);

function ItemSelector({
  data,
  setSlideIndex,
  navigationPrevRef,
  navigationNextRef,
}) {
  return (
    <div className={styles.itemSelector}>
      <div className={styles.itemSelectorHeader}>
        <button className="pointer" ref={navigationPrevRef}>
          <HiArrowLeft size={15} color="white" />
        </button>
        <div>
          <p className="fs-18px white weight-6 text-center">Reptile Select</p>
        </div>
        <button className="pointer" ref={navigationNextRef}>
          <HiArrowRight size={15} color="white" />
        </button>
      </div>

      <div className={styles.itemSelectorImgWrapper}>
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={0}
          effect={"coverflow"}
          centeredSlides={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 200,
            modifier: 1,
          }}
          onSlideChange={(e) => setSlideIndex(e.activeIndex)}
          onSwiper={(swiper) => {
            setTimeout(() => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
              swiper.navigation.destroy();
              swiper.navigation.init();
              swiper.navigation.update();
            });
          }}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
        >
          {data.map((imgData, index) => (
            <SwiperSlide>
              <img src={imgData.slideImg} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default ItemSelector;
