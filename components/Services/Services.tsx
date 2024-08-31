import StackedCard from "$/components/StackedCard/StackedCard";
import { stats, tools } from "./Services.data";

const Services = () => {
  return (
    <section className="section max-w-[1280px] mx-auto pb-24">
      <div className="flex justify-between items-center w-full mb-10">
        <div className="">
          <h2 className="section__title text-left mb-4">
            We provide the <br /> best service for you
          </h2>
          <p className="section__description text-left">
            We've got all your payments covered
          </p>
        </div>
        <div className="flex items-center gap-10">
          {stats.map((item) => (
            <div key={item.name} className="flex flex-col gap-1">
              <h4 className="text-4xl text-black font-semibold">
                {item.value}
              </h4>
              <p className="text-base text-grey font-medium">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center gap-16 p-6 flex-1 w-full">
        {/* <!-- Card 1 --> */}
        <StackedCard icon={<>🌐</>} title="Online" variant="one" />
        {/* <!-- Card 2 --> */}
        <StackedCard icon={<>🏦</>} title="Bank Transfers" variant="two" />
        {/* <!-- Card 3 --> */}
        <StackedCard icon={<>⌨️</>} title="Keyed" variant="three" />
        {/* <!-- Card 4 --> */}
        <StackedCard icon={<>🕵️‍♂️</>} title="In-Person" variant="four" />
      </div>
      <article className="max-w-[1000px] w-full mx-auto bg-[#FBECEF] rounded-[30px] min-h-[200px] mt-36 p-12">
        <h3 className="text-2xl font-semibold text-black mb-6">
          More free tools than you can handle
        </h3>
        <ul className="list-disc grid grid-cols-4 gap-1 ml-4">
          {tools.map((tool) => (
            <li key={tool} className="text-base text-black font-medium w-fit">
              {tool}
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
};

export default Services;
