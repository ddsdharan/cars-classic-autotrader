interface CarSpecificationsProps {
  name: string;
  price: string;

  specifications: {
    make: string;
    model: string;
    transmission: string;
    vin: string;
    bodyColor: string;
    mileage: string;
    engineSize: string;
    year: string;
    type: string;
    interiorColor: string;
  };
}

const CarSpecifications = ({
  name,
  price,
  specifications,
}: CarSpecificationsProps) => {
  const leftColumn = [
    {
      label: "Make",
      value: specifications.make,
    },
    {
      label: "Model",
      value: specifications.model,
    },
    {
      label: "Transmission:",
      value: specifications.transmission,
    },
    {
      label: "VIN:",
      value: specifications.vin,
    },
    {
      label: "Body Color:",
      value: specifications.bodyColor,
    },
  ];

  const rightColumn = [
    {
      label: "Mileage:",
      value: specifications.mileage,
    },
    {
      label: "Engine Size:",
      value: specifications.engineSize,
    },
    {
      label: "Year:",
      value: specifications.year,
    },
    {
      label: "Type:",
      value: specifications.type,
    },
    {
      label: "Interior Color:",
      value: specifications.interiorColor,
    },
  ];

  return (
    <div className="flex h-full flex-col">
      <div className="border-t border-[#383936]" />

      <h2 className="mt-8 text-[22px] font-medium tracking-[-0.04em] md:text-[26px]">
        {name}
      </h2>

      <div className="mt-6 inline-flex w-fit rounded-full border border-[#383936] px-8 py-2.5 text-[14px]">
        {price}
      </div>

      <div className="mt-20 grid grid-cols-1 gap-x-10 gap-y-6 md:grid-cols-2">
        <div className="space-y-7">
          {leftColumn.map((item) => (
            <div
              key={item.label}
              className="grid grid-cols-[1fr_1.3fr] gap-4"
            >
              <span className="text-[15px] text-[#9a9a97]">
                {item.label}
              </span>

              <span className="text-[15px] font-semibold">
                {item.value}
              </span>
            </div>
          ))}
        </div>

        <div className="space-y-7">
          {rightColumn.map((item) => (
            <div
              key={item.label}
              className="grid grid-cols-[1fr_1.3fr] gap-4"
            >
              <span className="text-[15px] text-[#9a9a97]">
                {item.label}
              </span>

              <span className="text-[15px] font-semibold">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        className="
          mt-auto
          flex
          h-[46px]
          w-full
          items-center
          justify-center
          rounded-full
          bg-[#383936]
          text-[14px]
          font-medium
          text-white
          transition-opacity
          hover:opacity-90
        "
      >
        Rent
      </button>
    </div>
  );
};

export default CarSpecifications;