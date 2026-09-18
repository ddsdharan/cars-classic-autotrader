import { useNavigate } from "react-router-dom";
import type { Car } from "../../data/cars";

interface CarListingCardProps {
  car: Car;
}

const CarListingCard = ({ car }: CarListingCardProps) => {
  const navigate = useNavigate();

  return (
    <article className="group relative aspect-[1.55/1] overflow-hidden bg-[#383936]">
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
          ease-out
          group-hover:scale-[1.03]
        "
      />

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/80
          via-black/20
          to-transparent
        "
      />

      <div className="absolute bottom-0 left-0 right-0 p-5 text-white md:p-7">
        <p className="mb-6 text-[10px] font-light md:text-[16px]">
          {car.price}
        </p>

        <h2
          className="
            text-[14px]
            font-medium
            leading-[1.2]
            tracking-[-0.04em]
            md:text-[24px]
            mb-6
          "
        >
          {car.name}
        </h2>

        <div className="mt-4 flex items-center gap-2">
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
              px-5
              text-[16px]
              font-medium
              text-[#383936]
              transition-transform
              hover:scale-105
            "
          >
            Rent
            <span className="text-[16px]">
              ↗
            </span>
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
              border-white
              px-4
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

export default CarListingCard;