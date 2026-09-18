import {  useEffect, useState, type SubmitEvent } from "react";
import { X } from "lucide-react";

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  surname: string;
  phone: string;
  email: string;
  comment: string;
}

const ContactForm = ({
  isOpen,
  onClose,
}: ContactFormProps) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    surname: "",
    phone: "",
    email: "",
    comment: "",
  });

  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!privacyAccepted) {
      return;
    }

    setIsSubmitting(true);

    try {

      console.log("Contact form submitted:", {
        ...formData,
        privacyAccepted,
      });

      setFormData({
        name: "",
        surname: "",
        phone: "",
        email: "",
        comment: "",
      });

      setPrivacyAccepted(false);

      onClose();
    } catch (error) {
      console.error("Contact form submission failed:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOverlayClick = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="
        fixed
        inset-0
        z-[9999]
        flex
        items-center
        justify-center
        bg-black/40
        px-4
        py-6
        backdrop-blur-[2px]
        sm:px-6
      "
      onMouseDown={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="application-modal-title"
    >
      <div
        className="
          relative
          w-full
          max-w-[1195px]
          overflow-y-auto
          rounded-[28px]
          bg-[#ffffff]
          px-6
          py-8
          shadow-2xl
          sm:px-8
          sm:py-10
          md:px-10
          md:py-12
          lg:max-h-[90vh]
          lg:px-[60px]
          lg:py-[55px]
        "
        onMouseDown={(event) => event.stopPropagation()}
      >

        <button
          type="button"
          onClick={onClose}
          aria-label="Close contact form"
          className="
            absolute
            right-5
            top-5
            flex
            h-8
            w-8
            items-center
            justify-center
            rounded-full
            text-[#383936]
            transition
            hover:bg-[#f2f2ef]
            sm:right-7
            sm:top-7
          "
        >
          <X
            size={23}
            strokeWidth={1}
          />
        </button>

        <div className="mb-10 pr-12 sm:mb-12">
          <h2
            id="application-modal-title"
            className="
              max-w-[350px]
              font-['Unbounded']
              text-[42px]
              font-medium
              leading-[1.02]
              tracking-[-2px]
              text-[#383936]
              sm:text-[48px]
              md:text-[52px]
            "
          >
            Connect
            <br />
            with us
          </h2>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-x-5 gap-y-8 md:grid-cols-2">
            <div className="relative">
              <label
                htmlFor="Contact-name"
                className="
                  block
                  font-['Unbounded']
                  text-[14px]
                  font-normal
                  text-[#383936]
                "
              >
                Name
              </label>

              <input
                id="Contact-name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                className="
                  mt-3
                  h-[36px]
                  w-full
                  border-0
                  border-b
                  border-[#383936]
                  bg-transparent
                  font-['Unbounded']
                  text-[14px]
                  text-[#383936]
                  outline-none
                  focus:border-[#383936]
                "
              />
            </div>

            <div className="relative">
              <label
                htmlFor="Contact-surname"
                className="
                  block
                  font-['Unbounded']
                  text-[14px]
                  font-normal
                  text-[#383936]
                "
              >
                Surname
              </label>

              <input
                id="Contact-surname"
                name="surname"
                type="text"
                value={formData.surname}
                onChange={handleChange}
                required
                className="
                  mt-3
                  h-[36px]
                  w-full
                  border-0
                  border-b
                  border-[#383936]
                  bg-transparent
                  font-['Unbounded']
                  text-[14px]
                  text-[#383936]
                  outline-none
                  focus:border-[#383936]
                "
              />
            </div>

            <div className="relative">
              <label
                htmlFor="Contact-phone"
                className="
                  block
                  font-['Unbounded']
                  text-[14px]
                  font-normal
                  text-[#383936]
                "
              >
                Phone
              </label>

              <div
                className="
                  mt-3
                  flex
                  h-[36px]
                  items-center
                  border-b
                  border-[#383936]
                "
              >
                <span
                  className="
                    mr-2
                    text-[18px]
                    leading-none
                  "
                  aria-hidden="true"
                >
                  🇺🇸
                </span>

                <span
                  className="
                    mr-2
                    font-['Unbounded']
                    text-[14px]
                    text-[#383936]
                  "
                >
                  +1
                </span>

                <input
                  id="Contact-phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="
                    h-full
                    min-w-0
                    flex-1
                    border-0
                    bg-transparent
                    font-['Unbounded']
                    text-[14px]
                    text-[#383936]
                    outline-none
                  "
                />
              </div>
            </div>

            <div className="relative">
              <label
                htmlFor="Contact-email"
                className="
                  block
                  font-['Unbounded']
                  text-[14px]
                  font-normal
                  text-[#383936]
                "
              >
                E-mail
              </label>

              <input
                id="application-email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="
                  mt-3
                  h-[36px]
                  w-full
                  border-0
                  border-b
                  border-[#383936]
                  bg-transparent
                  font-['Unbounded']
                  text-[14px]
                  text-[#383936]
                  outline-none
                  focus:border-[#383936]
                "
              />
            </div>

            <div className="md:col-span-2">
              <label
                htmlFor="Contact-comment"
                className="
                  block
                  font-['Unbounded']
                  text-[14px]
                  font-normal
                  text-[#383936]
                "
              >
                Comment
              </label>

              <textarea
                id="Contact-comment"
                name="comment"
                value={formData.comment}
                onChange={handleChange}
                rows={1}
                className="
                  mt-3
                  min-h-[42px]
                  w-full
                  resize-none
                  border-0
                  border-b
                  border-[#383936]
                  bg-transparent
                  font-['Unbounded']
                  text-[14px]
                  text-[#383936]
                  outline-none
                  focus:border-[#383936]
                "
              />
            </div>
          </div>
          <div
            className="
              mt-9
              flex
              flex-col
              gap-6
              sm:flex-row
              sm:items-center
            "
          >
            <button
              type="submit"
              disabled={!privacyAccepted || isSubmitting}
              className="
                flex
                h-[50px]
                w-full
                items-center
                justify-center
                rounded-full
                bg-[#383936]
                px-8
                font-['Unbounded']
                text-[13px]
                font-medium
                text-white
                transition-all
                duration-300
                hover:bg-[#292a28]
                disabled:cursor-not-allowed
                disabled:opacity-50
                sm:w-[285px]
              "
            >
              {isSubmitting ? "Sending..." : "Contact me"}
            </button>

            <label
              className="
                flex
                cursor-pointer
                items-center
                gap-3
              "
            >
              <input
                type="checkbox"
                checked={privacyAccepted}
                onChange={(event) =>
                  setPrivacyAccepted(event.target.checked)
                }
                className="
                  h-[20px]
                  w-[20px]
                  cursor-pointer
                  accent-[#383936]
                "
              />

              <span
                className="
                  font-['Unbounded']
                  text-[12px]
                  font-normal
                  text-[#999999]
                  underline
                  underline-offset-2
                "
              >
                I agree with the privacy policy
              </span>
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;