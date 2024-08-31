import Button from "$/components/Button/Button";

const ContactForm = () => {
  return (
    <form className="bg-main main-container py-10 rounded-[40px] -mb-footer">
      <div className="flex flex-col gap-3 max-w-[600px] mx-auto items-center">
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
  );
};

export default ContactForm;
