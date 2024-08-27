import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image"; 
import { DotButton, useDotButton } from "./carousel-dot-buttons";
type PropType = {
  slides: string[];
  options?: EmblaOptionsType;
};

export default function DesktopCarousel(props: PropType) {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
  useDotButton(emblaApi);

  return (
    <>
    <div className="embla__viewport rounded-2xl border-4 border-zinc-900 bg-zinc-800" ref={emblaRef}>
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
    <div className="embla__dots flex justify-center">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={"w-6 h-6 embla__dot".concat(
              index === selectedIndex ? " embla__dot--selected" : ""
            )}
          />
        ))}
      </div>
    </>
  );
}