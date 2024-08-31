"use client";
import Button from "$/components/Button/Button";
import { useState } from "react";
import { faqs } from "./FAQ.data";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section className="section main-container">
      <div className="flex justify-between gap-5 w-full">
        <div className="w-[45%]">
          <p className="text-base text-black border-b-2 font-medium border-[#B5EA88] mb-4 w-fit">
            Support
          </p>
          <h2 className="text-5xl text-black font-semibold mb-1">
            Frequently <br /> Asked Questions
          </h2>
          <p className="text-lg text-grey font-normal mb-7">
            Seut ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium.
          </p>
          <Button className="w-fit mb-4">Get in Touch</Button>
        </div>
        <div className="w-[45%]">
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
                    className={`w-4 h-4 rounded-full border border-grey flex items-center justify-center`}
                  >
                    <span className="text-base text-grey">
                      {activeIndex === index ? "-" : "+"}
                    </span>
                  </button>
                </div>
                <span
                  className={`text-base text-grey font-normal overflow-hidden pr-6  ${
                    activeIndex === index ? "max-h-[1000px]" : "max-h-0"
                  }`}
                >
                  {answer}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
