import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./carousel-arrow-buttons";

type PropType = {
  slides: string[];
  options?: EmblaOptionsType;
};

export default function DesktopCarousel(props: PropType) {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <>
      <div
        className="embla__viewport rounded-2xl border-4 border-zinc-900 bg-zinc-800"
        ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div className="embla__slide" key={index}>
              <Image
                priority
                src={slide}
                alt={`Slide ${index + 1}`}
                width={1920}
                height={1080}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-3 p-6">
      <div className="embla__buttons place-content-center ">
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
      </div>
      <div></div>
      <div className="embla__buttons place-content-center ">
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      </div>
      </div>
    </>
  );
}
