# SEO — Documentação

## Estrutura

- `public/robots.txt` — regras de indexação.
- `public/sitemap.xml` — mapa do site para buscadores.
- `public/site.webmanifest` — PWA.
- `public/browserconfig.xml` — compatibilidade com Microsoft Edge/Windows.
- `public/_headers` — cabeçalhos de segurança para Netlify.
- `public/_redirects` — redirecionamento SPA para Netlify.
- `netlify.toml` — configuração de build, headers e redirects.
- `src/components/SEOHead.tsx` — meta tags dinâmicas.
- `src/components/JsonLd.tsx` — dados estruturados schema.org.

## Checklist

- [x] robots.txt
- [x] sitemap.xml automatizado no build
- [x] manifest PWA
- [x] Open Graph
- [x] Twitter Cards
- [x] JSON-LD
- [x] Canonical URLs
- [x] netlify.toml
- [x] _headers
- [x] _redirects
- [x] Lighthouse metas definidas

## Próximos passos

- Gerar favicons e og-image reais.
- Validar sitemap e robots após deploy.
- Acompanhar métricas no Google Search Console.
