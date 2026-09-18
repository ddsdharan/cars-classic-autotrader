import { cars } from "../../data/homeData";
import CarCard from "../car/CarCard";
import allCarsImage from "../../assets/cars/all-cars-image.png"

const CarsSection = () => {
  return (
    <section id="cars" className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2">
        
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}

        <article
          className="
            relative
            min-h-[270px]
            overflow-hidden
            bg-[#383936]
            md:min-h-[360px]
            lg:min-h-[405px]
          "
        >
          <img
            src={allCarsImage}
            alt="All classic cars"
            className="
              absolute
              left-1/2
              top-1/2
              w-[65%]
              max-w-[500px]
              -translate-x-1/2
              -translate-y-1/2
              opacity-20
              grayscale
            "
          />

          <div className="absolute inset-x-0 bottom-0 flex items-center gap-2 p-5 md:p-7">
            <a
              href="/cars"
              className="
                flex
                h-[44px]
                items-center
                gap-2
                rounded-full
                bg-white
                px-4
                text-[16px]
                font-medium
                text-[#383936]
              "
            >
              All cars
              <span className="text-[30px] content-center">↗</span>
            </a>

            <span
              className="
                flex
                h-[44px]
                items-center
                rounded-full
                border
                border-white/70
                px-3
                text-[16px]
                text-white
              "
            >
              29 more cars
            </span>
          </div>
        </article>
      </div>
    </section>
  );
};

export default CarsSection;