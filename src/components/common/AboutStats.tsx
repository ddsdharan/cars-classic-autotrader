import aboutVintageCar from "../../assets/cars/about-vintage-car.png";

const stats = [
  { value: "32", label: "Retro car" },
  { value: "400", label: "Satisfied clients" },
  { value: "5", suffix: "Years", label: "Delighting our clients" },
];

const AboutStats = () => {
  return (
    <div className="relative mt-16 mb-[80px] md:mt-20 md:mb-[160px] lg:mb-[420px]">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-2">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="
                flex
                aspect-square
                flex-col
                items-center
                justify-center
                rounded-full
                border
                border-[#8b8b88]
              "
            >
              {stat.suffix ? (
                <div className="flex items-end gap-2">
                  <span className="text-[62px] font-medium leading-none tracking-[-0.08em] md:text-[70px] lg:text-[140px]">
                    {stat.value}
                  </span>

                  <span className="mb-4 text-[24px]">{stat.suffix}</span>
                </div>
              ) : (
                <span className="text-[62px] font-medium leading-none tracking-[-0.08em] md:text-[70px] lg:text-[140px]">
                  {stat.value}
                </span>
              )}

              <span
                className={`mt-4 text-[9px] md:text-[24px] ${
                  stat.suffix ? "text-center" : ""
                }`}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        <img
          src={aboutVintageCar}
          alt="Vintage classic car"
          className="
            pointer-events-none
            absolute
            bottom-[-30px]
            left-1/2
            z-10
            w-[85%]
            max-w-[900px]
            -translate-x-1/2
            grayscale
            md:bottom-[-230px]
            md:w-[80%]
            lg:bottom-[-490px]
          "
        />
      </div>
    </div>
  );
};

export default AboutStats;
