import Button from "$/components/Button/Button";
import Image from "next/image";

const Hero = () => (
  <section
    className="bg-main text-white min-h-screen flex flex-col items-stretch justify-end w-full pb-16 relative overflow-hidden"
    id="home"
  >
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex justify-center items-endh-fit">
      <div className="bg-main w-[48px] h-[38px] rounded-br-[38px] relative z-[10] translate-x-[11px]" />
      <div className="w-[70px] h-[70px] bg-white rounded-t-full translate-y-[38px] relative z-0" />
      <div className="bg-main w-[48px] h-[38px] rounded-bl-[38px] relative -translate-x-[11px] z-[10]" />
      <div className="" />
    </div>
    <div className="flex justify-between main-container mx-auto">
      <div className="flex flex-col max-w-[500px]">
        <h1 className="text-8xl text-white font-bold mb-10">
          The next generation payment ways.
        </h1>
        <Button className="mb-24 w-fit">Get started For Free</Button>
        <div className="">
          <p className="text-sm text-lightPurple font-normal mb-5">
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
              <div className=" w-8 h-8 border-2 border-main rounded-full -mr-2 relative">
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
  </section>
);

export default Hero;
