import Image from "next/image";
import Link from "next/link";

import type { FranchiseHighlight } from "@/types/store";

type FranchiseSpotlightsProps = {
  franchises: FranchiseHighlight[];
};

export function FranchiseSpotlights({ franchises }: FranchiseSpotlightsProps) {
  return (
    <section className="shell py-8 sm:py-10">
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="section-shell px-6 py-8 sm:px-8">
          <p className="eyebrow">Franquias lendárias</p>
          <h2 className="mt-4 text-4xl uppercase leading-none text-[var(--color-navy-950)] sm:text-5xl">
            Escudos e histórias que atravessam gerações dentro da liga.
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600">
            Boston, Lakers e Warriors ajudam a abrir a vitrine com peso histórico, identidade forte
            e leitura imediata para quem acompanha a NBA.
          </p>
          <Link href="/sobre" className="cta-primary mt-8">
            Ver mais detalhes
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {franchises.map((franchise) => (
            <article key={franchise.id} className="surface-panel p-5">
              <div className="mesh-panel flex min-h-[180px] items-center justify-center rounded-[24px] border border-slate-100 bg-slate-50 px-5 py-6">
                <Image
                  src={franchise.image}
                  alt={`Logo do ${franchise.name}`}
                  width={300}
                  height={300}
                  className="h-auto max-h-[120px] w-full object-contain"
                  sizes="(max-width: 768px) 60vw, 20vw"
                />
              </div>
              <div className="mt-5 space-y-3">
                <p className="text-[0.72rem] font-black uppercase tracking-[0.28em] text-[var(--color-red-500)]">
                  {franchise.titles} títulos
                </p>
                <h3 className="text-3xl uppercase leading-none text-[var(--color-navy-950)]">
                  {franchise.name}
                </h3>
                <p className="text-sm leading-7 text-slate-600">{franchise.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
