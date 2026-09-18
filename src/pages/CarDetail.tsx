import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import CarGallery from "../components/car/CarGallery";
import CarSpecifications from "../components/car/CarSpecifications";
import CarAbout from "../components/car/CarAbout";
import CarServices from "../components/common/Services";
import CarFAQ from "../components/common/FAQ";
import { carDetail } from "../data/carDetails";

const CarDetail = () => {

  return (
    <div className="min-h-screen bg-[#f7f7f5] text-[#383936]">
      <Header />

      <main>
        <section className="px-6 pb-16 pt-16 md:px-8 md:pb-20 md:pt-20 lg:px-10 lg:pb-24 lg:pt-24">
          <h1
            className="
              text-[clamp(48px,8.2vw,140px)]
              font-medium
              leading-[0.9]
              tracking-[-0.08em]
            "
          >
            {carDetail.name}
          </h1>
        </section>
        <CarGallery images={carDetail.images} />
        <section className="px-6 py-20 md:px-8 md:py-28 lg:px-10">
          <div className="mx-auto grid max-w-[1800px] gap-16 lg:grid-cols-2 lg:gap-20">
            
            <CarSpecifications
              name={carDetail.name}
              price={carDetail.price}
              specifications={carDetail.specifications}
            />

            <CarAbout
              title={carDetail.description.title}
              paragraphs={carDetail.description.paragraphs}
            />
          </div>
        </section>
        <CarServices />
        <CarFAQ />
      </main>
      <Footer />
    </div>
  );
};
export default CarDetail;