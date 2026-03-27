import type { Metadata } from "next";
import Link from "next/link";

import { CatalogControls } from "@/components/catalog/catalog-controls";
import { ProductCard } from "@/components/catalog/product-card";
import { filterProducts, getAllTeams, getCollectionById, parseSort } from "@/data/store";
import type { CatalogFilters } from "@/types/store";

type CatalogPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export const metadata: Metadata = {
  title: "Catálogo",
  description: "Explore o catálogo de regatas da NBA por time, jogador e destaque.",
};

function getParam(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] ?? "" : value ?? "";
}

export default async function CatalogPage({ searchParams }: CatalogPageProps) {
  const params = await searchParams;
  const filters: CatalogFilters = {
    collection: getParam(params.collection),
    team: getParam(params.team),
    search: getParam(params.search),
    sort: parseSort(getParam(params.sort)),
  };

  const teams = getAllTeams();
  const activeCollection = filters.collection ? getCollectionById(filters.collection) : undefined;
  const results = filterProducts(filters);

  return (
    <main className="pb-10">
      <section className="shell pb-6 pt-6 sm:pt-8">
        <div className="section-shell px-6 py-8 sm:px-8 sm:py-10">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-3">
              <p className="eyebrow">Catálogo</p>
              <h1 className="max-w-4xl text-5xl uppercase leading-[0.92] text-[var(--color-navy-950)] sm:text-6xl">
                Encontre a próxima regata por time, jogador ou destaque.
              </h1>
            </div>
            <p className="max-w-xl text-sm leading-7 text-slate-600">
              A navegação foi organizada para facilitar busca, comparação e leitura do acervo em uma
              grade clara.
            </p>
          </div>
        </div>
      </section>

      <section className="shell space-y-6">
        <CatalogControls teams={teams} filters={filters} />

        {activeCollection ? (
          <div className="section-shell px-6 py-5 sm:px-8">
            <p className="text-[0.72rem] font-black uppercase tracking-[0.28em] text-[var(--color-red-500)]">
              Seleção ativa
            </p>
            <div className="mt-3 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <h2 className="text-3xl uppercase leading-none text-[var(--color-navy-950)]">
                  {activeCollection.title}
                </h2>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">
                  {activeCollection.description}
                </p>
              </div>
              <Link href="/catalogo" className="cta-secondary">
                Ver catálogo completo
              </Link>
            </div>
          </div>
        ) : null}

        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[var(--color-red-500)]">
              {results.length} produto{results.length === 1 ? "" : "s"}
            </p>
            <p className="mt-2 text-sm text-slate-600">
              {filters.collection
                ? "Resultado filtrado pela seleção escolhida na home."
                : filters.team || filters.search
                  ? "Resultado filtrado a partir da URL atual."
                  : "Todos os produtos disponíveis nesta vitrine."}
            </p>
          </div>
          {(filters.collection || filters.team || filters.search || filters.sort !== "featured") && (
            <Link href="/catalogo" className="cta-secondary">
              Limpar filtros
            </Link>
          )}
        </div>

        {results.length > 0 ? (
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {results.map((product, index) => (
              <ProductCard key={product.slug} product={product} priority={index < 3} />
            ))}
          </div>
        ) : (
          <div className="section-shell px-6 py-10 text-center sm:px-8">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[var(--color-red-500)]">
              Nenhum item encontrado
            </p>
            <h2 className="mt-3 text-4xl uppercase leading-none text-[var(--color-navy-950)]">
              Ajuste os filtros e recarregue a vitrine.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600">
              O resultado atual não retornou produtos para essa combinação de time, busca e ordenação.
            </p>
            <Link href="/catalogo" className="cta-primary mt-6">
              Voltar ao catálogo completo
            </Link>
          </div>
        )}
      </section>
    </main>
  );
}
