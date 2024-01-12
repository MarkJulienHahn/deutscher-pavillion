import { useEffect } from "react";

import { urlFor } from "../hooks/useImageUrlBuilder";
import { useSwiperSlide } from "swiper/react";

import { useSwiper } from "swiper/react";

export default function SwiperInner({ image, locale, trigger, setIndex, i }) {
  const swiperSlide = useSwiperSlide();
  const swiper = useSwiper();

  useEffect(() => {
    swiperSlide.isActive && setIndex(i + 1);
  }, [swiperSlide]);

  useEffect(() => {
    swiperSlide.isActive && trigger == "next" && swiper.slideNext();
    swiperSlide.isActive && trigger == "prev" && swiper.slidePrev();
  }, [trigger]);

  return (
    <div className="imageFullwidth">
      <img
        src={`${urlFor(image.asset.url).url()}/${
          image.filename?.current || "german-pavillion-2024-vernice-biennale"
        }`}
        alt={
          image.alt ||
          "An Image of by the German Pavillion of the 2024 Venice Art Biennale"
        }
        loading="lazy"
        style={{
          aspectRatio: "1.5",
          width: "100%",
          objectFit: "cover",
          objectPosition: "center center",
        }}
      />
      {image.caption ? (
        <p className="caption">
          {locale == "de" ? image.caption.german : image.caption.english}
        </p>
      ) : (
        ""
      )}
    </div>
  );
}
