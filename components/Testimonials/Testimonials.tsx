"use client";
import { useCallback, useEffect, useState } from "react";
import { testimonials } from "./Testimonials.data";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaCarouselType } from "embla-carousel";
import Image from "next/image";

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
    <section className="section w-full py-12 lg:py-24 relative">
      <div className="h-full w-full absolute top-0 left-0">
        <Image
          src="https://res.cloudinary.com/dexg5uy3d/image/upload/v1725161340/testi-bg-2-1_nrdq1l.png"
          alt=""
          className="bg-main object-cover"
          fill
        />
      </div>
      <div className="main-container relative">
        <h2 className="text-center section__title text-white mb-10 lg:mb-16">
          What people <br /> are saying about us
        </h2>
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonials.map(
              ({ name, content, ratings, position, img }, index) => (
                <div
                  className="relative pl-1 md:pl-4 lg:pl-6 flex-[1_0_100%] md:flex-[1_0_50%] lg:flex-[1_0_33.3%] min-h-[320px]"
                  key={index}
                >
                  <article className=" w-full min-h-full flex flex-col gap-3 px-10 py-14 bg-testimonial bg-opacity-10 backdrop-blur-[20px] rounded-[20px] relative">
                    {/* <div className="h-[102%] w-[102%] absolute top-0 left-0 z-[-1]">
                    <Image
                      src="https://res.cloudinary.com/dexg5uy3d/image/upload/v1725161457/BODY_ssz4ca.png"
                      alt=""
                      className="bg-main object-cover"
                      fill
                    />
                  </div> */}
                    <div className="flex gap-1">
                      {Array(5)
                        .fill(null)
                        .map((_, index) => (
                          <div key={index} className="h-4 w-4 relative">
                            <Image
                              src="https://res.cloudinary.com/dexg5uy3d/image/upload/v1725162440/download_ampo8x.png"
                              alt=""
                              className="object-cover"
                              fill
                            />
                          </div>
                        ))}
                    </div>
                    <p className="text-lg text-white mb-5">{`"${content}"`}</p>
                    <div className="flex gap-2 items-center">
                      <div className="w-12 h-12 rounded-full overflow-hidden relative">
                        <Image fill alt="" src={img} />
                      </div>
                      <div className="flex flex-col">
                        <p className="text-lg text-white">{name}</p>
                        <p className="text-sm text-[#BBA3E3]">{position}</p>
                      </div>
                    </div>
                  </article>
                </div>
              )
            )}
          </div>
        </div>
        <div className="flex justify-center items-center gap-2 lg:gap-3 mt-4 lg:mt-12">
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
