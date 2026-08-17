/**
 * ESTE É O "MINI CMS" DO SITE.
 *
 * Produtos e cases são arquivos Markdown dentro de src/content/.
 * Para publicar um produto novo você cria um arquivo .md — não mexe em código.
 * A página, a URL, o card na listagem e a entrada no sitemap aparecem sozinhos.
 *
 * O `schema` abaixo é uma validação: se você esquecer um campo obrigatório ou
 * escrever um valor inválido, o build falha com uma mensagem clara em vez de
 * publicar uma página quebrada.
 */
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const produtos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/produtos' }),
  schema: z.object({
    nome: z.string(),
    // Frase curta que aparece no card da listagem
    chamada: z.string(),
    // Usado na aba do navegador e no Google (150-160 caracteres é o ideal)
    descricaoSeo: z.string(),
    // 'disponivel' mostra a página completa; 'em-breve' mostra só o card
    status: z.enum(['disponivel', 'em-breve']).default('disponivel'),
    // Ordem de exibição na listagem (menor aparece primeiro)
    ordem: z.number().default(99),
    // O problema do cliente, em uma frase — abre a página do produto
    problema: z.string(),
    // A solução, em uma frase
    solucao: z.string(),
    // Lista de recursos mostrada em etiquetas
    recursos: z.array(z.string()).default([]),
    // Para quem é
    publico: z.string().optional(),
  }),
});

const cases = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/cases' }),
  schema: z.object({
    titulo: z.string(),
    chamada: z.string(),
    descricaoSeo: z.string(),
    // 'Projeto próprio' enquanto não houver cliente externo — nunca invente cliente
    cliente: z.string(),
    setor: z.string().optional(),
    ordem: z.number().default(99),
    // Estrutura do case
    problema: z.string(),
    contexto: z.string(),
    solucao: z.string(),
    tecnologias: z.array(z.string()).default([]),
    // Deixe vazio enquanto não houver resultado medido. Não invente número.
    resultado: z.string().optional(),
    emAndamento: z.boolean().default(false),
  }),
});

export const collections = { produtos, cases };
