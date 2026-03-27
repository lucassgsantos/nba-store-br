import Link from "next/link";

import type { CatalogFilters } from "@/types/store";

type CatalogControlsProps = {
  teams: string[];
  filters: CatalogFilters;
};

const sortOptions = [
  { value: "featured", label: "Ordenar por destaque" },
  { value: "price-asc", label: "Menor preço" },
  { value: "price-desc", label: "Maior preço" },
  { value: "name", label: "Nome / franquia" },
] as const;

function buildCatalogHref(filters: CatalogFilters, overrides: Partial<CatalogFilters>) {
  const params = new URLSearchParams();
  const nextFilters = { ...filters, ...overrides };

  if (nextFilters.collection) {
    params.set("collection", nextFilters.collection);
  }

  if (nextFilters.team) {
    params.set("team", nextFilters.team);
  }

  if (nextFilters.search) {
    params.set("search", nextFilters.search);
  }

  if (nextFilters.sort !== "featured") {
    params.set("sort", nextFilters.sort);
  }

  const query = params.toString();

  return query ? `/catalogo?${query}` : "/catalogo";
}

export function CatalogControls({ teams, filters }: CatalogControlsProps) {
  return (
    <section className="section-shell p-6 sm:p-8">
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <div className="space-y-3">
          <p className="eyebrow">Refine sua busca</p>
          <h2 className="text-3xl uppercase leading-none text-[var(--color-navy-950)] sm:text-4xl">
            Encontre a peça certa por franquia, atleta ou leitura de catálogo.
          </h2>
          <p className="max-w-2xl text-sm leading-7 text-slate-600">
            Os filtros ficam refletidos na URL para você compartilhar o mesmo estado do catálogo.
          </p>
        </div>

        <form
          action="/catalogo"
          className="grid gap-4 rounded-[28px] border border-slate-200/80 bg-white p-5"
        >
          {filters.collection ? (
            <input type="hidden" name="collection" value={filters.collection} />
          ) : null}
          {filters.team ? <input type="hidden" name="team" value={filters.team} /> : null}
          <div className="grid gap-4 md:grid-cols-[1fr_auto]">
            <label className="space-y-2 text-sm font-bold text-slate-700" htmlFor="search">
              Buscar por jogador, time ou destaque
              <input
                id="search"
                name="search"
                defaultValue={filters.search}
                placeholder="Ex.: Curry, Celtics, legacy"
                className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm font-medium text-[var(--color-navy-950)] placeholder:text-slate-400"
              />
            </label>

            <label className="space-y-2 text-sm font-bold text-slate-700" htmlFor="sort">
              Ordenar
              <select
                id="sort"
                name="sort"
                defaultValue={filters.sort}
                className="h-12 min-w-[190px] rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm font-medium text-[var(--color-navy-950)]"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="flex flex-wrap gap-3">
            <button type="submit" className="cta-primary">
              Aplicar filtros
            </button>
            <Link href="/catalogo" className="cta-secondary">
              Limpar tudo
            </Link>
          </div>
        </form>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href={buildCatalogHref(filters, { team: "" })}
          className={`rounded-full border px-4 py-2 text-sm font-bold ${
            !filters.team
              ? "border-[var(--color-navy-950)] bg-[var(--color-navy-950)] text-white"
              : "border-slate-200 bg-white text-slate-700 hover:border-[var(--color-red-400)] hover:text-[var(--color-navy-950)]"
          }`}
        >
          Todos os times
        </Link>
        {teams.map((team) => {
          const isActive = filters.team === team;

          return (
            <Link
              key={team}
              href={buildCatalogHref(filters, { team })}
              className={`rounded-full border px-4 py-2 text-sm font-bold ${
                isActive
                  ? "border-[var(--color-navy-950)] bg-[var(--color-navy-950)] text-white"
                  : "border-slate-200 bg-white text-slate-700 hover:border-[var(--color-red-400)] hover:text-[var(--color-navy-950)]"
              }`}
            >
              {team}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
