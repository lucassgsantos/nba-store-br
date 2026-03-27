import type { Metadata } from "next";
import Image from "next/image";

import { franchiseHighlights } from "@/data/store";

const pillars = [
  {
    title: "Contexto",
    copy: "Regatas, franquias históricas e nomes centrais da liga formam o recorte visual desta vitrine.",
  },
  {
    title: "Seleção",
    copy: "O catálogo reúne peças de equipes com identidades bem diferentes para manter ritmo, contraste e variedade.",
  },
  {
    title: "Uso",
    copy: "As marcas aparecem aqui como referência cultural e visual, sem vínculo comercial com a NBA.",
  },
];

export const metadata: Metadata = {
  title: "Sobre",
  description: "Contexto, recorte visual e avisos de uso da vitrine NBA Store BR.",
};

export default function AboutPage() {
  return (
    <main className="pb-10">
      <section className="shell pb-6 pt-6 sm:pt-8">
        <div className="section-shell px-6 py-8 sm:px-8 sm:py-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-end">
            <div className="space-y-4">
              <p className="eyebrow">Sobre</p>
              <h1 className="max-w-4xl text-5xl uppercase leading-[0.92] text-[var(--color-navy-950)] sm:text-6xl">
                Uma vitrine inspirada na NBA, com foco em clareza visual e navegação.
              </h1>
              <p className="max-w-2xl text-base leading-8 text-slate-600">
                Esta página reúne o contexto do catálogo, os principais eixos visuais da navegação e
                os avisos importantes sobre o uso das marcas e identidades citadas.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {pillars.map((pillar) => (
                <article key={pillar.title} className="surface-panel p-5">
                  <p className="text-sm font-black uppercase tracking-[0.22em] text-[var(--color-red-500)]">
                    {pillar.title}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{pillar.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="shell py-8">
        <div className="section-shell px-6 py-8 sm:px-8 sm:py-10">
          <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="eyebrow">Franquias em foco</p>
              <h2 className="mt-3 text-4xl uppercase leading-none text-[var(--color-navy-950)] sm:text-5xl">
                Alguns dos escudos mais marcantes da liga seguem como base editorial da vitrine.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-slate-600">
              O recorte usa equipes e atletas reconhecíveis para trabalhar contraste, agrupamento e
              leitura de interface em um catálogo esportivo.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {franchiseHighlights.map((franchise) => (
              <article key={franchise.id} className="surface-panel p-5">
                <div className="mesh-panel flex min-h-[180px] items-center justify-center rounded-[24px] border border-slate-100 bg-slate-50 px-4 py-6">
                  <Image
                    src={franchise.image}
                    alt={`Logo do ${franchise.name}`}
                    width={300}
                    height={300}
                    className="h-auto max-h-[120px] w-full object-contain"
                    sizes="(max-width: 768px) 60vw, 22vw"
                  />
                </div>
                <p className="mt-5 text-[0.72rem] font-black uppercase tracking-[0.28em] text-[var(--color-red-500)]">
                  {franchise.titles} títulos
                </p>
                <h3 className="mt-2 text-3xl uppercase leading-none text-[var(--color-navy-950)]">
                  {franchise.name}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{franchise.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="shell py-4">
        <div className="grid gap-5 lg:grid-cols-2">
          <article className="section-shell px-6 py-8 sm:px-8">
            <p className="eyebrow">Base visual</p>
            <h2 className="mt-4 text-4xl uppercase leading-none text-[var(--color-navy-950)]">
              Regatas, nomes de jogadores e escudos concentram a identidade visual da vitrine.
            </h2>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-600">
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-[var(--color-red-500)]" />
                <span>As imagens de produto mantêm o foco direto nas peças.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-[var(--color-red-500)]" />
                <span>Os nomes dos atletas ajudam a localizar cada regata com rapidez.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-[var(--color-red-500)]" />
                <span>As cores das franquias ajudam a variar a leitura entre os blocos da navegação.</span>
              </li>
            </ul>
          </article>

          <article className="section-shell px-6 py-8 sm:px-8">
            <p className="eyebrow">Aviso de uso</p>
            <h2 className="mt-4 text-4xl uppercase leading-none text-[var(--color-navy-950)]">
              As marcas citadas pertencem aos seus titulares e aparecem aqui apenas como referência.
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              O objetivo desta vitrine é apresentar uma proposta visual e estrutural. Não existe
              vínculo comercial com a NBA, nem operação oficial de venda.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
