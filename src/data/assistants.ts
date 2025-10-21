import type { Area } from "../types";

export const AREAS: Area[] = [
  {
    id: "educacao",
    title: "Educação",
    assistants: [
      {
        id: "assistente-educacao",
        name: "Planejador de Aula e Treino de Educação Física",
        desc: "Planeja aulas e treinos personalizados.",
        func: "Criar planos de aula adaptados a diferentes anos letivos, além de atender alunos com necessidades especiais. Produzir ideias de atividades práticas e teóricas, além da formação de treinos e atividades. Elaborar textos explicativos, apresentações, mensagens e informativos para alunos e pais. Sugerir melhorias didáticas sempre com explicações simples e fundamentadas.",
      },
      {
        id: "assistente-agronomia",
        name: "Analista de Pesquisa Científica em Agronomia",
        desc: "Ajuda estudantes a analisar e resumir artigos acadêmicos",
        func: "O assistente deve resumir artigos, gerar tópicos, criar referências e citações ABNT, organizar estruturas de texto e sugerir ideias de escrita. Tem como objetivo a economia de tempo, aumento da produtividade e a produção de textos revisados.",
      },
      {
        id: "assistente-pedagogico",
        name: "Organizador de Encontros Pedagógicos",
        desc: "Assistente criado para planejar, estruturar e otimizar encontros pedagógicos e formações docentes.",
        func: "Auxilia na distribuição de tempo, definição de pautas e registro das atividades, garantindo eventos organizados, produtivos e alinhados aos objetivos educacionais.",
      },
      {
        id: "assistente-avaliadorPedagogico",
        name: "Avaliador Pedagógico para Professores de Universidade",
        desc: "Esse assistente analisa planos produzidos por professores, revisando escrita, objetivos e coerência pedagógica.",
        func: "Ele sugere melhorias em atividades, materiais e linguagem, tornando o conteúdo mais dinâmico e alinhado à ementa. Atua diretamente em cada tópico do documento, otimizando o tempo de avaliação. Seu propósito é elevar a qualidade das disciplinas e fortalecer a experiência de ensino-aprendizagem.",
      },
    ],
  },
  {
    id: "musica",
    title: "Música",
    assistants: [
      {
        id: "assistente-musical",
        name: "Co-produtor/Diretor Artístico-Musical",
        desc: "Atua na organização de processos criativos, soluções técnicas e análises musicais práticas.",
        func: "Assistente criado para integrar direção artística, gestão técnica e curadoria musical em produções autorais e colaborativas. Seu escopo é voltado à direção artística e musical. O objetivo é aliviar a sobrecarga de tarefas criativas e técnicas — curadoria, organização de documentos, assistência em arranjos, solução de problemas tecnológicos e decisões estéticas em estúdio e palco.",
      },
      {
        id: "assistente-socialMidiaMusical",
        name: "Produtor de Conteúdo para Rede Social de Músico",
        desc: "Assistente digital responsável por traduzir a identidade artística em conteúdo audiovisual autêntico",
        func: "Ele sugere ideias de posts, roteiros, legendas e vídeos, organiza calendário de publicações e adapta o estilo para música.",
      },
    ],
  },
  {
    id: "juridico",
    title: "Jurídico",
    assistants: [
      {
        id: "assistente-juridico",
        name: "Assistente Jurídico para Atividades Profissionais e Acadêmicas ",
        desc: "Produz resumos, análises e pesquisas jurídicas com precisão técnica.",
        func: "Assistente criado para agilizar tarefas acadêmicas na área jurídica e otimizar a rotina de estudos e trabalho do profissional do Direito. O objetivo do assistente é auxiliar tarefas jurídicas, organizar estudos e otimizar o tempo, beneficiando o usuário e o escritório em que trabalha.",
      },
      {
        id: "assistente-processual",
        name: "Assistente de Análise Processual",
        desc: "Lê, interpreta e resume autos processuais digitais extensos",
        func: "Oferece análises objetivas, relatórios técnicos e resumos estruturados, auxiliando profissionais do Direito nas tomadas de decisão.",
      },
      {
        id: "assistente-produtorJuridico",
        name: "Produtor de Conteúdo Jurídico",
        desc: "Este assistente foi criado para apoiar advogados criminalistas na construção de uma presença digital sólida, estratégica e ética, com foco em gerar autoridade, empatia e credibilidade junto ao público.",
        func: "Ele atua como um planejador e redator especializado em conteúdo jurídico-criminal, adaptando linguagem técnica a formatos acessíveis e humanizados.",
      },
    ],
  },
  {
    id: "Jornalismo",
    title: "Jornalismo",
    assistants: [
      {
        id: "assistente-midias",
        name: "Gestor de Midias Sociais",
        desc: "Assistente digital desenvolvido para planejar, redigir e otimizar conteúdos para redes sociais de maneira inteligente e autêntica.",
        func: "Sua função é gerar ideias criativas, legendas envolventes e roteiros curtos, mantendo coerência com o tom profissional e os objetivos da marca.Projetado para aumentar o engajamento, fortalecer a autoridade e impulsionar resultados, garante que cada publicação seja natural, estratégica e direcionada ao público ideal.",
      },
      {
        id: "assistente-publicacoes",
        name: "Analista de desempenho de publicações",
        desc: "Assistente criado para monitorar, interpretar e otimizar os resultados de postagens em redes sociais.",
        func: "Analisa métricas de alcance, engajamento e conversão, oferecendo insights práticos para aprimorar estratégias de conteúdo e ampliar resultados.",
      },
      {
        id: "assistente-comunicacao",
        name: "Gestor de Ecossistema de Comunicação",
        desc: "Assistente criado para mapear, organizar e atualizar informações sobre profissionais da área da comunicação no Maranhão.",
        func: "Facilita o acesso a contatos, fontes e redes de colaboração, fortalecendo o ecossistema jornalístico e ampliando as conexões entre comunicadores.",
      },
    ],
  },
  {
    id: "tecnologia",
    title: "Tecnologia",
    assistants: [
      {
        id: "assistente-digital",
        name: "Tutor Digital Acadêmico",
        desc: "Assistente criado para otimizar a produção e revisão de materiais acadêmicos, oferecendo suporte inteligente a estudantes e pesquisadores.",
        func: "Auxilia na organização de ideias, clareza textual e compreensão de conteúdos complexos, tornando o aprendizado mais dinâmico e eficiente.",
      },
      {
        id: "assistente-digitalTarefas",
        name: "Gestor Digital de Rotinas/Coordenador Digital de Tarefas",
        desc: "Assistente criado para organizar tarefas e estruturar rotinas diárias de forma simples, leve e eficiente",
        func: "Ajuda o usuário a manter o foco, otimizar o tempo e equilibrar prioridades, promovendo produtividade com clareza e leveza no dia a dia.",
      },
    ],
  },
];
