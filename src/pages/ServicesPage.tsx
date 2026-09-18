import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Services from "../components/common/Services";

const ServicesPage = () => {
  return (
    <main>
      <Header />
      <section className="py-6 md:py-12 lg:py-8">
        <Services fullWidth />
      </section>
      <Footer />
    </main>
  );
};

export default ServicesPage;