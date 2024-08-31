import CardOne from "$/components/CardOne/CardOne";

const PaymentFeatures = () => {
  return (
    <section className="section bg-white main-container ">
      <div className="section__header">
        <h2 className="section__title">
          You'll love our <br /> powerful payments.
        </h2>
        <p className="section__description">
          We've got all your payments covered
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        {/* Card One */}
        <div>
          <CardOne
            title="Scan & Go"
            description={
              <>
                Transform your payment link into a QR code that customers can
                scan with their <br /> phone to pay.
              </>
            }
            variant="one"
            imageContent={<></>}
          />
        </div>
        {/* Card Two */}
        <div>
          <CardOne
            title="Easily Send Requests via e-mail or SMS"
            description={<>... or copy-paste the link.</>}
            variant="two"
            imageContent={<></>}
          />
        </div>
        {/* Card 3 (Full Width on Larger Screens */}
        <div className="col-span-1 md:col-span-2">
          <CardOne
            title="Online Billing & Invoicing Payments"
            description={
              <>
                Get paid faster with Online Invoicing <br /> and the Virtual
                Terminal.
              </>
            }
            variant="three"
            imageContent={<></>}
            extraContent={
              <a href="#" className="text-black font-semibold">
                Explore Invoicing Tools →
              </a>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default PaymentFeatures;
