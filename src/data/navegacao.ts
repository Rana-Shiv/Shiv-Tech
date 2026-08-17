/**
 * Menu do site.
 *
 * Para adicionar, remover ou renomear um item de menu, edite APENAS este
 * arquivo. O cabeçalho e o rodapé de todas as páginas leem daqui.
 */

export interface ItemMenu {
  rotulo: string;
  href: string;
}

export const menuPrincipal: ItemMenu[] = [
  { rotulo: 'Soluções', href: '/solucoes' },
  { rotulo: 'Produtos', href: '/produtos' },
  { rotulo: 'Consultoria', href: '/consultoria' },
  { rotulo: 'Cases', href: '/cases' },
  { rotulo: 'Sobre', href: '/sobre' },
  { rotulo: 'Contato', href: '/contato' },
];

/** E-mail comercial usado nos links de contato do site inteiro. */
export const emailContato = 'angelica.rana@hotmail.com';

/** Nome e frase da marca, usados em vários lugares. */
export const marca = {
  nome: 'Shiv Tech',
  assinatura: 'Tecnologia que resolve.',
  descricaoCurta:
    'Soluções digitais e consultoria para transformar problemas de negócio em resultados.',
};
