import { X } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const ProblemSection = () => {
  const problems = [
    '"Tá caro"',
    '"Vou ver com meu marido"',
    '"Depois retorno"',
    "Paciente que some depois do orçamento",
    "Consulta não confirmada",
    "Saiu da consulta e não fechou o procedimento",
    'Ficou "pensando" e nunca mais apareceu',
  ];

  return (
    <section className="px-4 py-16 md:py-24 bg-card">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">
            O Problema Que Está Custando Dinheiro na Sua Clínica <span className="text-destructive">AGORA</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="space-y-4 mb-8">
            <p className="text-muted-foreground text-lg">Não é falta de paciente.</p>
            <p className="text-muted-foreground text-lg">Não é preço alto.</p>
            <p className="text-muted-foreground text-lg">Não é concorrência.</p>
            <p className="text-2xl md:text-3xl font-bold text-accent mt-6">É o WhatsApp.</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <p className="text-xl mb-6">
            Todo dia, sua clínica perde pacientes em <span className="font-bold">7 situações que SE REPETEM:</span>
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <ul className="space-y-3 mb-8">
            {problems.map((problem, index) => (
              <li key={index} className="flex items-center gap-3 text-lg">
                <X className="w-5 h-5 text-destructive flex-shrink-0" />
                <span>{problem}</span>
              </li>
            ))}
          </ul>
        </ScrollReveal>

        <ScrollReveal delay={0.25}>
          <div className="border-l-4 border-destructive pl-6 py-4 bg-destructive/10 rounded-r">
            <p className="text-lg mb-2">E sua secretária improvisa.</p>
            <p className="text-lg mb-2">Cada vez de um jeito.</p>
            <p className="text-lg mb-4">Cada dia um desastre diferente.</p>
            <p className="text-xl md:text-2xl font-bold text-destructive">
              Enquanto isso, R$ 2.000, R$ 5.000, R$ 8.000 vão embora TODO MÊS.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ProblemSection;
