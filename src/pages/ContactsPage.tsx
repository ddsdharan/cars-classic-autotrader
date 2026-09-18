import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import FormButton from "../components/forms/FormButton";

import contactImage from "../assets/images/location-map.png";

const ContactsPage: React.FC = () => {
  return (
    <main className="bg-[#f8f8f6] text-[#393a36]">
      <Header />
      <section className="px-6 py-12 sm:px-8 md:px-12 lg:px-[55px] lg:pt-[48px] lg:pb-[70px]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_430px]">
          <div>
            <h1
              className="
                text-[64px]
                font-medium
                leading-[0.95]
                tracking-[-3px]
                sm:text-[80px]
                md:text-[96px]
                lg:text-[100px]
                xl:text-[104px]
              "
            >
              Contacts
            </h1>
          </div>

          <div className="flex flex-col">
            <div>
              <a
                href="tel:+17015811331"
                className="
                  block
                  text-[22px]
                  font-semibold
                  leading-tight
                  tracking-[-0.7px]
                  transition-opacity
                  hover:opacity-60
                  sm:text-[24px]
                "
              >
                +1 (701) 581-1331
              </a>

              <p
                className="
                  mt-5
                  text-[13px]
                  font-normal
                  leading-[1.5]
                  tracking-[-0.3px]
                  sm:text-[14px]
                "
              >
                161 Trumpeter Ave, Soldotna, Alaska
              </p>
            </div>
            <FormButton
              className="
                mt-16
                flex
                h-[49px]
                w-full
                max-w-[278px]
                items-center
                justify-center
                rounded-full
                bg-[#393a36]
                px-6
                text-[13px]
                font-semibold
                text-white
                transition-all
                duration-300
                hover:bg-[#292a27]
                sm:mt-[62px]
              "
            >
              Submit your application
            </FormButton>
          </div>
        </div>

        <div
          className="
            mt-[70px]
            w-full
            overflow-hidden
            border
            border-[#393a36]
            sm:mt-[80px]
            lg:mt-[85px]
          "
        >
          <img
            src={contactImage}
            alt="Map showing Cars Classic Autotrader location"
            className="
              block
              h-[400px]
              w-full
              object-cover
              object-center
              sm:h-[500px]
              md:h-[560px]
              lg:h-[600px]
              xl:h-[620px]
            "
          />
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default ContactsPage;