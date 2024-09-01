import StackedCard from "$/components/StackedCard/StackedCard";
import Image from "next/image";
import { stats, tools } from "./Services.data";
import { Brush } from "$/vectors/brush";

const Services = () => {
  return (
    <section className="relative w-full lg:pt-36">
      <div className="absolute top-0 left-0 w-full h-[80px] md:h-[100px] lg:h-[420px]">
        <Image
          fill
          alt=""
          src="https://res.cloudinary.com/dexg5uy3d/image/upload/v1725155710/sv-bg-2-1_xdrrtc.png"
        />
      </div>
      <div className="section lg:px-16 main-container pb-10 md:pb-12 lg:pb-24">
        <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-3 w-full mb-10 relative">
          <div className="mb-6 lg:mb-0">
            <h2 className="section__title text-left lg:mb-4">
              We provide the <br className="hidden lg:block" /> best service for
              you
            </h2>
            <p className="section__description text-left">
              We've got all your payments covered
            </p>
          </div>
          <div className="flex lg:items-center gap-2 lg:gap-10 relative">
            <div className="absolute -bottom-4 left-0 w-full h-[18px]">
              <Brush />
            </div>
            {stats.map((item) => (
              <div key={item.name} className="flex flex-col lg:gap-1">
                <h4 className="text-xl lg:text-4xl text-black font-semibold">
                  {item.value}
                </h4>
                <p className="text-xs lg:text-sm text-grey font-medium">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 place-items-stretch gap-10 p-6 w-full">
          {/* <!-- Card 1 --> */}
          <div className="h-full">
            <StackedCard
              icon={
                <div className="relative w-7 h-7 lg:w-10 lg:h-10">
                  <Image
                    src="https://res.cloudinary.com/dexg5uy3d/image/upload/v1725158147/sv-icon-2-1_ltimof.png"
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
              }
              title="Online"
              variant="one"
            />
          </div>
          {/* <!-- Card 2 --> */}
          <div className="h-full">
            <StackedCard
              icon={
                <div className="relative w-8 h-7 lg:w-11 lg:h-10">
                  <Image
                    src="https://res.cloudinary.com/dexg5uy3d/image/upload/v1725158147/sv-icon-2-2_fkfvfz.png"
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
              }
              title="Bank Transfers"
              variant="two"
            />
          </div>
          {/* <!-- Card 3 --> */}
          <div className="h-full">
            <StackedCard
              icon={
                <div className="relative w-8 h-5 lg:w-10 lg:h-7">
                  <Image
                    src="https://res.cloudinary.com/dexg5uy3d/image/upload/v1725158147/sv-icon-2-3_drvsp0.png"
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
              }
              title="Keyed"
              variant="three"
            />
          </div>
          {/* <!-- Card 4 --> */}
          <div className="h-full">
            <StackedCard
              icon={
                <div className="relative w-7 h-6 lg:w-10 lg:h-9">
                  <Image
                    src="https://res.cloudinary.com/dexg5uy3d/image/upload/v1725158147/sv-icon-2-4_p96tex.png"
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
              }
              title="In-Person"
              variant="four"
            />
          </div>
        </div>
        <article className="max-w-[1000px] w-full mx-auto bg-[#FBECEF] rounded-[30px] min-h-[200px] mt-10 md:mt-12 lg:mt-24 p-6 lg:p-12">
          <h3 className="text-2xl font-semibold text-black mb-6">
            More free tools than you can handle
          </h3>
          <ul className="list-disc grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-3 ml-4">
            {tools.map((tool) => (
              <li key={tool} className="text-base text-black font-medium w-fit">
                {tool}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
