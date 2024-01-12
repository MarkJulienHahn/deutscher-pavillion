"use client";

import { useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import SwiperInner from "./SwiperInner";

export default function SwiperComponent({ entry, locale }) {
  const [index, setIndex] = useState(1);
  const [trigger, setTrigger] = useState(null);

  const triggerNext = () => {
    setTrigger("next"), setTimeout(() => setTrigger(null));
  };

  const triggerPrev = () => {
    setTrigger("prev"), setTimeout(() => setTrigger(null));
  };

  return (
    <>
      <div className="sliderWrapper">
        <div className="sliderControl">
          <span className="sliderControlInner" onClick={triggerPrev}></span>
          <span className="sliderControlInner" onClick={triggerNext}></span>
        </div>
        <Swiper spaceBetween={0}>
          {entry.images.map((image, i) => (
            <SwiperSlide key={i}>
              <SwiperInner
                image={image}
                locale={locale}
                key={i}
                i={i}
                setIndex={setIndex}
                trigger={trigger}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="index">
        {entry.images.length > 1 && `${index}/${entry.images.length}`}
      </div>
    </>
  );
}
