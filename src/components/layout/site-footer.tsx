import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-16 bg-[var(--color-navy-950)] text-white">
      <div className="shell py-10">
        <div className="grid gap-8 rounded-[30px] border border-white/10 bg-white/5 px-6 py-8 md:grid-cols-[1.3fr_0.7fr] md:px-8">
          <div className="space-y-4">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-[var(--color-red-400)]">
              NBA Store BR
            </p>
            <h2 className="max-w-xl text-4xl uppercase leading-none text-white sm:text-5xl">
              Regatas, franquias históricas e uma vitrine mais organizada para navegar.
            </h2>
            <p className="max-w-2xl text-sm leading-7 text-slate-300">
              O catálogo reúne peças de destaque da liga em uma navegação direta, com foco em boa
              hierarquia visual e leitura rápida.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-white/80">
                Navegação
              </p>
              <div className="mt-4 flex flex-col gap-3 text-sm text-slate-300">
                <Link href="/">Home</Link>
                <Link href="/catalogo">Catálogo</Link>
                <Link href="/sobre">Sobre</Link>
              </div>
            </div>
            <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-white/80">
                Destaques
              </p>
              <div className="mt-4 space-y-3 text-sm text-slate-300">
                <p>MVP da temporada</p>
                <p>Franquias clássicas</p>
                <p>Somente regatas do acervo local</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-2 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; 2026 NBA Store BR.</p>
          <p>Marcas e identidades citadas pertencem aos respectivos titulares.</p>
        </div>
      </div>
    </footer>
  );
}
