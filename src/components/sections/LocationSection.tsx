import locationMap from "../../assets/images/location-map.png"
import FormButton from "../forms/FormButton";

const LocationSection = () => {
  return (
    <section
      id="contact"
      className="px-6 pb-16 pt-12 md:px-8 md:pb-20 md:pt-16 lg:px-10"
    >
      <div className="mx-auto max-w-[1400px]">
        
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_300px] md:items-end">
          
          <h2
            className="
              max-w-[600px]
              text-[clamp(44px,6vw,78px)]
              font-medium
              leading-[0.95]
              tracking-[-0.07em]
            "
          >
            Where
            <br />
            to find us
          </h2>

          <div className="md:pb-2">
            <p className="text-[11px] font-medium">
              +1 (701) 581-1331
            </p>

            <p className="mt-2 text-[16px] text-[#666]">
              161 Trumpeter Ave, Soldotna, Alaska
            </p>
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

        <div className="mt-10 overflow-hidden md:mt-12">
          <img
            src={locationMap}
            alt="Location map"
            className="
              h-[300px]
              w-full
              object-cover
              md:h-[400px]
              lg:h-[460px]
            "
          />
        </div>
      </div>
    </section>
  );
};

export default LocationSection; 