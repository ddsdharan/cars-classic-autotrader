const Footer = () => {
  return (
    <footer className="border-t border-[#d8d8d5] px-6 py-8 md:px-8 md:py-10 lg:px-10">
      <div className="mx-auto max-w-[1400px]">
        
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-[24px] font-semibold">
                Cars Classic Autotrader
              </h3>

              <a
                href="#"
                className="mt-7 block w-fit text-[14px] underline underline-offset-2"
              >
                Privacy Policies
              </a>
            </div>

            <p className="mt-10 text-[14px] text-[#888] md:mt-20">
              © Cars Classic Autotrader 2024
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-10 gap-y-4 text-[16px]">
            <a href="#cars" className="hover:opacity-50">
              Cars
            </a>

            <a href="#services" className="hover:opacity-50">
              How to rent
            </a>

            <a href="#about" className="hover:opacity-50">
              About Us
            </a>

            <a href="#contact" className="hover:opacity-50">
              Contacts
            </a>

            <a href="#about" className="hover:opacity-50">
              About Us
            </a>
          </div>

          <div>
            <p className="text-[24px] font-medium">
              +1 (701) 581-1331
            </p>

            <p className="mt-3 text-[16px] text-[#666]">
              161 Trumpeter Ave, Soldotna, Alaska
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;