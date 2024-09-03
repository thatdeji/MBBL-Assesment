"use client";
import logoData from "./PaymentMethods.json";
import useWindowWith from "$/hooks/useWindowWidth";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const PaymentMethods = () => {
  const payemntMethodsRef = useRef<HTMLElement | null>(null);
  const windowWidth = useWindowWith();

  const containerWidth = 1290;
  const containerHeight = 480;

  const width = windowWidth >= containerWidth ? containerWidth : windowWidth;

  const centerX = containerWidth / 2;
  const centerY = containerHeight / 2;

  useGSAP(
    () => {
      gsap.set("[data-anim='payment-methods-logo']", {
        opacity: 0,
        rotate: 10,
      });
      logoData.map((logo, index) => {
        gsap.set(`[data-anim='payment-methods-circle-${index}']`, {
          left:
            parseInt(logo.position.left.replace("px", "")) > centerX
              ? "100%"
              : "0%",
        });
      });
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#payment-methods-diagram",
          start: "top center",
        },
      });
      tl.from(`[data-anim='payment-methods-line']`, {
        scale: 0,
        ease: "sine.inOut",
        duration: 0.5,
        onComplete: () => {
          tl.to("[data-anim='payment-methods-logo']", {
            opacity: 1,
            rotate: 0,
            onComplete: () => {
              logoData.map((logo, index) => {
                gsap.to(`[data-anim='payment-methods-circle-${index}']`, {
                  left:
                    parseInt(logo.position.left.replace("px", "")) > centerX
                      ? "0%"
                      : "100%",
                  duration: 20,
                  repeat: -1,
                });
              });
            },
          });
        },
      });
    },
    {
      scope: payemntMethodsRef,
    }
  );

  return (
    <section
      ref={payemntMethodsRef}
      className="section main-container lg:mb-24"
    >
      <div className="section__header lg:mb-8">
        <h2 className="section__title">
          All major <br className="hidden lg:block" /> payment methods
        </h2>
        <p className="section__description">
          We&apos;ve got all your payments covered
        </p>
      </div>

      <figure
        id="payment-methods-diagram"
        style={{
          width: `${containerWidth}px`,
          height: `${containerHeight}px`,
          position: "relative",
          transform: `scale(${width / containerWidth})`,
          transformOrigin: "center",
          aspectRatio: "1290 / 480",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: `${centerY - 75}px`, // Center the logo
            left: `${centerX - 75}px`,
          }}
        >
          <img
            src="https://res.cloudinary.com/dexg5uy3d/image/upload/v1725307178/logo-main_r7f2x2.png"
            alt=""
            style={{
              position: "relative",
              width: "150px",
              height: "150px",
              borderRadius: "50%",
              boxShadow: "0px 20px 60px rgba(0, 0, 0, 0.1)",
              zIndex: 1,
            }}
          />
          {logoData.map((logo, index) => (
            <div
              data-anim={`payment-methods-line`}
              style={{
                height: "1px",
                backgroundColor: "#aee87c",
                position: "absolute",
                width: `${Math.abs(
                  Number(logo.position.left.replace("px", "")) - centerX
                )}px`,
                left: `${logo.line.left}`,
                top: `${logo.line.top}`,
                rotate: `${logo.line.rotate}`,
              }}
              key={index}
            >
              <div
                data-anim={`payment-methods-circle-${index}`}
                // data-anim="payment-methods-circle"
                style={{
                  display: "block",
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  transform: "translateY(-50%)",
                  backgroundColor: "#aee87c",
                  width: "7px",
                  height: "7px",
                  borderRadius: "5px",
                }}
              />
            </div>
          ))}
        </div>
        {logoData.map((logo, index) => (
          <img
            data-anim={"payment-methods-logo"}
            key={index}
            src={logo.src}
            alt={`Logo ${index}`}
            style={{
              position: "absolute",
              width: `${logo.width}px`,
              height: `${logo.height}px`,
              top: `calc(${logo.position.top})`,
              left: `calc(${logo.position.left})`,
            }}
          />
        ))}
      </figure>
    </section>
  );
};

export default PaymentMethods;
