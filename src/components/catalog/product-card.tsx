import Image from "next/image";
import Link from "next/link";

import { formatPrice } from "@/data/store";
import type { Product } from "@/types/store";

type ProductCardProps = {
  product: Product;
  priority?: boolean;
};

export function ProductCard({ product, priority = false }: ProductCardProps) {
  return (
    <Link
      href={`/produto/${product.slug}`}
      className="group surface-panel flex h-full flex-col overflow-hidden p-5 hover:-translate-y-1.5 hover:shadow-[0_24px_56px_rgba(8,17,31,0.14)]"
    >
      <div className="mesh-panel relative mb-6 overflow-hidden rounded-[24px] border border-slate-100 bg-slate-50 px-4 py-5">
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[0.68rem] font-black uppercase tracking-[0.24em] text-[var(--color-red-500)] shadow-sm">
          {product.badge}
        </span>
        <div className="mx-auto flex min-h-[250px] max-w-[260px] items-center justify-center transition-transform duration-300 group-hover:-translate-y-1">
          <Image
            src={product.image}
            alt={`Regata ${product.team} de ${product.player}`}
            width={560}
            height={560}
            priority={priority}
            className="h-auto w-full object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>

      <div className="mt-auto space-y-3">
        <p className="text-[0.72rem] font-black uppercase tracking-[0.28em] text-[var(--color-red-500)]">
          {product.team}
        </p>
        <h3 className="text-3xl uppercase leading-none text-[var(--color-navy-950)]">
          {product.player}
        </h3>
        <p className="text-sm leading-7 text-slate-600">{product.summary}</p>
        <div className="flex items-end justify-between gap-4 border-t border-slate-100 pt-4">
          <span className="text-2xl font-extrabold tracking-tight text-[var(--color-navy-950)]">
            {formatPrice(product.price)}
          </span>
          <span className="text-sm font-bold text-slate-700 group-hover:text-[var(--color-navy-950)]">
            Ver produto
          </span>
        </div>
      </div>
    </Link>
  );
}
