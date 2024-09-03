"use client";
import Card from "$/components/Card/Card";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const PaymentFeatures = () => {
  const payemntFeaturesRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      gsap.set("[data-anim='card-bg-img']", {
        y: 25,
        opacity: 0,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#payment-features",
          start: "top center",
        },
      });
      tl.to("[data-anim='card-bg-img']", {
        y: 0,
        opacity: 1,
        ease: "sine.inOut",
        stagger: 0.1,
      });
    },
    {
      scope: payemntFeaturesRef,
    }
  );

  return (
    <section
      ref={payemntFeaturesRef}
      className="section bg-white main-container"
    >
      <div className="section__header mb-6 lg:mb-12">
        <h2 className="section__title">
          You'll love our <br className="hidden lg:block" /> powerful payments.
        </h2>
        <p className="section__description">
          We've got all your payments covered
        </p>
      </div>
      <div
        id="payment-features"
        className="grid grid-cols-1 lg:grid-cols-2 gap-6  lg:p-6"
      >
        {/* Card One */}
        <div>
          <Card
            title="Scan & Go"
            description={
              <>
                Transform your payment link into a QR code that customers can
                scan with their <br className="hidden lg:block" /> phone to pay.
              </>
            }
            variant="one"
            imageContent={
              <>
                <div
                  data-anim="card-bg-img"
                  className="absolute bottom-[20%] -left-[15px] w-12 h-14"
                >
                  <Image
                    fill
                    alt=""
                    src="https://res.cloudinary.com/dexg5uy3d/image/upload/v1725199155/coin-2_kj3jbh.png"
                  />
                </div>
                <div
                  data-anim="card-bg-img"
                  className="absolute bottom-[-20px] left-[10%] w-[70px] h-[72px]"
                >
                  <Image
                    fill
                    alt=""
                    src="https://res.cloudinary.com/dexg5uy3d/image/upload/v1725199154/coin-1_etlump.png"
                  />
                </div>
                <div
                  data-anim="card-bg-img"
                  className="absolute bottom-[-20%] xl:bottom-[10%] left-[30%] w-[150px] h-[150px]"
                >
                  <Image
                    fill
                    alt=""
                    src="https://res.cloudinary.com/dexg5uy3d/image/upload/v1725199153/qrcode_ymwosh.png"
                  />
                </div>
                <div
                  data-anim="card-bg-img"
                  className="absolute hidden lg:block bottom-[-70%] xl:bottom-[-40%] right-[5%] w-[417px] h-[413px]"
                >
                  <Image
                    fill
                    alt=""
                    src="https://res.cloudinary.com/dexg5uy3d/image/upload/v1725199154/mobile_1_tvgwlb.png"
                  />
                </div>
                <div
                  data-anim="card-bg-img"
                  className="absolute bottom-[25px] right-[-30px] lg:right-[25px] w-[81px] h-[49px]"
                >
                  <Image
                    fill
                    alt=""
                    src="https://res.cloudinary.com/dexg5uy3d/image/upload/v1725199993/hand_lxv90a.png"
                  />
                </div>
              </>
            }
          />
        </div>
        {/* Card Two */}
        <div>
          <Card
            title="Easily Send Requests via e-mail or SMS"
            description={<>... or copy-paste the link.</>}
            variant="two"
            imageContent={
              <>
                <div
                  data-anim="card-bg-img"
                  className="hidden xl:block absolute bottom-[-10px] right-[0] w-[300px] h-[253px]"
                >
                  <Image
                    fill
                    alt=""
                    src="https://res.cloudinary.com/dexg5uy3d/image/upload/v1725200355/payment-3_twdrs8.png"
                  />
                </div>
                <div
                  data-anim="card-bg-img"
                  className="absolute bottom-[-30%] md:bottom-[-10%] xl:bottom-[-6%] right-[-40%] md:right-[-30%] xl:left-[30%] w-[307px] h-[307px]"
                >
                  <Image
                    fill
                    alt=""
                    src="https://res.cloudinary.com/dexg5uy3d/image/upload/v1725200355/message_faxvm3.png"
                  />
                </div>
              </>
            }
          />
        </div>
        {/* Card 3 (Full Width on Larger Screens */}
        <div className="col-span-1 lg:col-span-2">
          <Card
            title="Online Billing & Invoicing Payments"
            description={
              <>
                Get paid faster with Online Invoicing <br /> and the Virtual
                Terminal.
              </>
            }
            variant="three"
            imageContent={
              <>
                <div
                  data-anim="card-bg-img"
                  className="absolute bottom-[20%] lg:bottom-[10%] right-[-15%] lg:right-[10%] xl:right-[28%] w-[100px] h-[108px] lg:w-[200px] lg:h-[208px]"
                >
                  <Image
                    fill
                    alt=""
                    src="https://res.cloudinary.com/dexg5uy3d/image/upload/v1725200785/get-paid_eb9j7a.png"
                  />
                </div>
                <div
                  data-anim="card-bg-img"
                  className="absolute hidden lg:block lg:bottom-[-10%] xl:bottom-[-5%] lg:right-[-30%] xl:right-[2%] w-[311px] h-[364px]"
                >
                  <Image
                    fill
                    alt=""
                    src="https://res.cloudinary.com/dexg5uy3d/image/upload/v1725200786/image_7_idmhnp.png"
                  />
                </div>
              </>
            }
            extraContent={
              <a href="#" className="text-black font-semibold">
                Explore Invoicing Tools →
              </a>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default PaymentFeatures;
