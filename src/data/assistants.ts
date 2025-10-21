import type { Area } from "../types";

export const AREAS: Area[] = [
  {
    id: "educacao",
    title: "Educação",
    assistants: [
      {
        id: "assistente-educacao",
        name: "Assistente de educação Física",
        desc: "Planeja aulas e treinos personalizados.",
        func: "Criar planos de aula adaptados a diferentes anos letivos, além de atender alunos com necessidades especiais. Produzir ideias de atividades práticas e teóricas, além da formação de treinos e atividades. Elaborar textos explicativos, apresentações, mensagens e informativos para alunos e pais. Sugerir melhorias didáticas sempre com explicações simples e fundamentadas.",
      },
      {
        id: "assistente-agronomia",
        name: "Assistente de Pesquisa Científica em Agronomia",
        desc: "Ajuda estudantes a analisar e resumir artigos acadêmicos",
        func: "O assistente deve resumir artigos, gerar tópicos, criar referências e citações ABNT, organizar estruturas de texto e sugerir ideias de escrita. Tem como objetivo a economia de tempo, aumento da produtividade e a produção de textos revisados.",
      },
    ],
  },
  {
    id: "musica",
    title: "Música",
    assistants: [
      {
        id: "arranjador",
        name: "Arranjador",
        desc: "Sugerir arranjos simples e progressões.",
      },
      {
        id: "afinador",
        name: "Afinador Virtual",
        desc: "Ajuda para afinação e dicas de técnica.",
      },
    ],
  },
  {
    id: "juridico",
    title: "Jurídico",
    assistants: [
      {
        id: "consultor-contratos",
        name: "Consultor de Contratos",
        desc: "Checklist e explicações sobre cláusulas comuns.",
      },
      {
        id: "analista-conformidade",
        name: "Analista de Conformidade",
        desc: "Sugestões de boas práticas e compliance.",
      },
    ],
  },
];
