import Image from "next/image";
import Link from "next/link";

import { formatPrice } from "@/data/store";
import type { Product } from "@/types/store";

type HomeHeroProps = {
  spotlight: Product;
};

export function HomeHero({ spotlight }: HomeHeroProps) {
  return (
    <section className="shell pb-8 pt-6 sm:pb-10 sm:pt-8">
      <div className="section-shell overflow-hidden px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-6">
            <p className="eyebrow">Temporada em destaque</p>
            <div className="space-y-5">
              <h1 className="max-w-3xl text-5xl uppercase leading-[0.92] text-[var(--color-navy-950)] sm:text-6xl lg:text-7xl">
                As regatas que puxam a conversa da temporada.
              </h1>
              <p className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                Entre em uma vitrine mais direta, com foco em franquias fortes, nomes centrais da
                liga e leitura visual limpa em cada seção.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/catalogo" className="cta-primary">
                Explorar catálogo
              </Link>
              <Link href="/sobre" className="cta-secondary">
                Ver detalhes
              </Link>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <span className="stat-chip">MVP atual</span>
              <span className="stat-chip">Franquias históricas</span>
              <span className="stat-chip">Leitura rápida</span>
            </div>
          </div>

          <div className="surface-panel mesh-panel relative overflow-hidden px-5 py-6 sm:px-6 sm:py-8">
            <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[rgba(209,79,79,0.08)] to-transparent" />
            <div className="relative">
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <p className="text-[0.72rem] font-black uppercase tracking-[0.28em] text-[var(--color-red-500)]">
                    Destaque da temporada
                  </p>
                  <h2 className="mt-2 text-4xl uppercase leading-none text-[var(--color-navy-950)]">
                    {spotlight.player}
                  </h2>
                  <p className="mt-2 text-sm font-semibold text-slate-600">{spotlight.team}</p>
                </div>
                <span className="rounded-full border border-slate-200 bg-white/90 px-3 py-1 text-xs font-black uppercase tracking-[0.2em] text-[var(--color-red-500)]">
                  {spotlight.badge}
                </span>
              </div>

              <div className="mx-auto flex min-h-[320px] max-w-[360px] items-center justify-center">
                <Image
                  src={spotlight.image}
                  alt={`Regata destaque ${spotlight.team} de ${spotlight.player}`}
                  width={700}
                  height={700}
                  priority
                  className="h-auto w-full object-contain drop-shadow-[0_16px_30px_rgba(8,17,31,0.16)]"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>

              <div className="grid gap-4 border-t border-slate-100 pt-5 sm:grid-cols-[1fr_auto] sm:items-end">
                <div>
                  <p className="text-sm leading-7 text-slate-600">{spotlight.summary}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-slate-400">
                    Preço de referência
                  </p>
                  <p className="mt-1 text-3xl font-extrabold tracking-tight text-[var(--color-navy-950)]">
                    {formatPrice(spotlight.price)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
