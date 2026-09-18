import { services } from "../../data/homeData";
import {useNavigate} from "react-router-dom";

interface ServicesProps {
  fullWidth?: boolean;
}

const Services = ({ fullWidth = false }: ServicesProps) => {
  const navigate = useNavigate();
  return (
    <section
      id="services"
      className="px-6 py-16 md:px-8 md:py-24 lg:px-10 lg:py-28"
    >
      <div className={fullWidth ? "w-full" : "mx-auto max-w-[1400px]"}>
        
        <div className="mb-8 flex flex-col justify-between gap-6 md:mb-10 md:flex-row md:items-end">
          
          <h2
            className="
              text-[clamp(44px,5.5vw,72px)]
              font-medium
              leading-none
              tracking-[-0.07em]
            "
          >
            Services
          </h2>

          <a
            href="#contact"
            className="
              flex
              h-[50px]
              w-fit
              items-center
              rounded-full
              border
              border-[#383936]
              px-4
              text-[17px]
              transition-colors
              hover:bg-[#383936]
              hover:text-white
            "
          >
            Submit your application
          </a>
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          
          {services.map((service) => (
            <article
              key={service.id}
              onClick={() => navigate(`/services/${service.slug}`)}
              className="
                group
                relative
                aspect-[1.05/1]
                overflow-hidden
                rounded-[5px]
              "
            >
              <img
                src={service.image}
                alt={service.title}
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover
                  transiti  on-transform
                  duration-700
                  group-hover:scale-105
                "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />

              <div className="absolute bottom-0 left-0 p-5 text-white md:p-6">
                <h3 className="text-[11px] font-medium md:text-[24px]">
                  {service.number} / {service.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;