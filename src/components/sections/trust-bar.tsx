const trustItems = [
  {
    title: "Destaques claros",
    copy: "A home abre com os nomes mais fortes da temporada e mantém a leitura objetiva.",
  },
  {
    title: "Franquias marcantes",
    copy: "As cores, logos e regatas ajudam a variar a vitrine sem misturar linguagens visuais demais.",
  },
  {
    title: "Navegação simples",
    copy: "Busca, filtros e páginas de produto seguem uma estrutura fácil de entender.",
  },
  {
    title: "Leitura responsiva",
    copy: "Os blocos foram ajustados para funcionar bem em mobile, tablet e desktop.",
  },
];

export function TrustBar() {
  return (
    <section className="shell py-4">
      <div className="grid gap-4 lg:grid-cols-4">
        {trustItems.map((item) => (
          <article key={item.title} className="surface-panel p-5">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[var(--color-red-500)]">
              {item.title}
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-600">{item.copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
