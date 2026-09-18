import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "Cars", href: "/cars" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contacts", href: "/contacts" },
  ];

  const phoneNumber = "+1 (240) 375-1288";

  return (
    <header className="sticky top-0 z-50 border-b border-[#d8d8d5] bg-[#f7f7f5]/95 backdrop-blur-sm">
      <div className="mx-auto flex h-[68px] max-w-[1400px] items-center gap-3 px-6 md:px-8 lg:px-10">
        <a
          href="/"
          className="min-w-0 text-[13px] font-semibold tracking-[-0.04em] md:text-[24px]"
        >
          Cars Classic Autotrader
        </a>

        <nav className="hidden flex-1 items-center justify-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}  
              className="text-[16px] font-normal tracking-[-0.02em] transition-opacity hover:opacity-50"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-3">
          <a
            href="tel:+12403751288"
            className="hidden whitespace-nowrap text-[16px] font-medium md:block"
          >
            {phoneNumber}
          </a>

          <a
            href="tel:+12403751288"
            className="inline-flex shrink-0 items-center whitespace-nowrap text-[10px] font-medium text-[#383936] md:hidden"
            aria-label="Call +1 (240) 375-1288"
          >
            {phoneNumber}
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-9 w-9 items-center justify-center md:hidden"
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span className="block h-[1px] w-5 bg-[#383936]" />
            <span className="block h-[1px] w-5 bg-[#383936]" />
            <span className="block h-[1px] w-5 bg-[#383936]" />
          </div>
        </button>
      </div>

      {menuOpen && (
        <nav className="border-t border-[#d8d8d5] px-6 py-6 md:hidden">
          <div className="flex flex-col gap-5">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;