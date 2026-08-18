# Site Shiv Tech

Site institucional da Shiv Tech. Estático, rápido e preparado para crescer:
produtos, cases e conteúdo novo entram sem reescrever o projeto.

**No ar em:** https://rana-shiv.github.io/Shiv-Tech/

---

## O que você consegue fazer sem programar

Estas são as tarefas do dia a dia. Todas podem ser feitas pelo próprio site do
GitHub, pelo navegador, sem instalar nada.

| Quero... | Onde mexer |
|---|---|
| Publicar um produto novo | criar um arquivo em `src/content/produtos/` |
| Publicar um case novo | criar um arquivo em `src/content/cases/` |
| Mudar o texto de um serviço | `src/data/solucoes.ts` |
| Mudar itens do menu | `src/data/navegacao.ts` |
| Trocar o e-mail de contato | `src/data/navegacao.ts` |
| Mudar cores do site | `src/styles/global.css` (bloco `:root`, no topo) |

Depois de salvar a alteração, o site se republica sozinho em cerca de 1 minuto.

---

## Como publicar um produto novo

1. No GitHub, entre em `src/content/produtos/`
2. Clique em **Add file → Create new file**
3. Dê um nome sem acento e sem espaço, terminando em `.md`.
   O nome vira o endereço: `sistema-financeiro.md` → `/produtos/sistema-financeiro`
4. Cole o modelo abaixo, troque os textos e salve (**Commit changes**)

```markdown
---
nome: "Nome do Produto"
chamada: "Uma frase que explica o produto. Aparece no card da listagem."
descricaoSeo: "Frase de até 160 caracteres. É o que o Google mostra na busca."
status: em-breve          # use disponivel quando o produto estiver pronto
ordem: 3                  # menor número aparece primeiro na listagem
problema: "O problema do cliente, em uma frase."
solucao: "A solução, em uma frase."
publico: "Para quem é este produto."
recursos:
  - "Recurso 1"
  - "Recurso 2"
---

## O problema

Escreva aqui em texto normal. Pode usar quantos parágrafos quiser.

## A solução

- Item de lista
- Outro item
```

A página, o card na listagem, o link no rodapé e a entrada no mapa do site para
o Google aparecem sozinhos.

> **Sempre entre aspas.** Os textos do bloco entre `---` precisam ficar entre
> aspas duplas. Sem elas, uma frase que contenha `:` quebra a publicação.

Publicar um **case** funciona igual, usando `src/content/cases/` e os campos
`titulo`, `cliente`, `contexto`, `tecnologias` e `resultado`.

> **Sobre resultados em cases:** deixe `resultado` de fora enquanto não houver
> número medido. O site já trata esse caso e mostra "projeto em andamento".
> Inventar métrica é o jeito mais rápido de perder credibilidade com um cliente
> que sabe fazer conta.

---

## Estrutura do projeto

```
Shiv-Tech/
├── .github/workflows/deploy.yml   Publicação automática
├── astro.config.mjs               Endereço do site e configurações gerais
├── package.json                   Dependências
├── public/                        Arquivos servidos como estão (imagens, ícones)
└── src/
    ├── components/                Pedaços reutilizados (cabeçalho, rodapé, SEO)
    ├── content/                   >>> SEU CONTEÚDO <<<
    │   ├── produtos/              um arquivo .md por produto
    │   └── cases/                 um arquivo .md por case
    ├── content.config.ts          Regras de validação do conteúdo
    ├── data/                      Textos de serviços, menu e contato
    ├── layouts/Base.astro         Molde de todas as páginas
    ├── lib/url.ts                 Monta os endereços internos
    ├── pages/                     Uma página do site por arquivo
    └── styles/global.css          Cores, tipografia e espaçamentos
```

---

## Rodar na sua máquina (opcional)

Só é necessário se você quiser ver as alterações antes de publicar.

```bash
npm install      # uma vez só
npm run dev      # abre em http://localhost:4321
npm run build    # gera a versão final em dist/
```

Requer Node.js 20 ou superior.

---

## Como a publicação funciona

Ao salvar qualquer alteração no branch `main`, o GitHub monta o site e publica
sozinho. Acompanhe pela aba **Actions** do repositório.

**Configuração necessária, uma única vez:**
`Settings → Pages → Build and deployment → Source` = **GitHub Actions**

Se algo der errado, o site anterior continua no ar — uma publicação com erro
não derruba a versão que já está publicada.

---

## Quando você tiver domínio próprio

1. Em `astro.config.mjs`, troque para `site: 'https://seudominio.com.br'` e
   `base: '/'`
2. Crie o arquivo `public/CNAME` com o domínio dentro (só o domínio, uma linha)
3. Atualize o endereço do sitemap em `public/robots.txt`
4. Aponte o DNS do domínio para o GitHub Pages
5. Em `Settings → Pages`, informe o domínio e marque **Enforce HTTPS**

Nenhum link do site precisa ser reescrito: todos são montados a partir dessas
duas configurações.

---

## Decisões técnicas registradas

**Site estático, não CMS.** Sem servidor, sem banco de dados, sem custo mensal e
sem manutenção. Como a Shiv Tech opera sem equipe, qualquer solução que exigisse
atualização de segurança constante estava descartada.

**Conteúdo separado do código.** Produtos e cases em Markdown validado. Publicar
não exige programar, e um campo errado derruba a publicação com mensagem clara
em vez de gerar uma página quebrada.

**Zero JavaScript de framework.** O único script do site abre o menu no celular.
Páginas de 13 a 20 KB, que carregam rápido inclusive em 3G.

**Contato por e-mail com roteiro.** Site estático não envia formulário sozinho.
Em vez de um formulário falso, cada opção da página de contato abre o e-mail com
assunto e roteiro preenchidos.
*Dívida consciente: sem formulário, não há captura de lead em base. Cobra a conta
quando o volume passar de ~10 contatos por mês ou você quiser medir conversão.*

**Botão principal com texto escuro.** Texto branco sobre o gradiente da marca dá
contraste de 2,2:1 e reprova na norma de acessibilidade. Com texto escuro, o pior
ponto fica em 5,3:1 e a cor viva é preservada.

---

## O que ainda falta para uso comercial pleno

- [ ] **Domínio próprio** (~R$ 40/ano no Registro.br) e e-mail profissional
- [ ] **Google Search Console** — cadastrar o site e enviar o sitemap
- [ ] **Google Analytics ou Plausible** — hoje não há medição de visitas
- [ ] **Formulário de contato** com captura de lead
- [ ] **Política de privacidade** — obrigatória a partir do momento em que o site
      coletar dado pessoal (formulário ou analytics com cookie)
- [ ] **Cases com cliente real** — substituir os projetos próprios quando houver
- [ ] **Blog / artigos** — a estrutura já suporta, falta a decisão de manter

---

## Tecnologias

[Astro](https://astro.build) · HTML · CSS · Markdown · GitHub Pages
