/**
 * Soluções e consultoria — o texto do site em um lugar só.
 * Para mudar uma descrição de serviço, edite aqui: a alteração aparece na
 * home, na página de Soluções e onde mais o item for usado.
 *
 * Organizado por PROBLEMA que resolvemos, não por tecnologia que usamos.
 */

export interface Solucao {
  id: string;
  icone: string;
  titulo: string;
  resumo: string;
  /** Detalhamento mostrado na página de Soluções */
  detalhe: string;
  /** Sinais de que a empresa tem esse problema */
  sinais: string[];
}

export const solucoes: Solucao[] = [
  {
    id: 'desenvolvimento',
    icone: '</>',
    titulo: 'Desenvolvimento de sistemas',
    resumo:
      'Sistemas web, aplicações internas e ferramentas sob medida para o jeito que a sua empresa trabalha.',
    detalhe:
      'Quando nenhum sistema de prateleira encaixa no processo, adaptar a empresa ao software costuma sair mais caro do que construir o software certo. Desenvolvemos aplicações sob medida com foco em uso real: simples de operar, fáceis de evoluir e sem funcionalidade que ninguém pediu.',
    sinais: [
      'A operação depende de planilhas que só uma pessoa entende',
      'O sistema atual obriga a equipe a trabalhar de um jeito que não faz sentido',
      'Existe um processo importante que hoje vive no WhatsApp ou no papel',
    ],
  },
  {
    id: 'automacao',
    icone: '⇢',
    titulo: 'Automação de processos',
    resumo:
      'Tarefas repetitivas saem das mãos das pessoas e passam a acontecer sozinhas.',
    detalhe:
      'Toda empresa tem tarefas que se repetem: copiar dados de um lugar para outro, gerar o mesmo relatório toda segunda, enviar a mesma mensagem depois de cada venda. Cada uma dessas tarefas custa horas por mês e é onde os erros aparecem. Mapeamos essas rotinas e automatizamos as que valem a pena — priorizando por tempo economizado, não por dificuldade técnica.',
    sinais: [
      'Alguém gasta horas por semana copiando informação entre sistemas',
      'Relatórios são montados manualmente toda semana ou todo mês',
      'Erros de digitação geram retrabalho com frequência',
    ],
  },
  {
    id: 'ia',
    icone: '✦',
    titulo: 'Inteligência artificial',
    resumo:
      'Aplicação prática de IA em atendimento, análise e produtividade — onde ela realmente resolve.',
    detalhe:
      'IA é útil quando resolve um problema concreto, e cara quando entra por modismo. Avaliamos onde ela faz diferença no seu caso — triagem de atendimento, leitura de documentos, classificação de informação, apoio à análise — e onde uma automação simples resolveria melhor e mais barato. Dizemos os dois casos com a mesma clareza.',
    sinais: [
      'Muito tempo é gasto lendo, classificando ou resumindo texto',
      'O atendimento responde as mesmas perguntas repetidamente',
      'Existe volume de informação que ninguém consegue analisar por falta de tempo',
    ],
  },
  {
    id: 'integracoes',
    icone: '⇄',
    titulo: 'Integrações',
    resumo:
      'Conectamos sistemas e informações que hoje funcionam de forma isolada.',
    detalhe:
      'É comum a empresa já ter as ferramentas certas, mas nenhuma delas conversando com as outras. O resultado é informação duplicada, divergência entre relatórios e trabalho manual de conferência. Integramos sistemas — ERP, e-commerce, planilhas, plataformas de atendimento — para que o dado seja cadastrado uma vez só e circule sozinho.',
    sinais: [
      'O mesmo dado é cadastrado em dois ou três lugares diferentes',
      'Relatórios de sistemas distintos não batem',
      'A conferência entre sistemas virou tarefa fixa de alguém',
    ],
  },
  {
    id: 'dados',
    icone: '◫',
    titulo: 'Dados e dashboards',
    resumo:
      'Transformamos dados operacionais em informação útil para decidir.',
    detalhe:
      'A maioria das empresas tem dados suficientes e informação nenhuma. Estruturamos os dados que já existem e construímos indicadores e painéis que respondem às perguntas que a gestão realmente faz — não a um catálogo genérico de gráficos. O critério é sempre o mesmo: se o número não muda uma decisão, ele não entra no painel.',
    sinais: [
      'As decisões são tomadas por percepção, não por número',
      'Levantar um indicador simples leva dias',
      'Cada área tem sua própria versão do mesmo número',
    ],
  },
  {
    id: 'consultoria',
    icone: '⌁',
    titulo: 'Consultoria',
    resumo:
      'Diagnóstico de processos, tecnologia e oportunidades — antes de construir qualquer coisa.',
    detalhe:
      'Nem todo problema se resolve com software, e nem todo pedido de sistema é um problema de sistema. A consultoria existe para entender o que está acontecendo antes de decidir o que construir — e, muitas vezes, para concluir que a solução é mais simples e mais barata do que parecia.',
    sinais: [
      'Você sabe que algo não funciona, mas não sabe exatamente o quê',
      'Já compraram sistemas antes e o problema continuou',
      'Existe pressa para "informatizar" sem clareza do que resolver',
    ],
  },
];

/* ------------------------------------------------------------------------- */

export interface ServicoConsultoria {
  titulo: string;
  descricao: string;
}

export const servicosConsultoria: ServicoConsultoria[] = [
  {
    titulo: 'Diagnóstico empresarial',
    descricao:
      'Mapeamento de processos, gargalos, riscos e oportunidades. O ponto de partida para saber onde investir — e onde não investir.',
  },
  {
    titulo: 'Melhoria de processos',
    descricao:
      'Identificação e redesenho de processos ineficientes, com foco em reduzir etapas, retrabalho e dependência de pessoas específicas.',
  },
  {
    titulo: 'Transformação digital',
    descricao:
      'Identificação do que pode ser digitalizado ou automatizado, em ordem de retorno — começando pelo que dói mais e custa menos.',
  },
  {
    titulo: 'Estratégia tecnológica',
    descricao:
      'Avaliação das ferramentas já contratadas e definição dos próximos passos. Frequentemente a conclusão é usar melhor o que já existe.',
  },
  {
    titulo: 'Indicadores e gestão',
    descricao:
      'Construção dos indicadores que importam e dos mecanismos para acompanhá-los sem depender de trabalho manual.',
  },
  {
    titulo: 'Automação',
    descricao:
      'Levantamento das tarefas repetitivas que consomem tempo da equipe e podem sair das mãos das pessoas.',
  },
];

/* ------------------------------------------------------------------------- */

export interface Passo {
  numero: string;
  titulo: string;
  descricao: string;
}

export const comoTrabalhamos: Passo[] = [
  {
    numero: '01',
    titulo: 'Entendemos',
    descricao:
      'Conhecemos o negócio, os objetivos e o problema — antes de falar de tecnologia.',
  },
  {
    numero: '02',
    titulo: 'Diagnosticamos',
    descricao: 'Identificamos gargalos, riscos e oportunidades reais.',
  },
  {
    numero: '03',
    titulo: 'Desenhamos',
    descricao:
      'Definimos a solução mais adequada, considerando custo, prazo e o que é possível manter.',
  },
  {
    numero: '04',
    titulo: 'Desenvolvemos',
    descricao: 'Transformamos a decisão em uma solução funcional, em entregas pequenas.',
  },
  {
    numero: '05',
    titulo: 'Implantamos',
    descricao: 'Colocamos em operação e acompanhamos a adoção pelas pessoas.',
  },
  {
    numero: '06',
    titulo: 'Evoluímos',
    descricao: 'Acompanhamos resultados e ajustamos o que a realidade mostrar.',
  },
];

export const fluxoTecnologia = [
  'Problema',
  'Entendimento',
  'Diagnóstico',
  'Processo',
  'Solução',
  'Tecnologia',
  'Implementação',
  'Acompanhamento',
];
