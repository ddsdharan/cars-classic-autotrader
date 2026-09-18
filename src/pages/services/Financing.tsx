import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

import financingImage from "../../assets/services/service-financing.jpg";



const FinancingPage = () => {
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
              FINANCING
            </h1>
          </div>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start lg:gap-14 xl:gap-[54px]">
            <div className="overflow-hidden rounded-[10px]">
              <img
                src={financingImage}
                alt="Financing options"
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
                  Our financing options are designed to accommodate various budgets and preferences. 
                  Whether you are a seasoned collector or a first-time buyer, our team is dedicated to 
                  finding a financing plan that suits your needs. Benefit from competitive interest rates 
                  and straightforward terms that align with the timeless value of the classic car you desire.
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
                  Applying for financing with us is a hassle-free process. Our knowledgeable team is ready to 
                  guide you through the application, ensuring that you have a clear understanding of the 
                  terms and conditions. We believe in transparency, and our commitment is to provide you with
                  a financing solution that enhances your enjoyment of the classic car of your dreams.
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
                  Take the next step in your journey to classic car ownership by exploring our financing options. 
                  ALL CLASSIC MOTORS VELVA is here to make your dream car a reality, with financing plans that 
                  reflect our dedication to your satisfaction and the preservation of automotive history.
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

export default FinancingPage;