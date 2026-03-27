import Image from "next/image";
import Link from "next/link";

import { getCollectionProducts } from "@/data/store";
import type { Collection } from "@/types/store";

type CollectionsSectionProps = {
  collections: Collection[];
};

export function CollectionsSection({ collections }: CollectionsSectionProps) {
  return (
    <section className="shell py-8 sm:py-10">
      <div className="section-shell px-6 py-8 sm:px-8 sm:py-10">
        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-3">
            <p className="eyebrow">Coleções em destaque</p>
            <h2 className="max-w-3xl text-4xl uppercase leading-none text-[var(--color-navy-950)] sm:text-5xl">
              Seis nomes, seis regatas, sem imagens repetidas dentro da seção.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-slate-600">
            Cada bloco trabalha com duas peças do acervo local. Assim a leitura fica mais clara e a
            vitrine não perde variedade visual.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {collections.map((collection) => {
            const collectionProducts = getCollectionProducts(collection.productSlugs).slice(0, 2);

            return (
              <article
                key={collection.id}
                className="surface-panel flex h-full flex-col overflow-hidden p-5"
              >
                <div className="mb-5 grid grid-cols-2 gap-3">
                  {collectionProducts.map((product) => (
                    <Link
                      key={product.slug}
                      href={`/produto/${product.slug}`}
                      className="mesh-panel flex h-full flex-col rounded-[20px] border border-slate-100 bg-slate-50 p-3 hover:border-[var(--color-red-400)]"
                    >
                      <div className="mx-auto flex min-h-[120px] items-center justify-center">
                        <Image
                          src={product.image}
                          alt={`Regata ${product.team} de ${product.player}`}
                          width={260}
                          height={260}
                          className="h-auto max-h-[110px] w-full object-contain"
                          sizes="(max-width: 1024px) 33vw, 12vw"
                        />
                      </div>
                      <div className="mt-3 space-y-1">
                        <p className="min-h-[2.2rem] line-clamp-2 text-[0.76rem] font-black uppercase leading-tight tracking-[0.12em] text-[var(--color-navy-950)]">
                          {product.player}
                        </p>
                        <p className="min-h-[1.9rem] line-clamp-2 text-[0.74rem] leading-tight text-slate-500">
                          {product.team}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>

                <div className="flex flex-1 flex-col">
                  <div className="space-y-3">
                    <p className="text-[0.72rem] font-black uppercase tracking-[0.28em] text-[var(--color-red-500)]">
                      {collection.eyebrow}
                    </p>
                    <h3 className="text-3xl uppercase leading-none text-[var(--color-navy-950)]">
                      {collection.title}
                    </h3>
                    <p className="text-sm leading-7 text-slate-600">{collection.description}</p>
                  </div>

                  <div className="mt-auto pt-6">
                    <Link
                      href={`/catalogo?collection=${encodeURIComponent(collection.id)}`}
                      className="cta-secondary"
                    >
                      {collection.ctaLabel}
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
