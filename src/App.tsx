import { useEffect, useRef, useState, type ReactNode } from "react";

type Feature = {
  title: string;
  description: string;
};

type ShowcaseItem = {
  title: string;
  description: string;
};

const aboutFeatures: Feature[] = [
  {
    title: "Seguranca",
    description:
      "Protocolos preventivos, monitoramento e rotinas operacionais para preservar pessoas e ativos.",
  },
  {
    title: "Transparencia",
    description:
      "Prestacao de contas clara, comunicacao objetiva e acompanhamento de indicadores em tempo real.",
  },
  {
    title: "Economia",
    description:
      "Revisao tecnica de contratos e alocacao inteligente de recursos para reduzir custos recorrentes.",
  },
  {
    title: "Valorizacao Patrimonial",
    description:
      "Melhorias estruturais planejadas para elevar o padrao do condominio e o valor de mercado.",
  },
];

const showcaseItems: ShowcaseItem[] = [
  {
    title: "Piso tatil e acessibilidade",
    description: "Adequacao completa para mobilidade, inclusao e conformidade normativa.",
  },
  {
    title: "Limpeza e conservacao das areas comuns",
    description: "Padronizacao de rotina, materiais e auditoria para elevar a percepcao de cuidado.",
  },
  {
    title: "Corte de grama e jardinagem",
    description: "Plano paisagistico recorrente para manter apresentacao premium em todos os acessos.",
  },
  {
    title: "Remarcacao das vagas",
    description: "Sinalizacao atualizada para melhorar fluxo, seguranca e organizacao visual.",
  },
  {
    title: "Reforma das lixeiras",
    description: "Reestruturacao dos pontos de descarte para higiene, funcionalidade e sustentabilidade.",
  },
  {
    title: "Reforma da entrada principal",
    description: "Modernizacao do primeiro contato com foco em controle, presenca e valor estetico.",
  },
  {
    title: "Reforma do portao",
    description: "Atualizacao de estrutura e acionamento para elevar confiabilidade no acesso.",
  },
  {
    title: "Novo playground infantil",
    description: "Espaco renovado com seguranca certificada e melhor experiencia para familias.",
  },
  {
    title: "Iluminacao nova",
    description: "Projeto luminotecnico para eficiencia energetica e conforto visual noturno.",
  },
  {
    title: "Instalacao de sistema facial",
    description: "Tecnologia de acesso inteligente para reduzir riscos e otimizar processos.",
  },
  {
    title: "Sistema de entregas",
    description: "Fluxo moderno para encomendas com rastreabilidade e retirada organizada.",
  },
  {
    title: "Regularizacao AVCB",
    description: "Conduzimos o processo tecnico para conformidade legal e seguranca coletiva.",
  },
  {
    title: "Reparos das caixas d'agua",
    description: "Intervencoes estruturais e sanitarias para garantir abastecimento adequado.",
  },
  {
    title: "Regularizacao dos extintores",
    description: "Inspecao, reposicao e sinalizacao conforme exigencias vigentes.",
  },
];

const modernizationPoints = [
  "Aplicativo para moradores",
  "Reservas digitais de espacos",
  "Comunicacao moderna e centralizada",
  "Controle de acesso inteligente",
  "Seguranca preditiva",
  "Gestao digital integrada",
];

const efficiencyMetrics = [
  { label: "Reducao da taxa do gas", value: 32 },
  { label: "Revisao de contratos", value: 88 },
  { label: "Eficiencia operacional", value: 79 },
  { label: "Investimento inteligente", value: 74 },
  { label: "Sustentabilidade", value: 69 },
];

const ongoingProjects = [
  "Energia solar",
  "Espaco pet",
  "Academia",
  "Lavanderia compartilhada",
  "Sustentabilidade",
  "Reciclagem",
];

function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${visible ? "reveal-visible" : ""} ${className}`}>
      {children}
    </div>
  );
}

function SectionHeading({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl space-y-4 text-center md:mb-14">
      <p className="text-xs uppercase tracking-[0.32em] text-[#C9A14A]">ESPIN Governanca Condominial</p>
      <h2 className="text-balance text-3xl font-semibold leading-tight text-[#F4F4F1] md:text-5xl">{title}</h2>
      <p className="text-pretty text-base text-zinc-300 md:text-lg">{subtitle}</p>
    </div>
  );
}

function GoldButton({ children, secondary = false }: { children: ReactNode; secondary?: boolean }) {
  return (
    <button
      className={`group relative overflow-hidden px-6 py-3 text-sm font-medium uppercase tracking-[0.14em] transition duration-300 md:px-8 ${
        secondary
          ? "border border-[#C9A14A]/65 text-[#EFE5CE] hover:bg-[#C9A14A]/10"
          : "bg-[#C9A14A] text-[#121212] hover:bg-[#d7b160]"
      }`}
    >
      <span className="relative z-10">{children}</span>
      <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition duration-500 group-hover:translate-x-full" />
    </button>
  );
}

export default function App() {
  return (
    <div className="bg-[#0B0B0B] text-[#EAEAEA] selection:bg-[#C9A14A] selection:text-black">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[#C9A14A]/20 bg-[#0B0B0B]/75 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 md:px-12">
          <p className="text-sm tracking-[0.2em] text-[#F4E8CF]">ESPIN</p>
          <button className="border border-[#C9A14A]/70 px-4 py-2 text-xs uppercase tracking-[0.18em] text-[#EAD8B0] transition hover:bg-[#C9A14A]/10">
            Fale com a ESPIN
          </button>
        </div>
      </header>

      <main>
        <section className="relative flex min-h-screen items-center overflow-hidden border-b border-[#C9A14A]/15 px-6 pb-14 pt-28 md:px-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(201,161,74,0.24),transparent_38%),radial-gradient(circle_at_80%_65%,rgba(201,161,74,0.16),transparent_30%),linear-gradient(135deg,#0B0B0B,#101012_48%,#131313)]" />
          <div className="absolute inset-0 opacity-20 [background:linear-gradient(120deg,transparent_0%,rgba(201,161,74,0.2)_45%,transparent_100%)]" />

          <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center">
            <Reveal className="text-center">
              <div className="mx-auto mb-7 grid h-24 w-24 place-items-center rounded-full border border-[#C9A14A]/70 bg-black/55 text-center shadow-[0_0_35px_rgba(201,161,74,0.3)] backdrop-blur-lg">
                <span className="text-xs tracking-[0.34em] text-[#EEDAAA]">ESPIN</span>
              </div>
              <h1 className="mx-auto max-w-4xl text-balance text-4xl font-semibold leading-tight text-[#F6F3ED] md:text-6xl">
                Transformando condominios com gestao profissional, seguranca e valorizacao patrimonial.
              </h1>
              <p className="mx-auto mt-6 max-w-3xl text-pretty text-base text-zinc-300 md:text-xl">
                Uma administracao moderna, eficiente e transparente para elevar o padrao do seu condominio.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <GoldButton>Solicitar Apresentacao</GoldButton>
                <GoldButton secondary>Conheca os Projetos</GoldButton>
              </div>
            </Reveal>

            <Reveal className="mt-12 w-full max-w-5xl md:mt-16">
              <div className="aspect-[4/3] w-full overflow-hidden border border-[#C9A14A]/45 bg-gradient-to-br from-zinc-900/80 via-zinc-950/80 to-black shadow-[0_0_80px_rgba(201,161,74,0.2)]">
                <div className="relative flex h-full w-full items-center justify-center">
                  <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(201,161,74,0.16),transparent_55%)]" />
                  <div className="absolute inset-8 border border-[#C9A14A]/30 md:inset-12" />
                  <div className="relative text-center">
                    <p className="text-xs uppercase tracking-[0.4em] text-[#c9a14a]">Mockup Premium 4:3</p>
                    <p className="mt-3 text-lg text-zinc-200">Espaco reservado para imagem real do condominio</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-6 py-20 md:px-12 md:py-28">
          <Reveal>
            <SectionHeading
              title="Sobre a ESPIN"
              subtitle="A ESPIN une governanca condominial moderna, seguranca e eficiencia operacional para transformar condominios em referencias de organizacao e valorizacao de patrimonio."
            />
          </Reveal>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {aboutFeatures.map((feature) => (
              <Reveal key={feature.title}>
                <article className="group h-full border border-[#C9A14A]/30 bg-white/[0.03] p-6 backdrop-blur-sm transition duration-300 hover:border-[#C9A14A]/80 hover:bg-[#C9A14A]/[0.06] hover:shadow-[0_0_40px_rgba(201,161,74,0.22)]">
                  <h3 className="text-xl font-medium text-[#F1E8D3]">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-300">{feature.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="border-y border-[#C9A14A]/15 bg-[linear-gradient(180deg,#101010,#0B0B0B)] px-6 py-20 md:px-12 md:py-28">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <SectionHeading
                title="Resultados da Gestao"
                subtitle="Evolucao visivel em cada frente de trabalho com uma abordagem de melhoria continua e entrega de alto padrao."
              />
            </Reveal>

            <div className="grid gap-6 lg:grid-cols-2">
              {showcaseItems.map((item) => (
                <Reveal key={item.title}>
                  <article className="group border border-[#C9A14A]/25 bg-white/[0.02] p-5 transition duration-300 hover:border-[#C9A14A]/70 hover:shadow-[0_0_42px_rgba(201,161,74,0.16)] md:p-6">
                    <h3 className="text-xl text-[#F0E2C3]">{item.title}</h3>
                    <p className="mt-2 text-sm text-zinc-300">{item.description}</p>
                    <div className="mt-5 grid gap-4 sm:grid-cols-2">
                      <div className="group/placeholder aspect-[4/3] border border-[#C9A14A]/25 bg-zinc-950 p-4 transition hover:border-[#C9A14A]/60">
                        <p className="text-xs tracking-[0.24em] text-[#C9A14A]">ANTES</p>
                        <div className="mt-3 flex h-[78%] items-center justify-center border border-dashed border-[#C9A14A]/30 text-center text-xs text-zinc-400">
                          Espaco para imagem 4:3
                        </div>
                      </div>
                      <div className="group/placeholder aspect-[4/3] border border-[#C9A14A]/25 bg-zinc-950 p-4 transition hover:border-[#C9A14A]/60">
                        <p className="text-xs tracking-[0.24em] text-[#C9A14A]">DEPOIS</p>
                        <div className="mt-3 flex h-[78%] items-center justify-center border border-dashed border-[#C9A14A]/30 text-center text-xs text-zinc-400">
                          Espaco para imagem 4:3
                        </div>
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:px-12 md:py-28">
          <Reveal>
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-[#C9A14A]">Tecnologia e Modernizacao</p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#F4F1EA] md:text-5xl">
                Gestao conectada para decisao rapida e operacao precisa
              </h2>
              <p className="mt-5 text-zinc-300">
                Processos digitais, dados centralizados e comunicacao transparente para transformar a experiencia de moradores e conselho.
              </p>
              <ul className="mt-8 space-y-3">
                {modernizationPoints.map((point) => (
                  <li key={point} className="flex items-center gap-3 text-sm text-zinc-200">
                    <span className="inline-block h-2 w-2 rounded-full bg-[#C9A14A] shadow-[0_0_12px_rgba(201,161,74,0.8)]" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal>
            <div className="grid gap-4 sm:grid-cols-2">
              {["App do Morador", "Reservas Digitais"].map((label, index) => (
                <div
                  key={label}
                  className={`relative aspect-[4/3] overflow-hidden border border-[#C9A14A]/40 bg-zinc-950/70 p-4 backdrop-blur-md ${
                    index === 1 ? "sm:translate-y-8" : ""
                  }`}
                >
                  <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(201,161,74,0.14),transparent_45%)]" />
                  <div className="relative h-full border border-[#C9A14A]/30 p-4">
                    <p className="text-xs uppercase tracking-[0.24em] text-[#C9A14A]">Mockup Mobile</p>
                    <div className="mt-4 flex h-[78%] items-center justify-center border border-dashed border-[#C9A14A]/25 text-sm text-zinc-300">
                      {label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        <section className="border-y border-[#C9A14A]/15 bg-[linear-gradient(160deg,#0d0d0f,#141310)] px-6 py-20 md:px-12 md:py-28">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <SectionHeading
                title="Economia e Eficiencia"
                subtitle="Acompanhamento por indicadores para gerar reducao de custos, previsibilidade financeira e investimento inteligente no patrimonio."
              />
            </Reveal>

            <div className="grid gap-4 md:grid-cols-2">
              {efficiencyMetrics.map((metric) => (
                <Reveal key={metric.label}>
                  <div className="border border-[#C9A14A]/30 bg-white/[0.025] p-5 backdrop-blur-sm transition hover:border-[#C9A14A]/70">
                    <div className="mb-3 flex items-center justify-between gap-3">
                      <p className="text-sm text-zinc-200">{metric.label}</p>
                      <p className="text-sm font-medium text-[#E9D3A1]">{metric.value}%</p>
                    </div>
                    <div className="h-2 overflow-hidden bg-zinc-800/90">
                      <div
                        className="h-full bg-gradient-to-r from-[#8f6a20] via-[#C9A14A] to-[#E5CB8A] transition-all duration-1000"
                        style={{ width: `${metric.value}%` }}
                      />
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-6 py-20 md:px-12 md:py-28">
          <Reveal>
            <SectionHeading
              title="Projetos em Andamento"
              subtitle="Frentes estrategicas para ampliar conforto, sustentabilidade e competitividade do condominio no longo prazo."
            />
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {ongoingProjects.map((project) => (
              <Reveal key={project}>
                <article className="group relative overflow-hidden border border-[#C9A14A]/35 bg-zinc-950/65 p-6 transition duration-300 hover:border-[#C9A14A]/80 hover:shadow-[0_0_42px_rgba(201,161,74,0.2)]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(201,161,74,0.2),transparent_55%)] opacity-0 transition group-hover:opacity-100" />
                  <div className="relative flex items-center gap-4">
                    <span className="grid h-10 w-10 place-items-center border border-[#C9A14A]/60 text-[#C9A14A]">
                      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <path d="M12 2l3 6 7 .9-5 4.8 1.2 7.3L12 18l-6.2 3 1.2-7.3L2 8.9 9 8z" />
                      </svg>
                    </span>
                    <h3 className="text-lg text-[#F2E8D2]">{project}</h3>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="relative border-y border-[#C9A14A]/20 px-6 py-20 md:px-12 md:py-28">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(201,161,74,0.3),transparent_45%),linear-gradient(160deg,#0c0c0c,#141414)]" />
          <Reveal className="relative mx-auto max-w-4xl text-center">
            <h2 className="text-balance text-3xl font-semibold text-[#F7F3EA] md:text-5xl">
              Seu condominio merece uma gestao de alto padrao.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-zinc-300">
              Conecte-se com a ESPIN para conhecer o plano de modernizacao e valorizacao ideal para seu empreendimento.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <GoldButton>Entrar em Contato</GoldButton>
              <GoldButton secondary>Solicitar Proposta</GoldButton>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-10 md:flex-row md:items-center md:justify-between md:px-12">
        <div>
          <p className="text-sm tracking-[0.28em] text-[#EEDAAA]">ESPIN</p>
          <p className="mt-2 text-xs text-zinc-400">Governanca Condominial de Alto Padrao</p>
        </div>
        <div className="flex gap-6 text-xs uppercase tracking-[0.14em] text-zinc-300">
          <a href="#" className="transition hover:text-[#C9A14A]">
            Instagram
          </a>
          <a href="#" className="transition hover:text-[#C9A14A]">
            LinkedIn
          </a>
          <a href="#" className="transition hover:text-[#C9A14A]">
            contato@espin.com.br
          </a>
        </div>
        <p className="text-xs text-zinc-500">© 2026 ESPIN. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
