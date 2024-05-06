"use client";

import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

import IntrosliderInner from "./IntrosliderInner";

const Introslider = ({ locale, entry }) => {
  const [index, setIndex] = useState(1);
  const [trigger, setTrigger] = useState(null);

  const triggerNext = () => {
    setTrigger("next"), setTimeout(() => setTrigger(null));
  };

  const triggerPrev = () => {
    setTrigger("prev"), setTimeout(() => setTrigger(null));
  };

  return (
    <div className="introSliderWrapper">
      <div className="sliderControl" style={{ top: "80px" }}>
        <span className="sliderControlInner" onClick={triggerPrev}></span>
        <span className="sliderControlInner" onClick={triggerNext}></span>
      </div>
      <Swiper modules={[EffectFade]} effect="fade" loop="true">
        {entry.map((image, i) => (
          <SwiperSlide key={i}>
            <IntrosliderInner
              image={image.image}
              key={i}
              i={i}
              setIndex={setIndex}
              trigger={trigger}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Introslider;
