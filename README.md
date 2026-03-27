# NBA Store BR

NBA Store BR é uma vitrine de regatas inspirada no universo da NBA, refeita em Next.js com foco em navegação clara, catálogo enxuto e uma camada visual mais consistente do que a versão estática original.

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4

## Estrutura

```text
src/
  app/                 rotas e layout principal
  components/          blocos reutilizáveis da interface
  data/                dados do catálogo e destaques
  types/               tipos compartilhados

public/
  images/
    jerseys/           imagens das regatas usadas no app
    logos/             logos das franquias usadas nas seções editoriais

legacy/
  site/                versão estática original preservada para referência
```

## Rotas

- `/` home com destaque da temporada, coleções e franquias em foco
- `/catalogo` catálogo com filtros por query string (`collection`, `team`, `search`, `sort`)
- `/produto/[slug]` página individual de cada regata
- `/sobre` contexto da vitrine e avisos de uso

## Desenvolvimento

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Build de produção

```bash
npm run build
npm run start
```

## Observações

- Os assets usados pela aplicação atual ficam em `public/images`.
- O material estático antigo foi movido para `legacy/site` para sair da raiz do projeto sem perder o histórico visual da primeira versão.
- Não há checkout, carrinho ou integração com backend nesta versão.
