import type {
  CatalogFilters,
  CatalogSort,
  Collection,
  FranchiseHighlight,
  Product,
} from "@/types/store";

export const products: Product[] = [
  {
    id: "nuggets-jokic-icon",
    slug: "denver-nuggets-nikola-jokic-icon",
    team: "Denver Nuggets",
    player: "Nikola Jokic",
    price: 279.9,
    image: "/images/jerseys/camisa_nuggets.png",
    badge: "Top 2 da liga",
    featured: true,
    summary: "A regata do pivô mais cerebral da liga, com leitura limpa e peso técnico imediato.",
    description:
      "Modelo pensado para quem quer uma peça oficial com caimento confortável, visual premium e leitura imediata de franquia.",
    story:
      "A camisa dos Nuggets traduz a fase mais dominante da franquia. É a escolha para quem acompanha execução, leitura de jogo e regularidade em alto nível.",
    sizes: ["P", "M", "G", "GG", "XGG"],
    features: [
      "Tecido leve com toque macio",
      "Escudo aplicado em alta definição",
      "Caimento regular para uso em jogo ou lifestyle",
      "Peça pensada para coleção e uso frequente",
    ],
  },
  {
    id: "warriors-curry-icon",
    slug: "golden-state-warriors-stephen-curry-icon",
    team: "Golden State Warriors",
    player: "Stephen Curry",
    price: 279.9,
    image: "/images/jerseys/camisa_warriors.png",
    badge: "Best-seller",
    featured: true,
    summary:
      "Silhueta clássica da era mais influente do perímetro, com acabamento de vitrine e assinatura competitiva.",
    description:
      "Uma das camisas mais procuradas da loja, com visual instantaneamente reconhecível e ótima leitura em composições street e esportivas.",
    story:
      "Os Warriors transformaram o jogo moderno, e a camisa do Curry virou peça de referência para quem valoriza ritmo, espaço e impacto histórico.",
    sizes: ["P", "M", "G", "GG", "XGG"],
    features: [
      "Modelagem equilibrada para uso urbano",
      "Arte frontal com contraste alto",
      "Boa respirabilidade para clima quente",
      "Peça ideal para coleção de eras vencedoras",
    ],
  },
  {
    id: "clippers-kawhi-statement",
    slug: "los-angeles-clippers-kawhi-leonard-statement",
    team: "Los Angeles Clippers",
    player: "Kawhi Leonard",
    price: 279.9,
    image: "/images/jerseys/camisa_clippers.png",
    badge: "Novo drop",
    featured: true,
    summary: "Uma leitura mais sóbria e pesada da costa oeste, para quem prefere presença sem excesso.",
    description:
      "A versão dos Clippers equilibra minimalismo esportivo com um perfil mais técnico, ideal para um catálogo de visual oficial.",
    story:
      "Kawhi representa controle, precisão e execução. Essa regata entrega exatamente essa sensação: silenciosa, forte e funcional.",
    sizes: ["P", "M", "G", "GG"],
    features: [
      "Painéis laterais com leitura dinâmica",
      "Material leve para mobilidade diária",
      "Estética neutra e versátil",
      "Ótima opção para quem prefere paleta discreta",
    ],
  },
  {
    id: "pacers-haliburton-city",
    slug: "indiana-pacers-tyrese-haliburton-city",
    team: "Indiana Pacers",
    player: "Tyrese Haliburton",
    price: 279.9,
    image: "/images/jerseys/camisa_pacers.png",
    badge: "Fast break",
    featured: false,
    summary: "Cor marcante, energia jovem e uma leitura rápida de transição para looks mais ousados.",
    description:
      "A peça dos Pacers traz uma vibração mais elétrica para a vitrine, ótima para compor coleções com variedade visual.",
    story:
      "Haliburton simboliza fluidez e aceleração. É uma regata que funciona bem para quem quer um ponto de cor mais vivo sem perder a linguagem oficial da liga.",
    sizes: ["P", "M", "G", "GG"],
    features: [
      "Azul vibrante com presença forte na grade",
      "Modelagem confortável para sobreposição",
      "Bom contraste entre número e fundo",
      "Peça pensada para repertório visual mais dinâmico",
    ],
  },
  {
    id: "celtics-tatum-association",
    slug: "boston-celtics-jayson-tatum-association",
    team: "Boston Celtics",
    player: "Jayson Tatum",
    price: 279.9,
    image: "/images/jerseys/camisa_celtics.png",
    badge: "Legacy team",
    featured: true,
    summary: "Visual limpo, herança vencedora e uma das franquias mais pesadas da história da NBA.",
    description:
      "A camisa dos Celtics entra na vitrine como peça de autoridade: minimalista, reconhecível e ligada à tradição real.",
    story:
      "Com dezoito títulos, Boston tem peso histórico. A regata do Tatum conecta presente competitivo e legado clássico da liga.",
    sizes: ["P", "M", "G", "GG", "XGG"],
    features: [
      "Paleta clássica com leitura imediata",
      "Excelente para colecionadores de franquias históricas",
      "Acabamento de visual clean",
      "Presença forte mesmo em composições minimalistas",
    ],
  },
  {
    id: "thunder-sga-icon",
    slug: "oklahoma-city-thunder-shai-gilgeous-alexander-icon",
    team: "Oklahoma City Thunder",
    player: "Shai Gilgeous-Alexander",
    price: 279.9,
    image: "/images/jerseys/camisa_thunder.png",
    badge: "MVP 2024-25",
    featured: true,
    summary: "A camisa do MVP mais recente da liga, com presença contemporânea e protagonismo absoluto no catálogo.",
    description:
      "A regata do Thunder entra como peça central da temporada, combinando leitura moderna de franquia com o nome mais forte do momento.",
    story:
      "Shai virou referência de cadência, criação e controle de jogo. Depois do prêmio de MVP de 2024-25, sua camisa passou a ocupar o centro da conversa da temporada.",
    sizes: ["P", "M", "G", "GG"],
    features: [
      "Paleta técnica com bom contraste",
      "Caimento leve para uso prolongado",
      "Peça central para coleções da temporada",
      "Presença forte para torcedores da nova geração",
    ],
  },
];

export const collections: Collection[] = [
  {
    id: "mvp-e-elite",
    eyebrow: "Shai e Jokic",
    title: "MVP e elite atual",
    description:
      "Duas regatas para abrir a home com nomes fortes, sem repetir imagem e sem deixar a leitura confusa.",
    productSlugs: [
      "oklahoma-city-thunder-shai-gilgeous-alexander-icon",
      "denver-nuggets-nikola-jokic-icon",
    ],
    ctaLabel: "Ver dupla principal",
  },
  {
    id: "franquias-historicas",
    eyebrow: "Curry e Tatum",
    title: "Franquias históricas",
    description:
      "Duas camisas ligadas a franquias de peso, com cores e identidades visuais bem diferentes entre si.",
    productSlugs: [
      "golden-state-warriors-stephen-curry-icon",
      "boston-celtics-jayson-tatum-association",
    ],
    ctaLabel: "Ver franquias históricas",
  },
  {
    id: "outros-recortes",
    eyebrow: "Kawhi e Haliburton",
    title: "Outros destaques",
    description:
      "Uma dupla para variar a vitrine com outras franquias, outras paletas e outra leitura de elenco.",
    productSlugs: [
      "los-angeles-clippers-kawhi-leonard-statement",
      "indiana-pacers-tyrese-haliburton-city",
    ],
    ctaLabel: "Ver outros destaques",
  },
];

export const franchiseHighlights: FranchiseHighlight[] = [
  {
    id: "celtics",
    name: "Boston Celtics",
    titles: 18,
    image: "/images/logos/logo-celtics.png",
    summary: "A régua histórica da liga: identidade forte, leitura clássica e um peso que atravessa gerações.",
  },
  {
    id: "lakers",
    name: "Los Angeles Lakers",
    titles: 17,
    image: "/images/logos/logo-lakers.png",
    summary: "A franquia da vitrine máxima. Glamour, estrelas e uma herança visual que sempre conversa com lifestyle.",
  },
  {
    id: "warriors",
    name: "Golden State Warriors",
    titles: 7,
    image: "/images/logos/logo-warriors.png",
    summary: "O emblema de uma revolução recente no jogo. Visual nítido, contemporâneo e imediatamente reconhecível.",
  },
];

const currencyFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

const removeDiacritics = (value: string) =>
  value.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

const normalize = (value: string) => removeDiacritics(value).toLowerCase().trim();

export const formatPrice = (value: number) => currencyFormatter.format(value);

export const getAllTeams = () =>
  [...new Set(products.map((product) => product.team))].sort((left, right) =>
    left.localeCompare(right, "pt-BR"),
  );

export const getProductBySlug = (slug: string) =>
  products.find((product) => product.slug === slug);

export const getFeaturedProducts = () => products.filter((product) => product.featured);

export const getCollectionProducts = (slugs: string[]) =>
  slugs
    .map((slug) => getProductBySlug(slug))
    .filter((product): product is Product => Boolean(product));

export const getCollectionById = (id: string) =>
  collections.find((collection) => collection.id === id);

export const getRelatedProducts = (product: Product, limit = 3) => {
  const sameTeam = products.filter(
    (candidate) => candidate.slug !== product.slug && candidate.team === product.team,
  );

  const fallback = products.filter((candidate) => candidate.slug !== product.slug);

  return [...sameTeam, ...fallback].slice(0, limit);
};

export const parseSort = (value?: string): CatalogSort => {
  if (value === "price-asc" || value === "price-desc" || value === "name") {
    return value;
  }

  return "featured";
};

export const filterProducts = (filters: CatalogFilters) => {
  const normalizedSearch = normalize(filters.search);
  const activeCollection = filters.collection ? getCollectionById(filters.collection) : undefined;

  const filtered = products.filter((product) => {
    const matchesCollection =
      !activeCollection || activeCollection.productSlugs.includes(product.slug);
    const matchesTeam = !filters.team || product.team === filters.team;
    const searchIndex = normalize(
      `${product.team} ${product.player} ${product.badge} ${product.summary}`,
    );
    const matchesSearch = !normalizedSearch || searchIndex.includes(normalizedSearch);

    return matchesCollection && matchesTeam && matchesSearch;
  });

  return filtered.sort((left, right) => {
    if (filters.sort === "price-asc") {
      return left.price - right.price;
    }

    if (filters.sort === "price-desc") {
      return right.price - left.price;
    }

    if (filters.sort === "name") {
      return `${left.team} ${left.player}`.localeCompare(`${right.team} ${right.player}`, "pt-BR");
    }

    if (left.featured !== right.featured) {
      return left.featured ? -1 : 1;
    }

    return left.team.localeCompare(right.team, "pt-BR");
  });
};
