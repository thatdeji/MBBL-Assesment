"use client";
import Button from "$/components/Button/Button";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const GetStarted = () => {
  const getStartedRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      gsap.set("[data-anim='card-bg-img']", {
        y: 25,
        opacity: 0,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#get-started-images",
          start: "top center",
        },
      });

      tl.to("[data-anim='get-started-img-one']", {
        repeat: -1,
        y: 40,
        yoyo: true,
        yoyoEase: true,
        ease: "sine.inOut",
        duration: 2,
      });

      tl.to("[data-anim='get-started-img-two']", {
        repeat: -1,
        y: -40,
        yoyo: true,
        yoyoEase: true,
        ease: "sine.inOut",
        duration: 2,
      });
    },
    {
      scope: getStartedRef,
    }
  );

  return (
    <section
      ref={getStartedRef}
      className="flex flex-col xl:flex-row justify-between gap-8 section main-container"
    >
      <div id="get-started-images" className="hidden lg:block w-[48%] relative">
        <div className="">
          <Image
            width={450}
            height={450}
            src="https://res.cloudinary.com/dexg5uy3d/image/upload/v1725159872/account-bg_oiihxv.png"
            alt=""
            className="h-auto max-w-full"
          />
        </div>
        <div className="absolute top-[-68px] left-[0%]">
          <Image
            width={500}
            height={520}
            src="https://res.cloudinary.com/dexg5uy3d/image/upload/v1725159872/acc-main_hfzeze.png"
            alt=""
            className="h-auto max-w-full"
          />
        </div>
        <div
          data-anim="get-started-img-one"
          className="absolute top-[-28px] left-[-15%]"
        >
          <Image
            width={74}
            height={100}
            src="https://res.cloudinary.com/dexg5uy3d/image/upload/v1725159900/ac-shape-1_dbqd4a.png"
            alt=""
            className="h-auto max-w-full"
          />
        </div>
        <div
          data-anim="get-started-img-two"
          className="absolute bottom-[-26px] right-[2%]"
        >
          <Image
            width={64}
            height={64}
            src="https://res.cloudinary.com/dexg5uy3d/image/upload/v1725159871/ac-shape-2_manhfv.png"
            alt=""
            className="h-auto max-w-full"
          />
        </div>
        <div className="absolute bottom-[-6px] right-[40%]">
          <Image
            width={216}
            height={57}
            src="https://res.cloudinary.com/dexg5uy3d/image/upload/v1725159871/ac-author_de4g5y.png"
            alt=""
            className="h-auto max-w-full"
          />
        </div>
      </div>
      <div className="flex flex-col w-full lg:w-[48%]">
        <p className="text-base text-black border-b-2 font-medium border-[#B5EA88] mb-4 w-fit">
          Open An Account
        </p>
        <h2 className="section__title mb-2 lg:mb-10 text-left">
          Let&apos;s get started
        </h2>
        <ol className="flex flex-col mb-1 lg:mb-12 list-none p-0 m-0 w-full">
          <li className="w-full flex gap-6 items-center border-b-[0.5px] border-b-[#EDF5FA] py-5">
            <span className="text-xl lg:text-3xl text-black font-medium">
              01
            </span>
            <span className="text-lg lg:text-xl text-black font-normal">
              Sign up in a few minutes
            </span>
          </li>
          <li className="w-full flex gap-6 items-center border-b-[0.5px] border-b-[#EDF5FA] py-5">
            <span className="text-xl lg:text-3xl text-black font-medium">
              02
            </span>
            <span className="text-lg lg:text-xl text-black font-normal">
              Let us verify your identity
            </span>
          </li>
          <li className="w-full flex gap-6 items-center py-5">
            <span className="text-xl lg:text-3xl text-black font-medium">
              03
            </span>
            <span className="text-lg lg:text-xl text-black font-normal">
              Your account is open; you can send <br /> your first payment
            </span>
          </li>
        </ol>
        <Button className="w-fit mb-4">Open An Account In Minutes</Button>
        <p className="text-grey text-xs md:text-sm font-medium">
          Try it for 30 days. For Free. No obligations
        </p>
      </div>
    </section>
  );
};

export default GetStarted;
