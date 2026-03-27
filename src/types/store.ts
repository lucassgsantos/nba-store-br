export type CatalogSort = "featured" | "price-asc" | "price-desc" | "name";

export type Product = {
  id: string;
  slug: string;
  team: string;
  player: string;
  price: number;
  image: string;
  badge: string;
  featured: boolean;
  summary: string;
  description: string;
  story: string;
  sizes: string[];
  features: string[];
};

export type Collection = {
  id: string;
  title: string;
  eyebrow: string;
  description: string;
  productSlugs: string[];
  ctaLabel: string;
};

export type FranchiseHighlight = {
  id: string;
  name: string;
  titles: number;
  image: string;
  summary: string;
};

export type CatalogFilters = {
  collection: string;
  team: string;
  search: string;
  sort: CatalogSort;
};
