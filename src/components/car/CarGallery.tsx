interface CarGalleryProps {
  images: {
    hero: string;
    second: string;
    third: string;
    fourth: string;
  };
}

const CarGallery = ({ images }: CarGalleryProps) => {
  return (
    <section className="w-full">
      <div className="grid h-[520px] grid-cols-1 gap-[2px] md:h-[650px] md:grid-cols-2 lg:h-[720px] lg:grid-cols-3">
        <div className="relative overflow-hidden lg:row-span-2">
          <img
            src={images.hero}
            alt="Main vehicle"
            className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
          />
        </div>

        <div className="relative hidden overflow-hidden lg:block">
          <img
            src={images.second}
            alt="Vehicle exterior"
            className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
          />
        </div>

        <div className="relative hidden overflow-hidden lg:block">
          <img
            src={images.third}
            alt="Vehicle exterior"
            className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
          />
        </div>

        <div className="relative hidden overflow-hidden lg:block">
          <img
            src={images.fourth}
            alt="Vehicle exterior"
            className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
          />
        </div>

        <div className="relative overflow-hidden md:block lg:hidden">
          <img
            src={images.second}
            alt="Vehicle exterior"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default CarGallery;