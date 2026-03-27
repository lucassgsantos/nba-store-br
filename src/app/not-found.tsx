import Link from "next/link";

export default function NotFound() {
  return (
    <main className="shell pb-14 pt-8">
      <section className="section-shell px-6 py-12 text-center sm:px-8 sm:py-16">
        <p className="eyebrow justify-center">Produto não encontrado</p>
        <h1 className="mt-4 text-5xl uppercase leading-none text-[var(--color-navy-950)] sm:text-6xl">
          A rota solicitada não está na nossa vitrine.
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600">
          O slug informado não corresponde a nenhum produto desta versão. Use o catálogo principal
          para voltar à navegação válida.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/catalogo" className="cta-primary">
            Ir para o catálogo
          </Link>
          <Link href="/" className="cta-secondary">
            Voltar para a home
          </Link>
        </div>
      </section>
    </main>
  );
}
