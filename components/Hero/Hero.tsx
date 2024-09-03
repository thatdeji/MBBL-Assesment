"use client";
import Button from "$/components/Button/Button";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef, useState } from "react";
import { heroTitles } from "./Hero.data";

gsap.registerPlugin(useGSAP);

const Hero = () => {
  const heroRef = useRef<HTMLElement | null>(null);
  const [order, setOrder] = useState<number[]>(heroTitles.map((_, i) => i));
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const hasMounted = useRef(false);

  useEffect(() => {
    const startInterval = () => {
      intervalRef.current = setInterval(() => {
        setOrder((prevOrder) => {
          const newOrder = [...prevOrder];
          newOrder.push(newOrder.shift() ?? 0);
          return newOrder;
        });
      }, 6000);
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        startInterval();
      } else {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    if (document.visibilityState === "visible") {
      startInterval();
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  useGSAP(
    () => {
      const [active, ...rest] = order;
      gsap.set(`[data-anim="hero-content-${active}"]`, {
        zIndex: 31,
        opacity: 1,
      });
      rest.forEach((i, index) => {
        gsap.set(`[data-anim="hero-title-container-${i}"]`, {
          overflow: "hidden",
        });
        gsap.set(`[data-anim="hero-button-${i}"]`, {
          opacity: 0,
        });
        gsap.set(`[data-anim="hero-title-${i}"]`, {
          opacity: 0,
          y: 50,
        });
        gsap.set(`[data-anim="hero-meta-${i}"]`, {
          opacity: 0,
          y: 500,
        });
        gsap.set(`[data-anim="hero-content-${i}"]`, {
          zIndex: 30,
          // opacity: 0,
        });
      });
      gsap.fromTo(
        "[data-anim='scroll-down']",
        {
          top: "4px",
        },
        {
          top: "calc(100% - 8px)",
          duration: 1,
          ease: "power1.inOut",
          repeat: -1,
          yoyo: true,
        }
      );
      gsap.to("[data-anim='hero-img-balance']", {
        repeat: -1,
        y: 25,
        yoyo: true,
        yoyoEase: true,
        ease: "sine.inOut",
        duration: 3.5,
      });
      gsap.to("[data-anim='hero-img-mastercard']", {
        repeat: -1,
        x: 40,
        yoyo: true,
        yoyoEase: true,
        ease: "sine.inOut",
        duration: 3.5,
      });
      gsap.to("[data-anim='hero-img-spotify']", {
        repeat: -1,
        x: -25,
        yoyo: true,
        yoyoEase: true,
        ease: "sine.inOut",
        duration: 3.5,
      });
      gsap.to("[data-anim='hero-img-phone']", {
        repeat: -1,
        rotate: 6,
        yoyo: true,
        yoyoEase: true,
        ease: "sine.inOut",
        duration: 3.5,
      });
    },
    {
      scope: heroRef,
    }
  );

  useGSAP(
    () => {
      if (!hasMounted.current) {
        hasMounted.current = true;
        return;
      }
      const [active, ...rest] = order;
      const prv = rest[rest.length - 1];
      order.forEach((i) => {
        gsap.set(`[data-anim="hero-content-${i}"]`, {
          opacity: 1,
        });
      });
      [...rest].forEach((i, index) => {
        gsap.set(`[data-anim="hero-content-${i}"]`, {
          zIndex: 30,
        });
        gsap.to(`[data-anim="hero-title-container-${i}"]`, {
          overflow: "hidden",
        });
        gsap.to(`[data-anim="hero-button-${i}"]`, {
          opacity: 0,
        });
        gsap.to(`[data-anim="hero-title-${i}"]`, {
          opacity: 0,
          y: 50,
        });
        gsap.to(`[data-anim="hero-meta-${i}"]`, {
          opacity: 0,
          y: 500,
        });
      });
      gsap.set(`[data-anim="hero-content-${prv}"]`, {
        zIndex: 30,
      });
      gsap.set(`[data-anim="hero-content-${active}"]`, {
        zIndex: 31,
      });
      gsap.set(`[data-anim="hero-content-${active}"]`, {
        overflow: "hidden",
      });
      gsap.to(`[data-anim="hero-button-${prv}"]`, {
        opacity: 0,
        duration: 0.2,
      });
      gsap.to(`[data-anim="hero-meta-${prv}"]`, {
        opacity: 0,
        y: 500,
        duration: 0.5,
      });
      gsap.to(`[data-anim="hero-title-${prv}"]`, {
        opacity: 0,
        y: 50,
        duration: 0.4,
        ease: "sine.inOut",
        onComplete: () => {
          gsap.to(`[data-anim="hero-title-${active}"]`, {
            opacity: 1,
            y: 0,
            ease: "sine.inOut",
            duration: 0.5,
          });
          gsap.to(`[data-anim="hero-button-${active}"]`, {
            opacity: 1,
            duration: 0.2,
          });
          gsap.to(`[data-anim="hero-meta-${active}"]`, {
            opacity: 1,
            duration: 0.5,
            y: 0,
          });
        },
      });
    },
    {
      scope: heroRef,
      dependencies: [order],
    }
  );

  return (
    <section
      ref={heroRef}
      className=" text-white min-h-[70vh] md:min-h-screen 2xl:min-h-[878px] flex flex-col items-stretch justify-center xl:justify-end w-full pt-36 relative overflow-hidden"
      id="home"
    >
      {/* HERO BG */}
      <div className="min-h-full w-full absolute top-0 left-0">
        <Image
          src="https://res.cloudinary.com/dexg5uy3d/image/upload/v1725152783/hero-bg_gsmbva.png"
          alt=""
          className="bg-main object-cover"
          fill
        />
      </div>

      <div className="relative flex flex-col xl:flex-row justify-between main-container mx-auto">
        <div className="xl:max-w-[500px] min-h-[400px] md:min-h-[600px] relative">
          {heroTitles.map((title, index) => (
            <div
              data-anim={`hero-content-${index}`}
              key={index}
              className="absolute top-1/2 -translate-y-1/2 left-0 flex flex-col pb-2 md:pb-6 opacity-0"
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl text-white font-semibold mb-5 md:mb-10">
                {title.split(" ").map((word, wordIndex) => (
                  <span
                    key={wordIndex}
                    data-anim={`hero-title-container-${index}`}
                    className="inline-block"
                  >
                    <span
                      data-anim={`hero-title-${index}`}
                      className="inline-block mr-4"
                    >
                      {word + " "}
                    </span>
                  </span>
                ))}
              </h1>
              <div className="overflow-hidden">
                <Button
                  data-anim={`hero-button-${index}`}
                  className="inline-block mb-5 md:mb-24 w-fit"
                >
                  Get started For Free
                </Button>
              </div>
              <div className="overflow-hidden">
                <div data-anim={`hero-meta-${index}`}>
                  <p className="text-xs md:text-sm text-lightPurple font-normal mb-5">
                    Over <span className="text-white">50k+ Client</span> all
                    over the world
                  </p>
                  <div className="flex items-center">
                    {[
                      "https://res.cloudinary.com/dexg5uy3d/image/upload/v1720012832/Rectangle_2-2_gd4fyn.png",
                      "https://res.cloudinary.com/dexg5uy3d/image/upload/v1720012832/Rectangle_2-1_ej6tvp.png",
                      "https://res.cloudinary.com/dexg5uy3d/image/upload/v1720012832/Rectangle_2_abzoz5.png",
                      "https://res.cloudinary.com/dexg5uy3d/image/upload/v1712711318/oye_c0di3s.png",
                    ].map((img, index) => (
                      <div
                        key={index}
                        className="w-6 h-6 md:w-8 md:h-8 border-2 border-main rounded-full -mr-2 relative"
                      >
                        <Image
                          fill
                          src={img}
                          alt=""
                          className=" rounded-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* BG ILLUSTRATIONS */}
        <div className="translate-x-[50px] lg:translate-x-[150px] relative hidden lg:flex">
          <Image
            width={164}
            height={144}
            alt=""
            data-anim="hero-img-balance"
            className="absolute bottom-[18%] left-[-18%] hidden md:block"
            src="https://res.cloudinary.com/dexg5uy3d/image/upload/v1725201485/hero-img-2-4_twzjnh.png"
          />
          <Image
            width={560}
            height={761}
            alt=""
            data-anim="hero-img-phone"
            className="hidden md:block"
            src="https://res.cloudinary.com/dexg5uy3d/image/upload/v1725201486/hero-img-2-1_yjo2wt.png"
          />
          <Image
            width={284}
            height={164}
            alt=""
            data-anim="hero-img-mastercard"
            className="absolute top-[25%] left-[30%] backdrop-blur-[12px] hidden md:block"
            src="https://res.cloudinary.com/dexg5uy3d/image/upload/v1725201484/image_02_vaisrp.png"
          />
          <Image
            width={329}
            height={134}
            alt=""
            data-anim="hero-img-spotify"
            className="absolute top-[48%] left-[25%] hidden md:block"
            src="https://res.cloudinary.com/dexg5uy3d/image/upload/v1725201484/hero-img-2-3_qfa8ak.png"
          />
        </div>
      </div>

      {/* SCROLL DOWN */}
      <div className="absolute bottom-0 left-1/2 translate-y-3 lg:translate-y-2 -translate-x-1/2 w-[200px] h-[65px] lg:w-[260px] lg:h-[75px] flex flex-col gap-1 justify-center items-center">
        <div className="absolute top-0 left-0 w-full h-full">
          <Image
            fill
            alt=""
            src="https://res.cloudinary.com/dexg5uy3d/image/upload/v1725153314/scroll-down_edgr3k.png"
          />
        </div>
        <a
          href="#payment-features"
          className="relative w-2 h-4 lg:w-4 lg:h-6 rounded-3xl border-black border flex justify-center p-1"
        >
          <span
            data-anim="scroll-down"
            className="absolute left-1/2 -translate-x-1/2 inline-block w-1 h-1 lg:w-[5px] lg:h-[5px] border border-black rounded-full"
          />
        </a>
        <p className="relative text-xs lg:text-sm text-black">Scroll down</p>
      </div>
    </section>
  );
};

export default Hero;
