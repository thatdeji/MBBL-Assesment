import ContactForm from "$/components/ContactForm/ContactForm";
import FAQ from "$/components/FAQ/FAQ";
import GetStarted from "$/components/GetStarted/GetStarted";
import Hero from "$/components/Hero/Hero";
import PaymentFeatures from "$/components/PaymentFeatures/PaymentFeatures";
import PaymentMethods from "$/components/PaymentMethods/PaymentMethods";
import Services from "$/components/Services/Services";
import Testimonials from "$/components/Testimonials/Testimonials";
import { Wavy } from "$/vectors/wavy";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <PaymentFeatures />
      <PaymentMethods />
      <div className="w-full h-[320px]">
        <Wavy />
      </div>
      <div className="bg-grey2 w-full">
        <div className="">
          <Services />
        </div>
      </div>
      <GetStarted />
      <Testimonials />
      <FAQ />
      <ContactForm />
    </main>
  );
}
