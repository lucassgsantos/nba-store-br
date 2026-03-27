"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/catalogo", label: "Catálogo" },
  { href: "/sobre", label: "Sobre" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div className="shell">
        <div className="section-shell flex items-center justify-between gap-4 px-5 py-4 sm:px-6">
          <Link href="/" className="flex flex-col leading-none">
            <span className="text-[0.7rem] font-black uppercase tracking-[0.3em] text-[var(--color-red-500)]">
              Regatas da temporada
            </span>
            <span className="mt-2 text-3xl font-black uppercase tracking-[-0.04em] text-[var(--color-navy-950)] sm:text-4xl">
              NBA Store BR
            </span>
          </Link>

          <nav className="hidden items-center gap-2 md:flex" aria-label="Principal">
            {navigation.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-full px-4 py-2 text-sm font-bold ${
                    isActive
                      ? "bg-[var(--color-navy-950)] text-white shadow-[0_10px_24px_rgba(8,17,31,0.15)]"
                      : "text-slate-700 hover:bg-slate-100 hover:text-[var(--color-navy-950)]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link href="/catalogo" className="cta-primary ml-2">
              Ver catálogo
            </Link>
          </nav>

          <button
            type="button"
            className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white text-[var(--color-navy-950)] md:hidden"
            aria-label={isOpen ? "Fechar navegação" : "Abrir navegação"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsOpen((current) => !current)}
          >
            <span className="relative flex h-5 w-5 flex-col items-center justify-center">
              <span
                className={`absolute h-0.5 w-5 rounded-full bg-current ${
                  isOpen ? "rotate-45" : "-translate-y-1.5"
                }`}
              />
              <span
                className={`absolute h-0.5 w-5 rounded-full bg-current ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute h-0.5 w-5 rounded-full bg-current ${
                  isOpen ? "-rotate-45" : "translate-y-1.5"
                }`}
              />
            </span>
          </button>
        </div>

        <div
          id="mobile-navigation"
          className={`overflow-hidden transition-[max-height,opacity] duration-300 md:hidden ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav
            className="section-shell mt-3 flex flex-col gap-2 px-4 py-4"
            aria-label="Principal mobile"
          >
            {navigation.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-2xl px-4 py-3 text-base font-bold ${
                    isActive
                      ? "bg-[var(--color-navy-950)] text-white"
                      : "bg-white text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link href="/catalogo" className="cta-primary mt-2">
              Ver catálogo
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
