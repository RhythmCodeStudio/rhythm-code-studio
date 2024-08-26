import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image"; 

type PropType = {
  slides: string[];
  options?: EmblaOptionsType;
};

export default function DesktopCarousel(props: PropType) {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  return (
    <div className="bg-zinc-900  embla__viewport rounded-2xl border-4 border-zinc-900" ref={emblaRef}>
      <div className="embla__container">
        {slides.map((slide, index) => (
          <div className="embla__slide" key={index}>
            <Image
              priority
              src={slide}
              alt={`Slide ${index + 1}`}
              width={1920}
              height={1080}
              className=""
            />
          </div>
        ))}
      </div>
    </div>
  );
}