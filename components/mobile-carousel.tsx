import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
// import components
// import { DotButton, useDotButton } from "./carousel-dot-buttons";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./carousel-arrow-buttons";
// import styles
import styles from "./carousel.module.css";

type PropType = {
  slides: string[];
  options?: EmblaOptionsType;
};

export default function MobileCarousel(props: PropType) {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  // const { selectedIndex, scrollSnaps, onDotButtonClick } =
  //   useDotButton(emblaApi);
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <>
      <div className="grid grid-cols-3">
        <div className={`${styles.embla__buttons} place-content-center ml-10`}>
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        </div>

        <div
          className={`${styles.embla__viewport} rounded-2xl border-4 border-zinc-900 bg-zinc-800`}
          ref={emblaRef}>
          <div className={styles.embla__container}>
            <div className={styles.embla__controls}></div>
            {slides.map((slide, index) => {
              const isVideo = /\.(mp4|webm|ogg)$/.test(slide);
              return (
                <div className={styles.embla__slide} key={index}>
                  {isVideo ? (
                  <video
                    src={slide}
                    width={1080}
                    height={1920}
                    autoPlay
                    loop
                    muted
                  />
                  ) : (
                  <Image
                    priority
                    src={slide}
                    alt={`Slide ${index + 1}`}
                    width={1080}
                    height={1920}
                    {...(slide.endsWith(".gif") ? { unoptimized: true } : {})}
                  />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className={`${styles.embla__buttons} place-content-center mr-10`}>
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
      {/* <div className="embla__dots flex justify-center">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={"embla__dot".concat(
              index === selectedIndex ? " embla__dot--selected" : ""
            )}
          />
        ))}
      </div> */}
    </>
  );
}
