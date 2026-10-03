"use client";

import { useEffect, useRef, useState } from "react";
import { Icon } from "./icons";

interface NavbarItemsProps {
  isOpen: boolean;
  onClose: () => void;
  onDropdownChange: (isOpen: boolean) => void;
}

interface NavItem {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
}

const navItems: NavItem[] = [
  { label: "خانه", href: "#home" },
  {
    label: "دسته‌بندی‌ها",
    children: [
      { label: "تیشرت", href: "#tshirt" },
      { label: "پیراهن", href: "#shirt" },
      { label: "شلوار", href: "#trousers" },
      { label: "کفش", href: "#shoes" },
      { label: "ژاکت", href: "#jacket" },
      { label: "کاپشن", href: "#coat" },
    ],
  },
  { label: "درباره ما", href: "#about" },
  { label: "تماس با ما", href: "#contact" },
];

export default function NavbarItems({
  isOpen,
  onClose,
  onDropdownChange,
}: NavbarItemsProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLLIElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(null);
        onDropdownChange(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onDropdownChange]);

  function closeMenu() {
    setOpenDropdown(null);
    onDropdownChange(false);
    onClose();
  }

  function toggleDropdown(label: string) {
    const nextValue = openDropdown === label ? null : label;

    setOpenDropdown(nextValue);
    onDropdownChange(Boolean(nextValue));
  }

  return (
    <div
      id="navbar-dropdown"
      className={`${
        isOpen ? "block" : "hidden"
      } fixed inset-x-0 top-[5.5rem] z-50 h-auto max-h-none overflow-visible border-y border-primary/15 bg-surface/95 p-6 shadow-2xl backdrop-blur-2xl md:static md:block md:w-auto md:border-0 md:bg-transparent md:p-0 md:shadow-none md:backdrop-blur-none`}
    >
      <ul className="mx-auto flex max-w-7xl flex-col gap-2 md:flex-row md:items-center md:gap-6">
        {navItems.map((item, index) => {
          const hasChildren = Boolean(item.children?.length);
          const isCurrentDropdownOpen = openDropdown === item.label;

          if (hasChildren) {
            return (
              <li key={item.label} ref={dropdownRef} className="relative">
                <button
                  type="button"
                  onClick={() => toggleDropdown(item.label)}
                  aria-expanded={isCurrentDropdownOpen}
                  aria-haspopup="true"
                  className="flex w-full items-center justify-between gap-2 rounded-xl px-4 py-3 [font-size:var(--font-body)] text-text-secondary transition-all duration-200 hover:bg-primary/10 hover:text-text-primary md:w-auto md:px-3 md:py-2"
                >
                  <span>{item.label}</span>
                  <Icon
                    name="chevron-down"
                    size={16}
                    strokeWidth={2}
                    className={`h-4 w-4 transition-transform duration-200 ${
                      isCurrentDropdownOpen
                        ? "rotate-180 text-text-primary"
                        : "text-text-secondary"
                    }`}
                  />
                </button>

                <div
                  className={`${
                    isCurrentDropdownOpen
                      ? "max-h-[28rem] opacity-100"
                      : "pointer-events-none max-h-0 opacity-0 md:scale-y-95"
                  }  overflow-hidden rounded-xl border border-primary/15 bg-surface/40 transition-all duration-300 ease-out md:fixed md:inset-x-0 md:top-[5.5rem] md:z-50 md:max-h-[28rem] md:rounded-none md:border-x-0 md:border-b md:bg-surface/60 md:p-4 md:shadow-2xl md:backdrop-blur-2xl`}
                >
                  <div className="mx-auto max-w-4xl">
                    <ul className="flex flex-col justify-between gap-0 p-2 md:flex-row md:gap-6 md:p-0">
                      {item.children?.map((child) => (
                        <li key={child.label}>
                          <a
                            href={child.href}
                            onClick={closeMenu}
                            className="group flex items-center justify-between rounded-xl px-4 py-3 [font-size:var(--font-body)] text-text-primary transition-all hover:text-text-secondary md:px-5 md:py-2"
                          >
                            <span>{child.label}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            );
          }

          return (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={closeMenu}
                aria-current={index === 0 ? "page" : undefined}
                className="block rounded-xl px-4 py-3 [font-size:var(--font-body)] text-text-secondary transition-colors hover:bg-primary/10 hover:text-text-primary md:px-3 md:py-2"
              >
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
