import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ProductCard } from "@/components/catalog/product-card";
import { formatPrice, getProductBySlug, getRelatedProducts, products } from "@/data/store";

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Produto não encontrado",
    };
  }

  return {
    title: `${product.team} - ${product.player}`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(product);

  return (
    <main className="pb-10">
      <section className="shell pb-8 pt-6 sm:pt-8">
        <div className="mb-6 text-sm font-semibold text-slate-500">
          <Link href="/" className="hover:text-[var(--color-navy-950)]">
            Home
          </Link>{" "}
          /{" "}
          <Link href="/catalogo" className="hover:text-[var(--color-navy-950)]">
            Catálogo
          </Link>{" "}
          / <span className="text-[var(--color-navy-950)]">{product.player}</span>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="grid gap-4">
            <div className="surface-panel mesh-panel flex items-center justify-center overflow-hidden px-6 py-8 sm:px-8 sm:py-10">
              <div className="w-full max-w-[520px]">
                <Image
                  src={product.image}
                  alt={`Regata ${product.team} de ${product.player}`}
                  width={900}
                  height={900}
                  priority
                  className="h-auto w-full object-contain drop-shadow-[0_18px_34px_rgba(8,17,31,0.16)]"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
              </div>
            </div>
          </div>

          <div className="section-shell px-6 py-8 sm:px-8 sm:py-10">
            <p className="eyebrow">{product.badge}</p>
            <h1 className="mt-4 text-5xl uppercase leading-[0.92] text-[var(--color-navy-950)] sm:text-6xl">
              {product.team}
            </h1>
            <p className="mt-3 text-xl font-semibold text-slate-600">{product.player}</p>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600">{product.description}</p>

            <div className="mt-8 grid gap-4 rounded-[28px] border border-slate-200/80 bg-white p-5 sm:grid-cols-3">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.22em] text-slate-400">
                  Preço de referência
                </p>
                <p className="mt-2 text-3xl font-extrabold tracking-tight text-[var(--color-navy-950)]">
                  {formatPrice(product.price)}
                </p>
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-[0.22em] text-slate-400">
                  Tamanhos
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <span
                      key={size}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm font-bold text-slate-700"
                    >
                      {size}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-[0.22em] text-slate-400">
                  Observação
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Página focada em apresentação visual, leitura de informação e navegação.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href={`/catalogo?team=${encodeURIComponent(product.team)}`} className="cta-secondary">
                Ver mais do mesmo time
              </Link>
              <Link href="/sobre" className="cta-primary">
                Ver página sobre
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <article className="surface-panel p-5">
                <p className="text-sm font-black uppercase tracking-[0.24em] text-[var(--color-red-500)]">
                  Destaque da peça
                </p>
                <p className="mt-4 text-sm leading-7 text-slate-600">{product.story}</p>
              </article>
              <article className="surface-panel p-5">
                <p className="text-sm font-black uppercase tracking-[0.24em] text-[var(--color-red-500)]">
                  Benefícios da peça
                </p>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-[var(--color-red-500)]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="shell py-4">
        <div className="section-shell px-6 py-8 sm:px-8 sm:py-10">
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">Relacionados</p>
              <h2 className="mt-3 text-4xl uppercase leading-none text-[var(--color-navy-950)]">
                Continue explorando a vitrine
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-slate-600">
              Seleção automática baseada em franquia e repertório visual do catálogo atual.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard key={relatedProduct.slug} product={relatedProduct} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
