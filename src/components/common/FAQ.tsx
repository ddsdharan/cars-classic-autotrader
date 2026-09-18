import { useState } from "react";
import { faqItems } from "../../data/homeData";

const FAQ = () => {
  const [openId, setOpenId] = useState<number | null>(5);

  const toggleFAQ = (id: number) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <section className="px-6 py-16 md:px-8 md:py-24 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-[1400px]">
        
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[250px_1fr] lg:grid-cols-[300px_1fr]">
          
          <div>
            <h2
              className="
                text-[clamp(44px,5vw,68px)]
                font-medium
                leading-none
                tracking-[-0.07em]
              "
            >
              FAQ
            </h2>

            <button
              type="button"
              className="
                mt-10
                flex
                h-[50px]
                items-center
                gap-2
                rounded-full
                border
                border-[#383936]
                px-4
                text-[15px]
                transition-colors
                hover:bg-[#383936]
                hover:text-white
              "
            >
              Ask a Question
              <span className="text-[12px]">↗</span>
            </button>
          </div>

          <div>
            <div>
              {faqItems.map((item) => {
                const isOpen = openId === item.id;

                return (
                  <div
                    key={item.id}
                    className="border-b border-[#aaa]"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFAQ(item.id)}
                      className="
                        flex
                        w-full
                        items-center
                        justify-between
                        gap-6
                        py-4
                        text-left
                      "
                      aria-expanded={isOpen}
                    >
                      <span className="text-[24px] font-medium leading-[1.4] md:text-[24px]">
                        {item.question}
                      </span>

                      <span className="flex-shrink-0 text-[22px] font-light leading-none">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="max-w-[600px] pb-5 pr-8">
                        <p className="text-[16px] leading-[1.55] text-[#777] md:text-[16px]">
                          {item.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;