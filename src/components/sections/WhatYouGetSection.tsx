import { Check } from "lucide-react";

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
    <section className="px-4 py-16 md:py-24 bg-card">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-4">
          O Que Você Recebe
        </h2>
        <p className="text-center text-accent text-lg mb-12">
          (Tudo em PDF, Acesso Imediato)
        </p>

        <div className="bg-secondary/50 rounded-xl p-6 mb-8">
          <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
            <Check className="w-6 h-6" />
            SCRIPTS DAS 7 SITUAÇÕES CRÍTICAS
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {situations.map((situation, index) => (
            <div
              key={index}
              className="bg-secondary rounded-lg p-6 border border-border hover:border-primary/50 transition-colors"
            >
              <h4 className="text-lg font-bold text-primary mb-4">{situation.title}</h4>
              <ul className="space-y-2">
                {situation.bullets.map((bullet, bulletIndex) => (
                  <li key={bulletIndex} className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-primary mt-1">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="space-y-4 text-center">
          <p className="text-xl font-bold text-accent">+ Regras de Ouro do Atendimento</p>
          <p className="text-xl font-bold text-accent">+ Guia de quando usar cada script</p>
          <p className="text-xl font-bold text-accent">+ Exemplos reais explicados</p>
        </div>
      </div>
    </section>
  );
};

export default WhatYouGetSection;
