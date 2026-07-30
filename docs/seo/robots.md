# robots.txt

Arquivo localizado em `public/robots.txt`.

## Produção

```txt
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /dashboard/
Disallow: /api/
Sitemap: https://www.newwavebarber.com.br/sitemap.xml
```

## Desenvolvimento

```txt
User-agent: *
Disallow: /
```

## Observação

Em ambiente de homologação, manter `Disallow: /` para evitar indexação acidental.
