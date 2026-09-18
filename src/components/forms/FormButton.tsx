import { useState } from "react";
import ContactForm from "./ContactForm";

interface FormButtonProps {
  children?: React.ReactNode;
  className?: string;
}

const FormButton = ({
  children = "Submit your application",
  className = "",
}: FormButtonProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsModalOpen(true)}
        className={className}
      >
        {children}
      </button>

      <ContactForm
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default FormButton;