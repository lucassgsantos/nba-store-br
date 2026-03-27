import Link from "next/link";

export function AboutTeaser() {
  return (
    <section className="shell py-8 sm:py-10">
      <div className="section-shell grid gap-6 px-6 py-8 sm:px-8 sm:py-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-4">
          <p className="eyebrow">Sobre</p>
          <h2 className="max-w-3xl text-4xl uppercase leading-none text-[var(--color-navy-950)] sm:text-5xl">
            Contexto, referências e avisos de uso em uma única página.
          </h2>
          <p className="max-w-2xl text-sm leading-7 text-slate-600">
            Aqui você encontra o recorte do catálogo, a base visual usada nas páginas e as notas
            importantes sobre o uso das marcas citadas.
          </p>
          <Link href="/sobre" className="cta-primary mt-4">
            Ver página sobre
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <article className="surface-panel p-5">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[var(--color-red-500)]">
              Acervo visual
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              A vitrine usa somente nomes, logos e fotos de regatas que já faziam parte do material
              original.
            </p>
          </article>
          <article className="surface-panel p-5">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[var(--color-red-500)]">
              Navegação
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Home, catálogo, produto e sobre organizados de forma mais clara e consistente.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
