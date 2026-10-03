"use client";

import { useEffect, useState } from "react";
import { Icon } from "./icons";
import NavbarItems from "./NavbarItems";

export default function Navbar() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const isOverlayVisible = isNavbarOpen || isCategoryOpen;

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsNavbarOpen(false);
        setIsCategoryOpen(false);
      }
    }

    window.addEventListener("keydown", handleEscape);

    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <>
      {isOverlayVisible && (
        <button
          type="button"
          aria-label="بستن منو"
          onClick={() => {
            setIsNavbarOpen(false);
            setIsCategoryOpen(false);
          }}
          className="fixed inset-x-0 bottom-0 top-[5.5rem] z-40 bg-background/35 backdrop-blur-md"
        />
      )}
      <nav className="relative z-50">
        <div>
          <button
            type="button"
            onClick={() => {
              setIsNavbarOpen((prev) => {
                const nextValue = !prev;

                if (!nextValue) {
                  setIsCategoryOpen(false);
                }

                return nextValue;
              });
            }}
            className="grid h-11 w-11 place-items-center rounded-full border border-primary/20 bg-surface/35 text-text-primary backdrop-blur-xl transition-colors hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary md:hidden"
            aria-controls="navbar-dropdown"
            aria-expanded={isNavbarOpen}
            aria-label={isNavbarOpen ? "بستن منو" : "باز کردن منو"}
          >
            <Icon name={isNavbarOpen ? "close" : "hamburger"} size={20} />
          </button>
          <NavbarItems
            isOpen={isNavbarOpen}
            onClose={() => {
              setIsNavbarOpen(false);
              setIsCategoryOpen(false);
            }}
            onDropdownChange={setIsCategoryOpen}
          />
        </div>
      </nav>
    </>
  );
}
