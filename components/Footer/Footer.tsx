import { Mail } from "$/vectors/mail";
import { Phone } from "$/vectors/phone";
import Image from "next/image";
import { otherPages, socials, solutions } from "./Footer.data";

const Footer = () => {
  return (
    <footer className="bg-grey2 pt-footer pb-6">
      <div className="main-container">
        <div className="flex flex-wrap justify-between gap-14">
          <div className="flex flex-col gap-8">
            <div className="w-[150px] h-[40px] relative">
              <Image
                fill
                src="https://res.cloudinary.com/dexg5uy3d/image/upload/v1725202537/Screenshot_2024-09-01_at_3.55.01_PM_pqqrhz.png"
                alt=""
                className="object-cover"
              />
            </div>
            <p className="text-lg text-grey">Lorem Ipsum Lorem Ipsum</p>
            <div className="flex flex-col gap-2">
              <a href="tel:+999999999" className="flex items-center gap-2">
                <div className="w-6 h-6">
                  <Phone />
                </div>
                <p className="text-xl text-grey">+999999999</p>
              </a>
              <a
                href="mailto:teamforce@loremipsum.com"
                className="flex items-center gap-2"
              >
                <div className="w-5 h-5">
                  <Mail />
                </div>
                <p className="text-base text-grey">teamforce@loremipsum.com</p>
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <h4 className="text-2xl font-semibold">Solutions</h4>
            <ul className="flex flex-col gap-3 list-disc ml-4">
              {solutions.map(({ name, link }) => (
                <li key={name} className="text-base text-grey">
                  <a className="hover:underline" href={link}>
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-8">
            <h4 className="text-2xl font-semibold">Other Pages</h4>
            <ul className="flex flex-col gap-3 list-disc ml-4">
              {otherPages.map(({ name, link }) => (
                <li key={name} className="text-base text-grey">
                  <a className="hover:underline" href={link}>
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-8">
            <h4 className="text-2xl font-semibold">Download App</h4>
            <div className="flex gap-4">
              <div className="">
                <Image
                  alt=""
                  className="max-w-full h-auto rounded-[10px]"
                  width={101}
                  height={100}
                  src="https://res.cloudinary.com/dexg5uy3d/image/upload/v1725163647/dwnld-1_sueb5o.png"
                />
              </div>
              <div className="flex flex-col gap-4">
                <a href="#" target="_blank">
                  <Image
                    alt=""
                    className="max-w-full h-auto rounded-[10px]"
                    width={130}
                    height={36}
                    src="https://res.cloudinary.com/dexg5uy3d/image/upload/v1725163646/dwnld-2_ssp4wc.png"
                  />
                </a>
                <a href="#" target="_blank">
                  <Image
                    alt=""
                    className="max-w-full h-auto rounded-[10px]"
                    width={147}
                    height={36}
                    src="https://res.cloudinary.com/dexg5uy3d/image/upload/v1725163647/dwnld-3_p6w8lt.png"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row flex-wrap gap-4 justify-between border-t border-t-[#DFDFEA] mt-20">
          <div className="flex gap-2 items-center order-1">
            {socials.map(({ name, link, icon }) => (
              <a
                className="bg-white w-9 h-9 flex items-center justify-center rounded-[10px] shadow-icon"
                key={name}
                href={link}
                target="_blank"
              >
                {icon}
              </a>
            ))}
          </div>
          <p className="text-grey text-base text-center order-3 md:order-2">
            Full Copyright & Design By Teamforce © 2024
          </p>
          <div className="bg-white w-[120px] h-8 rounded-[10px] items-center px-4 flex gap-1 order-2 md:order-3">
            <p className="text-xs font-normal text-grey">English (US)</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
