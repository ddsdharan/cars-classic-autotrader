import AboutStats from "./AboutStats";

const AboutNumbers = () => {
  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        px-6
        pb-[60px]
        pt-20
        md:px-8
        md:pb-[240px]
        md:pt-28
        lg:px-10
        lg:pb-[80px]
        lg:pt-32
      "
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <h2
            className="
              max-w-[570px]
              text-[clamp(42px,5vw,72px)]
              font-medium
              leading-[0.95]
              tracking-[-0.07em]
            "
          >
            About us
            <br />
            in numbers
          </h2>

          <p
            className="
              max-w-[260px]
              self-start
              justify-self-start
              text-[18px]
              leading-[1.45]
              md:max-w-[540px]
              md:justify-self-end
              md:pt-2
              lg:text-[20px]
            "
          >
            From acquisition to restoration,
            we specialize in iconic automobiles,
            ensuring each drive is a celebration
            of timeless style. Elevate your journey
            with our passion for preserving
            automotive heritage.
          </p>
        </div>
        <AboutStats />
      </div>
    </section>
  );
};

export default AboutNumbers;