import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

import warrantyImage from "../../assets/services/service-warranty.jpg";


const WarrantyPurchasePage = () => {
  return (
    <div className="min-h-screen bg-[#f5f5f3] text-[#383936]">
      <Header />

      <main>
        <section className="px-5 py-12 sm:px-8 md:px-10 lg:px-14 xl:px-[58px] lg:pt-14 lg:pb-24">
            <div className="mb-10 lg:mb-14">
            <h1
              className="
                font-['Unbounded']
                text-[48px]
                font-medium
                leading-[0.95]
                tracking-[-3px]
                sm:text-[65px]
                md:text-[80px]
                lg:text-[95px]
                xl:text-[120px]
              "
            >
              WARRANTY PURCHASE
            </h1>
          </div>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start lg:gap-14 xl:gap-[54px]">
            <div className="overflow-hidden rounded-[10px]">
              <img
                src={warrantyImage}
                alt="Mechanic servicing a vehicle"
                className="
                  block
                  h-[360px]
                  w-full
                  object-cover
                  object-center
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
                  Our comprehensive warranty options provide an added layer of
                  protection, ensuring that you can fully enjoy the beauty of
                  your timeless vehicle without worry.
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
                  Choose from our range of warranty packages tailored to meet
                  the unique needs of classic car enthusiasts. Our warranties
                  cover essential components, providing you with confidence and
                  assurance in the reliability of your cherished automobile.
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
                  With ALL CLASSIC MOTORS VELVA's warranty options, you're not
                  just investing in protection; you're investing in the
                  longevity and continued performance of your classic car. Our
                  commitment to your satisfaction extends beyond the showroom,
                  offering a safety net that aligns with the timeless quality
                  of the vehicles in our collection.
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
                  I want to put
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
export default WarrantyPurchasePage;