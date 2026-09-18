import { useNavigate } from "react-router-dom";
import type { Car } from "../../data/homeData";

interface CarCardProps {
  car: Car;
}

const CarCard = ({ car }: CarCardProps) => {
  const navigate = useNavigate();

  return (
    <article className="group relative min-h-[270px] overflow-hidden md:min-h-[360px] lg:min-h-[541px]">
      
      <img
        src={car.image}
        alt={car.name}
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          transition-transform
          duration-700
          group-hover:scale-[1.03]
        "
      />

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/75
          via-black/10
          to-transparent
        "
      />

      <div className="absolute inset-x-0 bottom-0 p-5 text-white md:p-7">
        <p className="mb-6 text-[9px] font-light opacity-90 md:text-[16px]">
          {car.price}
        </p>

        <h3 className="mb-6 text-[13px] font-medium tracking-[-0.04em] md:text-[24px]">
          {car.name}
        </h3>

        <div className="mt-2 flex items-center gap-2">
          <button
            type="button"
            onClick={() => navigate(`/cars/${car.id}`)}
            className="
              flex
              h-[44px]
              w-[157px]
              items-center
              justify-center
              gap-2
              rounded-full
              bg-white
              px-4
              text-[16px]
              font-medium
              text-[#383936]
              transition-transform
              hover:scale-105
            "
          >
            Rent
            <span className="text-[16px]">↗</span>
          </button>

          <span
            className="
              flex
              h-[44px]
              w-[157px]
              items-center
              justify-center
              rounded-full
              border
              border-white/80
              px-3
              text-[16px]
            "
          >
            {car.mileage}
          </span>
        </div>
      </div>
    </article>
  );
};

export default CarCard;