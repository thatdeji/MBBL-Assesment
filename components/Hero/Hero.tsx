import Button from "$/components/Button/Button";
import Image from "next/image";

const Hero = () => (
  <section
    className=" text-white min-h-[80vh] md:min-h-screen 2xl:min-h-[878px] flex flex-col items-stretch justify-center xl:justify-end w-full pt-32 relative overflow-hidden"
    id="home"
  >
    <div className="min-h-full w-full absolute top-0 left-0">
      <Image
        src="https://res.cloudinary.com/dexg5uy3d/image/upload/v1725152783/hero-bg_gsmbva.png"
        alt=""
        className="bg-main object-cover"
        fill
      />
    </div>
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
        <span className="w-1 h-1 lg:w-[5px] lg:h-[5px] inline-block border border-black rounded-full" />
      </a>
      <p className="relative text-xs lg:text-sm text-black">Scroll down</p>
    </div>
    <div className="relative flex justify-between main-container mx-auto">
      <div className="flex flex-col xl:max-w-[500px] pb-2 md:pb-16">
        <h1 className="text-4xl md:text-7xl lg:text-8xl text-white font-semibold mb-5 md:mb-10">
          The next generation payment ways.
        </h1>
        <Button className="mb-5 md:mb-24 w-fit">Get started For Free</Button>
        <div className="">
          <p className="text-xs md:text-sm text-lightPurple font-normal mb-5">
            Over <span className="text-white">50k+ Client</span> all over the
            world
          </p>
          <div className="flex items-center">
            {[
              "https://res.cloudinary.com/dexg5uy3d/image/upload/v1720012832/Rectangle_2-2_gd4fyn.png",
              "https://res.cloudinary.com/dexg5uy3d/image/upload/v1720012832/Rectangle_2-1_ej6tvp.png",
              "https://res.cloudinary.com/dexg5uy3d/image/upload/v1720012832/Rectangle_2_abzoz5.png",
              "https://res.cloudinary.com/dexg5uy3d/image/upload/v1712711318/oye_c0di3s.png",
            ].map((img, index) => (
              <div className="w-6 h-6 md:w-8 md:h-8 border-2 border-main rounded-full -mr-2 relative">
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
      <div className="translate-x-[150px] relative hidden xl:block">
        <Image
          width={284}
          height={164}
          alt=""
          className="absolute top-[25%] left-[30%] backdrop-blur-[12px]"
          src="https://res.cloudinary.com/dexg5uy3d/image/upload/v1725201484/image_02_vaisrp.png"
        />
        <Image
          width={329}
          height={134}
          alt=""
          className="absolute top-[48%] left-[25%]"
          src="https://res.cloudinary.com/dexg5uy3d/image/upload/v1725201484/hero-img-2-3_qfa8ak.png"
        />
        <Image
          width={164}
          height={144}
          alt=""
          className="absolute bottom-[18%] left-[-18%]"
          src="https://res.cloudinary.com/dexg5uy3d/image/upload/v1725201485/hero-img-2-4_twzjnh.png"
        />
        <Image
          width={560}
          height={761}
          alt=""
          className="hidden xl:block"
          src="https://res.cloudinary.com/dexg5uy3d/image/upload/v1725201486/hero-img-2-1_yjo2wt.png"
        />
      </div>
    </div>
  </section>
);

export default Hero;
