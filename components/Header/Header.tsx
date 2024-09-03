"use client";
import Link from "next/link";
import { navigation } from "./Header.data";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";

gsap.registerPlugin(useGSAP);

const HamburgerBtn: React.FC<{
  onClick: () => void;
  type: "menu" | "close";
}> = ({ onClick, type }) => (
  <button className="flex lg:hidden items-center gap-3" onClick={onClick}>
    <div className="flex flex-col w-[25px] gap-[6px]">
      {new Array(2).fill(0).map((_, index) => (
        <div
          key={index}
          className={`w-full h-[1px] ${
            type === "menu" ? "bg-white" : "bg-black"
          }`}
        />
      ))}
    </div>
    <span
      className={`text-base font-semibold  ${
        type === "menu" ? "text-white" : "text-black"
      }`}
    >
      {type === "menu" ? "Menu" : "Close"}
    </span>
  </button>
);

const Header = () => {
  const headerRef = useRef<HTMLElement | null>(null);
  const [navTimeline, setNavTimeline] = useState<gsap.core.Timeline | null>(
    null
  );

  useGSAP(
    () => {
      //mobile nav animation
      gsap.set("[data-anim='mobile-nav']", {
        pointerEvents: "none",
        autoAlpha: 0,
      });
      gsap.set("[data-anim='mobile-nav-overlay']", { width: 0 });
      gsap.set("[data-anim='mobile-link-text']", { y: 80, skewY: 5 });
      gsap.set("[data-anim='mobile-topbar']", { autoAlpha: 0, y: 30 });
      const timeline = gsap.timeline({ paused: true });

      setNavTimeline(timeline);

      timeline
        .to("[data-anim='mobile-nav']", {
          pointerEvents: "all",
          autoAlpha: 1,
          ease: "sine.inOut",
          duration: "0.00005",
        })
        .to("[data-anim='mobile-nav-overlay']", {
          width: "100%",
          stagger: 0.2,
          ease: "sine.inOut",
        })
        .to("[data-anim='mobile-topbar']", {
          autoAlpha: 1,
          y: 0,
          ease: "sine.inOut",
          duration: "0.2",
        })
        .to("[data-anim='mobile-link-text']", {
          y: 0,
          skewY: 0,
          stagger: 0.05,
          ease: "Power4.Out",
        });

      //header reveal on scroll
      // const handleScroll = () => {
      //   const headerContainer = headerRef?.current;
      //   if (headerContainer && window.scrollY >= 10) {
      //     gsap.set(headerContainer, {
      //       position: "fixed",
      //       background: "rgba(173, 138, 231, 0.9)",
      //       backdropFilter: "blur(10px)",
      //     });
      //   } else if (headerContainer) {
      //     gsap.set(headerContainer, {
      //       position: "absolute",
      //       background: "transparent",
      //       backdropFilter: "initial",
      //     });
      //   }
      // };

      // window.addEventListener("scroll", handleScroll);

      // return () => {
      //   window.removeEventListener("scroll", handleScroll);
      // };
    },
    {
      scope: headerRef,
    }
  );

  return (
    <header
      ref={headerRef}
      className="py-6 absolute top-0 left-0 w-full text-white z-[1000] bg-transparent h-[72px] flex items-center"
    >
      <div
        id="header-wrapper"
        className="main-container flex items-center justify-between "
      >
        <Link href={"/"} className="h-10 w-[80px] relative">
          <Image
            fill
            src="https://res.cloudinary.com/dexg5uy3d/image/upload/v1725202419/Screenshot_2024-09-01_at_3.53.30_PM_x5kyjw.png"
            alt=""
            className="object-cover"
          />
        </Link>
        {/* DESKTOP NAVBAR STARTS */}
        <nav className=" hidden lg:flex justify-center items-center gap-8">
          {navigation.map((navItem) => (
            <Link href={navItem.href} key={navItem.title} className="link">
              {navItem.title}
            </Link>
          ))}
        </nav>
        <div className=" hidden lg:flex items-center gap-8">
          <Link href={"#"} className="link">
            Login
          </Link>
          <Link href={"#"} className="button">
            Sign Up
          </Link>
        </div>
        {/* DESKTOP NAVBAR ENDS */}
        <HamburgerBtn onClick={() => navTimeline?.play()} type="menu" />
      </div>
      {/* MOBILE NAVBAR STARTS */}
      <nav
        className="flex flex-col lg:hidden fixed top-0 left-0 h-screen w-full px-4 z-[10000] pointer-events-none opacity-0 invisible"
        data-anim="mobile-nav"
      >
        {new Array(4).fill(0).map((_, index) => (
          <div
            key={index}
            data-anim="mobile-nav-overlay"
            style={{
              top: `${index * 25}%`,
            }}
            className={`h-[25%] w-full bg-white absolute right-0`}
          />
        ))}
        <div
          data-anim="mobile-topbar"
          className="w-full flex justify-between relative pt-6 z-50"
        >
          <div className="w-[100px] h-[20px] relative" />
          <HamburgerBtn
            onClick={() => {
              navTimeline?.reverse();
            }}
            type="close"
          />
        </div>
        <div className="flex flex-col flex-grow justify-center gap-10 py-6 relative">
          {navigation.map((navItem) => (
            <Link
              onClick={() => {
                navTimeline?.reverse();
              }}
              href={navItem.href}
              key={navItem.title}
              className="mobile-link"
            >
              <span data-anim="mobile-link-text" className="inline-block">
                {navItem.title}
              </span>
            </Link>
          ))}
          <Link
            href={"#"}
            onClick={() => {
              navTimeline?.reverse();
            }}
            className="mobile-link"
          >
            <span data-anim="mobile-link-text" className="inline-block">
              Login
            </span>
          </Link>
          <div className="overflow-hidden">
            <Link
              onClick={() => {
                navTimeline?.reverse();
              }}
              data-anim="mobile-link-text"
              href={"#"}
              className="button text-center text-xl inline-block"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </nav>
      {/* MOBILE NAVBAR ENDS */}
    </header>
  );
};

export default Header;
