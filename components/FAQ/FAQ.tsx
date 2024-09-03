"use client";
import Button from "$/components/Button/Button";
import { useRef, useState } from "react";
import { faqs } from "./FAQ.data";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const FAQ = () => {
  const faqRef = useRef<HTMLElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  useGSAP(
    () => {
      faqs.forEach((_, index) => {
        gsap.to(`[data-anim='faq-answer-${index}']`, {
          maxHeight: activeIndex === index ? `100px` : 0,
          duration: 0.5,
        });
      });
    },
    {
      scope: faqRef,
      dependencies: [activeIndex],
    }
  );

  return (
    <section ref={faqRef} className="section main-container mb-12">
      <div className="flex flex-col xl:flex-row  justify-between gap-5 w-full">
        <div className="w-full xl:w-[46%] relative">
          <p className="text-base text-black border-b-2 font-medium border-[#B5EA88] mb-4 w-fit">
            Support
          </p>
          <h2 className="section__title text-left mb-1 lg:mb-4">
            Frequently <br /> Asked Questions
          </h2>
          <p className="textsm lg:text-lg text-grey font-normal mb-2 lg:mb-7">
            Seut ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium.
          </p>
          <Button className="w-fit mb-4">Get in Touch</Button>
          <Image
            src="https://res.cloudinary.com/dexg5uy3d/image/upload/v1725198339/image_65_kmpqdg.png"
            alt=""
            width={140}
            height={200}
            className="h-auto max-w-full absolute bottom-[10%] right-[30%] hidden xl:block"
          />
        </div>
        <div className="w-full xl:w-[46%]">
          <ul className="list-none flex flex-col w-full">
            {faqs.map(({ answer, question }, index) => (
              <li
                key={index}
                className={`flex flex-col gap-4 pt-6 w-full px-4 ${
                  activeIndex === index
                    ? "shadow-2xl rounded-b-xl pb-4"
                    : "border-b border-b-[#F7F7F9] pb-6"
                }`}
              >
                <div
                  className={`flex justify-between w-full items-center gap-3`}
                >
                  <span className="text-xl text-black font-semibold">
                    {question}
                  </span>
                  <button
                    onClick={() => {
                      activeIndex === index
                        ? setActiveIndex(-1)
                        : setActiveIndex(index);
                    }}
                    className={`w-4 h-4 rounded-full border border-grey flex items-center justify-center 
                     `}
                  >
                    <span className="text-base text-grey">
                      {activeIndex === index ? "-" : "+"}
                    </span>
                  </button>
                </div>
                <div
                  className="overflow-hidden"
                  data-anim={`faq-answer-${index}`}
                >
                  <span
                    className={`text-base text-grey font-normal overflow-hidden pr-6  
                 
                  `}
                  >
                    {answer}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
