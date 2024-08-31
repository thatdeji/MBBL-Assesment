import { otherPages, solutions } from "./Footer.data";

const Footer = () => {
  return (
    <footer className="bg-grey2 pt-footer pb-3">
      <div className="main-container">
        <div className="flex flex-wrap justify-between gap-14">
          <div className="flex flex-col gap-8">
            <div className="bg-white w-[150px] h-[40px]" />
            <p className="text-lg text-grey">Lorem Ipsum Lorem Ipsum</p>
            <div className="flex flex-col gap-2">
              <p className="text-xl text-grey">+999999999</p>
              <p className="text-base text-grey">teamforce@loremipsum.com</p>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <h4 className="text-2xl font-bold">Solutions</h4>
            <ul className="flex flex-col gap-3 list-disc ml-4">
              {solutions.map(({ name, link }) => (
                <li key={name} className="text-lg text-grey">
                  <a className="hover:underline" href={link}>
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-8">
            <h4 className="text-2xl font-bold">Other Pages</h4>
            <ul className="flex flex-col gap-3 list-disc ml-4">
              {otherPages.map(({ name, link }) => (
                <li key={name} className="text-lg text-grey">
                  <a className="hover:underline" href={link}>
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-8">
            <h4 className="text-2xl font-bold">Download App</h4>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
