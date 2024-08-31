"use client";
import { useCallback, useEffect, useState } from "react";
import { testimonials } from "./Testimonials.data";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaCarouselType } from "embla-carousel";

const Testimonials = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const [emblaRef, emblaApi] = useEmblaCarousel();

  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit).on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return (
    <section className="section w-full py-24 bg-main">
      <div className="main-container">
        <h2 className="text-center text-5xl text-white font-semibold mb-16">
          What people <br /> are saying about us
        </h2>
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonials.map(({ name, content, ratings, position }, index) => (
              <div
                className="pl-6 flex-[1_1_33.3%] flex-shrink-0 min-h-[300px]"
                key={index}
              >
                <article className=" w-full min-h-full flex flex-col gap-3 px-10 py-16 bg-purple-300 bg-opacity-10 backdrop-blur-[10px] rounded-2xl border border-white">
                  <div className="bg-yellow-400 w-[100px] h-[20px]" />
                  <p className="text-lg text-white mb-3">{`"${content}"`}</p>
                  <div className="flex gap-2 items-center">
                    <div className="bg-white w-12 h-12 rounded-full" />
                    <div className="flex flex-col gap-1">
                      <p className="text-lg text-white">{name}</p>
                      <p className="text-base text-[#BBA3E3]">{position}</p>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center items-center gap-3 mt-12">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={`border border-white w-3 h-3 rounded-full ${
                index !== selectedIndex ? "bg-transparent" : "bg-white"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
