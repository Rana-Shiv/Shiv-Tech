// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// ---------------------------------------------------------------------------
// CONFIGURAÇÃO DO SITE
//
// Hoje o site é publicado no GitHub Pages em:
//   https://rana-shiv.github.io/Shiv-Tech/
//
// Por isso existem DUAS configurações que precisam andar juntas:
//   site -> o endereço completo (usado para gerar sitemap, canonical e Open Graph)
//   base -> a "subpasta" onde o site vive dentro desse endereço
//
// QUANDO VOCÊ TIVER DOMÍNIO PRÓPRIO (ex.: https://shivtech.com.br), troque para:
//   site: 'https://shivtech.com.br',
//   base: '/',
// ...e apague o arquivo public/CNAME ou coloque o domínio dentro dele.
// Nada mais no projeto precisa mudar: todos os links usam essas variáveis.
// ---------------------------------------------------------------------------

export default defineConfig({
  site: 'https://rana-shiv.github.io',
  base: '/Shiv-Tech',
  trailingSlash: 'ignore',
  integrations: [
    sitemap({
      // Não indexar a página de erro
      filter: (page) => !page.includes('/404'),
    }),
  ],
  build: {
    // Gera /solucoes/index.html em vez de /solucoes.html -> URLs mais limpas
    format: 'directory',
  },
  compressHTML: true,
});
