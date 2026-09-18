import React from "react";
import Header from "../components/header/Header";
import FAQ from "../components/common/FAQ";
import Footer from "../components/footer/Footer";
import AboutStats from "../components/common/AboutStats";

const AboutPage: React.FC = () => {
  return (
    <main className="bg-[#f8f8f6] text-[#393a36]">
      <Header />
      <section className="min-h-[710px] border-t border-[#d8d8d5] px-6 py-12 sm:px-8 md:px-12 lg:px-[52px] lg:py-[50px]">
        <div className="grid min-h-[610px] grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-between">
            <h1
              className="
                max-w-[600px]
                text-[64px]
                font-medium
                leading-[0.95]
                tracking-[-3px]
                sm:text-[80px]
                md:text-[96px]
                lg:text-[112px]
                xl:text-[118px]
              "
            >
              Who
              <br />
              are we?
            </h1>
            <button
              type="button"
              className="
                mt-12
                flex
                h-[42px]
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
              "
            >
              Read reviews
            </button>
          </div>
          <div className="flex flex-col justify-start lg:pt-[3px]">
            <p
              className="
                mb-6
                text-[14px]
                font-normal
                leading-[1.7]
                tracking-[-0.3px]
                sm:text-[15px]
                lg:text-[16px]
              "
            >
              1966 Chevrolet Chevelle SS - STK 2801
            </p>

            <p
              className="
                mb-6
                max-w-[850px]
                text-[14px]
                font-normal
                leading-[1.7]
                tracking-[-0.35px]
                sm:text-[15px]
                lg:text-[16px]
              "
            >
              The 1966 Chevelle SS396 captivated onlookers with its striking
              appearance. The revamped Fisher body ushered in a new era for
              the mid-size Chevy, establishing it as a performance icon. In
              this iteration, the SS396 evolved into a distinct model within
              the Chevelle lineup, showcasing numerous styling upgrades and
              an unwavering focus on performance.
            </p>

            <p
              className="
                mb-6
                max-w-[850px]
                text-[14px]
                font-normal
                leading-[1.7]
                tracking-[-0.35px]
                sm:text-[15px]
                lg:text-[16px]
              "
            >
              This ‘138’ code Chevelle SS396 underwent an impressive
              frame-off restoration in 2013, emerging as a visual masterpiece.
              A professional application of Bolero Red paint revitalized the
              exterior, complemented by a meticulous restoration of the
              interior in original red vinyl. Every authentic detail,
              including the Muncie ‘hypodermic’ shifter, was thoughtfully
              recreated. The cabin features a complete set of SunPro gauges
              alongside a column-mounted tachometer, tinted windows, and an
              aftermarket AM/FM/cassette stereo system.
            </p>

            <p
              className="
                mb-6
                max-w-[850px]
                text-[14px]
                font-normal
                leading-[1.7]
                tracking-[-0.35px]
                sm:text-[15px]
                lg:text-[16px]
              "
            >
              Under the hood, the original 396ci ‘Rat’ powerplant gave way to
              a robust 427ci big-block. This powerhouse, meticulously rebuilt,
              boasts an aluminum intake, dual-line Holley carburetor, and a
              street-savvy cam. Paired with a 4-speed manual transmission, the
              throaty exhaust note resonates with power. (Trivia: A few years
              later, Don Yenko Chevrolet in Pittsburgh adopted a similar
              drivetrain package for their COPO Chevelles.)
            </p>

            <p
              className="
                max-w-[850px]
                text-[14px]
                font-normal
                leading-[1.7]
                tracking-[-0.35px]
                sm:text-[15px]
                lg:text-[16px]
              "
            >
              GM Rally wheels with trim rings and centers embrace sturdy 15”
              BFG Radial T/A tires. Steering is managed manually, while power
              disc/drum brakes, a front sway bar, and HD shocks contribute to
              a balanced driving experience.
            </p>
          </div>
        </div>
      </section>
      <AboutStats />
      <FAQ />
      <Footer />
    </main>
  );
};
export default AboutPage;