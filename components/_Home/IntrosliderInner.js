import { useEffect } from "react";

import { urlFor } from "../../hooks/useImageUrlBuilder";
import { useSwiperSlide } from "swiper/react";

import Image from "next/image";

import { useSwiper } from "swiper/react";

const IntrosliderInner = ({ image, trigger }) => {
  const swiperSlide = useSwiperSlide();
  const swiper = useSwiper();

  useEffect(() => {
    swiperSlide.isActive && trigger == "next" && swiper.slideNext();
    swiperSlide.isActive && trigger == "prev" && swiper.slidePrev();
  }, [trigger]);

  return (
    <div className="introSlideWrapper">
      <Image
        src={`${urlFor(image.url)
          .url()}/${
          image.filename?.current || "german-pavillon-2024-vernice-biennale"
        }`}
        alt={
          image.alt ||
          "An Image of by the German Pavillon of the 2024 Venice Art Biennale"
        }
        width={2000}
        height={2000}
        loading="lazy"
        style={{
          objectFit: "cover",
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
};

export default IntrosliderInner;
