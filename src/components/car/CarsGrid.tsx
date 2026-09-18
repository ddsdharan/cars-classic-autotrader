import { cars } from "../../data/cars";
import CarListingCard from "./CarListingCard";

const CarsGrid = () => {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {cars.map((car) => (
          <CarListingCard
            key={car.id}
            car={car}
          />
        ))}
      </div>
    </section>
  );
};

export default CarsGrid;