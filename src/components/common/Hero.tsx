const Hero = () => {
  return (
    <section className="px-6 pb-14 pt-10 md:px-8 md:pb-16 md:pt-12 lg:px-10 lg:pb-20 lg:pt-14">
      <div className="mx-auto max-w-[1400px]">
        
        <h1
          className="
            max-w-[1250px]
            text-[clamp(48px,7.5vw,105px)]
            font-medium
            leading-[0.98]
            tracking-[-0.075em]
          "
        >
          Retro cars 1960-1970
        </h1>

        <div className="mt-8 flex items-center gap-6 md:mt-10">
          
          <p className="max-w-[90px] text-[9px] leading-[1.45] md:max-w-[180px] md:text-[16px]">
            Vintage retro
            <span className="block">cars USA</span>
          </p>

          <a
            href="#cars"
            className="
              group
              flex
              h-[44px]
              items-center
              gap-2
              rounded-full
              border
              border-[#383936]
              px-3
              text-[14px]
              transition-colors
              hover:bg-[#383936]
              hover:text-white
            "
          >
            Find a car
            <span className="text-[13px] transition-transform group-hover:translate-x-0.5">
              ↗
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;