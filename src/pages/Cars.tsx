import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import CarsGrid from "../components/car/CarsGrid";

const Cars = () => {
  return (
    <div className="min-h-screen bg-[#f7f7f5] text-[#383936]">
      <Header />

      <main>
        <section className="px-6 pb-14 pt-14 md:px-8 md:pb-16 md:pt-16 lg:px-10 lg:pb-20 lg:pt-20">
          <div className="mx-auto flex max-w-[1400px] flex-col items-start gap-3 md:flex-row md:items-end md:justify-between md:gap-8">
            <h1
              className="
                text-[clamp(42px,14vw,112px)]
                font-medium
                leading-[0.9]
                tracking-[-0.08em]
                md:text-[clamp(52px,8vw,112px)]
              "
            >
              Our cars
            </h1>

            <span
              className="
                mb-2
                flex
                h-[44px]
                min-w-[105px]
                items-center
                justify-center
                rounded-full
                border
                border-[#383936]
                px-5
                text-[17px]
                md:mb-3
              "
            >
              32 cars
            </span>
          </div>
        </section>
        <CarsGrid />
        </main>
        <Footer />
        </div>
        );
      };
export default Cars;