import Button from "$/components/Button/Button";
import Image from "next/image";

const ContactForm = () => {
  return (
    <section className="main-container">
      <form className="relative py-10 px-4 rounded-[40px] -mb-footer overflow-hidden">
        <div className="h-full w-full absolute top-0 left-0">
          <Image
            src="https://res.cloudinary.com/dexg5uy3d/image/upload/v1725161340/testi-bg-2-1_nrdq1l.png"
            alt=""
            className="bg-main object-cover"
            fill
          />
        </div>
        <div className="relative flex flex-col gap-3 max-w-[600px] mx-auto items-center">
          <input className="input" placeholder="Full name" />
          <input className="input" placeholder="Email address" />
          <input className="input" placeholder="Phone number" />
          <textarea
            className="textarea"
            placeholder="Enter your message"
          ></textarea>
          <Button className="w-fit">Get Started Now</Button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
