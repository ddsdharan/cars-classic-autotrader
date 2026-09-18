interface CarAboutProps {
  title: string;
  paragraphs: string[];
}

const CarAbout = ({ title, paragraphs }: CarAboutProps) => {
  return (
    <div>
      <div className="border-t border-[#383936]" />

      <h2 className="mt-8 text-[22px] font-medium tracking-[-0.04em] md:text-[26px]">
        {title}
      </h2>

      <div className="mt-12 space-y-6">
        {paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className="
              max-w-[850px]
              text-[14px]
              font-normal
              leading-[1.6]
              tracking-[-0.02em]
              text-[#4c4c49]
              md:text-[15px]
            "
          >
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};

export default CarAbout;