import Button from "$/components/Button/Button";
// F7FBFD
const GetStarted = () => {
  return (
    <section className="flex justify-between gap-8 section flex-row main-container">
      <div className="w-[40%]"></div>
      <div className="flex flex-col w-[40%]">
        <p className="text-base text-black border-b-2 font-medium border-[#B5EA88] mb-4 w-fit">
          Open An Account
        </p>
        <h2 className="text-5xl text-black font-semibold mb-10">
          Let's get started
        </h2>
        <ol className="flex flex-col mb-1 list-none p-0 m-0 w-full">
          <li className="w-full flex gap-6 items-center border-b-[0.5px] border-b-purple-300 py-5">
            <span className="text-2xl text-black font-semibold">01</span>
            <span className="text-lg text-black font-medium">
              Sign up in a few minutes
            </span>
          </li>
          <li className="w-full flex gap-6 items-center border-b-[0.5px] border-b-purple-300 py-5">
            <span className="text-2xl text-black font-semibold">02</span>
            <span className="text-lg text-black font-medium">
              Let us verify your identity
            </span>
          </li>
          <li className="w-full flex gap-6 items-center py-5">
            <span className="text-2xl text-black font-semibold">03</span>
            <span className="text-lg text-black font-medium">
              Your account is open; you can send your first payment
            </span>
          </li>
        </ol>
        <Button className="w-fit mb-4">Open An Account In Minutes</Button>
        <p className="text-grey text-sm font-medium">
          Try it for 30 days. For Free. No obligations
        </p>
      </div>
    </section>
  );
};

export default GetStarted;
