import { useState, useEffect, useRef } from "react";

import { urlFor } from "../hooks/useImageUrlBuilder";
import { useSwiperSlide } from "swiper/react";
import useWindowDimensions from "./useWindowDimensions";

import Image from "next/image";

import { useSwiper } from "swiper/react";

export default function SwiperInner({ image, locale, trigger, setIndex, i }) {
  const [imgWidth, setImgWidth] = useState();
  const [imgHeight, setImgHeight] = useState();

  const swiperSlide = useSwiperSlide();
  const swiper = useSwiper();

  const ref = useRef();

  const { windowWidth } = useWindowDimensions();

  useEffect(() => {
    swiperSlide.isActive && setIndex(i + 1);
  }, [swiperSlide]);

  useEffect(() => {
    swiperSlide.isActive && trigger == "next" && swiper.slideNext();
    swiperSlide.isActive && trigger == "prev" && swiper.slidePrev();
  }, [trigger]);

  useEffect(() => {
    setImgWidth(ref.current.clientWidth);
    setImgHeight(ref.current.clientHeight);
  }, [windowWidth]);

  console.log(image);

  return (
    <>
      <div
        className="imageFullwidth"
        ref={ref}
        style={{
          height: imgWidth / image.asset.metadata.dimensions.aspectRatio,
        }}
      >
        <Image
          src={`${urlFor(image.asset.url).url()}/${
            image.filename?.current || "german-pavillon-2024-vernice-biennale"
          }`}
          alt={
            image.alt ||
            "An Image of by the German Pavillon of the 2024 Venice Art Biennale"
          }
          loading="lazy"
          fill
          style={{
            objectFit: "cover",
            width: "100%",
            aspectRatio: image.asset.metadata.dimensions.aspectRatio,
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

      {locale == "de"
        ? image.caption?.german && (
            <p
              className="imageCaption"
              style={{
                top: `${
                  imgWidth / image.asset.metadata.dimensions.aspectRatio - 20
                }px`,
              }}
            >
              {image.caption.german}
            </p>
          )
        : image.caption?.english && (
            <p
              className="imageCaption"
              style={{
                top: `${
                  imgWidth / image.asset.metadata.dimensions.aspectRatio - 30
                }px`,
              }}
            >
              {image.caption.english}
            </p>
          )}
    </>
  );
}
