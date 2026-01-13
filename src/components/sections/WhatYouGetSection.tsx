import { Check } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const WhatYouGetSection = () => {
  const situations = [
    {
      title: 'Situação 1: "Tá Caro"',
      bullets: [
        "3 scripts que reformulam objeção sem pressionar",
        'Transforma "caro" em "quero saber mais"',
      ],
    },
    {
      title: 'Situação 2: "Vou Ver com Meu Marido/Esposa"',
      bullets: [
        "3 scripts que facilitam a decisão",
        "Agenda retorno em vez de esperar passivamente",
      ],
    },
    {
      title: 'Situação 3: "Depois Retorno"',
      bullets: [
        "3 scripts que criam compromisso",
        "Evita silêncio infinito",
      ],
    },
    {
      title: "Situação 4: Follow-up de Paciente que Sumiu",
      bullets: [
        "3 scripts que resgatam sem cobrar",
        "Alta taxa de resposta",
      ],
    },
    {
      title: "Situação 5: Confirmação de Consulta",
      bullets: [
        "3 scripts que reduzem faltas",
        "Agenda mais eficiente",
      ],
    },
    {
      title: "Situação 6: Pós-Consulta",
      bullets: [
        "3 scripts que abrem venda de procedimento",
        "Sem pressão, com resultado",
      ],
    },
    {
      title: "Situação 7: Recuperação de Procedimento Não Fechado",
      bullets: [
        "3 scripts que resgatam propostas esquecidas",
        "Dinheiro que ia ficar perdido",
      ],
    },
  ];

  return (
    <section className="px-4 py-16 md:py-24 bg-muted/40">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-4xl font-bold text-center mb-4 text-foreground">
            O Que Você Recebe
          </h2>
          <p className="text-center text-primary font-semibold text-lg mb-12">
            (Tudo em PDF, Acesso Imediato)
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
              <Check className="w-6 h-6" />
              SCRIPTS DAS 7 SITUAÇÕES CRÍTICAS
            </h3>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {situations.map((situation, index) => (
            <ScrollReveal key={index} delay={0.1 + index * 0.05}>
              <div className="bg-card rounded-xl p-6 border border-border hover:border-primary/40 transition-colors h-full shadow-sm hover:shadow-md">
                <h4 className="text-lg font-bold text-primary mb-4">{situation.title}</h4>
                <ul className="space-y-2">
                  {situation.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="flex items-start gap-2 text-muted-foreground">
                      <span className="text-secondary mt-1">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4}>
          <div className="space-y-4 text-center">
            <p className="text-xl font-bold text-secondary">+ Regras de Ouro do Atendimento</p>
            <p className="text-xl font-bold text-secondary">+ Guia de quando usar cada script</p>
            <p className="text-xl font-bold text-secondary">+ Exemplos reais explicados</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default WhatYouGetSection;
