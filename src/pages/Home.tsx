import Header from "../components/header/Header";
import Hero from "../components/common/Hero";
import CarsSection from "../components/sections/CarsSection";
import AboutNumbers from "../components/common/AboutNumbers";
import Services from "../components/common/Services";
import FAQ from "../components/common/FAQ";
import LocationSection from "../components/sections/LocationSection";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <div id="top" className="min-h-screen bg-[#f7f7f5] text-[#383936]">
      <Header />
      
      <main>
        <Hero />

        <CarsSection />

        <AboutNumbers />

        <Services />

        <FAQ />

        <LocationSection />
      </main>

      <Footer />
    </div>
  );
};

export default Home;