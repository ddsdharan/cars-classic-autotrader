import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

import shippingImage from "../../assets/services/service-shipping.jpg";

const ShippingPage = () => {
  return (
    <div className="min-h-screen bg-[#f5f5f3] text-[#383936]">
      <Header />

      <main>
        <section className="px-5 py-12 sm:px-8 md:px-10 lg:px-14 xl:px-[54px] lg:pt-14 lg:pb-24">
          <div className="mb-10 lg:mb-14">
            <h1
              className="
                font-['Unbounded']
                text-[56px]
                font-medium
                leading-[0.95]
                tracking-[-3px]
                sm:text-[72px]
                md:text-[90px]
                lg:text-[105px]
                xl:text-[120px]
              "
            >
              SHIPPING
            </h1>
          </div>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start lg:gap-14 xl:gap-[54px]">
            <div className="overflow-hidden rounded-[10px]">
              <img
                src={shippingImage}
                alt="Classic cars being transported"
                className="
                  block
                  h-[360px]
                  w-full
                  object-cover
                  sm:h-[450px]
                  md:h-[520px]
                  lg:h-[505px]
                  xl:h-[505px]
                "
              />
            </div>
            <div className="flex h-full flex-col">
              <div className="max-w-[850px]">
                <p
                  className="
                    font-['Unbounded']
                    text-[14px]
                    font-normal
                    leading-[1.8]
                    tracking-[-0.4px]
                    sm:text-[15px]
                    lg:text-[16px]
                  "
                >
                  We partner with trusted shipping professionals experienced
                  in handling classic automobiles. From meticulous loading to
                  secure transit, we prioritize the safety of your vehicle
                  throughout its journey to your doorstep. Our global shipping
                  network allows us to cater to enthusiasts worldwide, bringing
                  the allure of classic cars to every corner of the globe.
                </p>

                <p
                  className="
                    mt-7
                    font-['Unbounded']
                    text-[14px]
                    font-normal
                    leading-[1.8]
                    tracking-[-0.4px]
                    sm:text-[15px]
                    lg:text-[16px]
                  "
                >
                  Rest easy knowing that your classic car is in the hands of
                  experts who share your passion for preserving automotive
                  history. Whether it's a local delivery or an international
                  shipment, ALL CLASSIC MOTORS VELVA is committed to ensuring
                  that your timeless vehicle arrives with the same elegance
                  and care it had in our showroom.
                </p>

                <p
                  className="
                    mt-7
                    font-['Unbounded']
                    text-[14px]
                    font-normal
                    leading-[1.8]
                    tracking-[-0.4px]
                    sm:text-[15px]
                    lg:text-[16px]
                  "
                >
                  Experience worry-free shipping with ALL CLASSIC MOTORS VELVA
                  and let us bring the joy of classic cars directly to you.
                  Your journey with your classic car starts from the moment it
                  leaves our hands to the moment it arrives at yours.
                </p>
              </div>
              <div className="mt-10 lg:mt-auto lg:pt-12">
                <button
                  type="button"
                  className="
                    flex
                    h-[50px]
                    w-full
                    items-center
                    justify-center
                    rounded-full
                    bg-[#383936]
                    px-8
                    font-['Unbounded']
                    text-[13px]
                    font-medium
                    text-white
                    transition-all
                    duration-300
                    hover:bg-[#292a28]
                    sm:w-[275px]
                  "
                >
                  Deliver the car
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      </div>
  );
};

export default ShippingPage;