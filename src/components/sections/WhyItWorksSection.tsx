import { X, Check } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const WhyItWorksSection = () => {
  const comparisons = [
    {
      wrong: "Não é curso com horas de vídeo",
      right: "É PDF com scripts para copiar AGORA",
    },
    {
      wrong: 'Não é teoria sobre "seja empática"',
      right: "É palavra por palavra do que responder",
    },
    {
      wrong: 'Não depende de "jeito" da secretária',
      right: "Qualquer pessoa usa (até quem acabou de ser contratada)",
    },
    {
      wrong: 'Não precisa "aprender"',
      right: "Precisa copiar e colar",
    },
  ];

  return (
    <section className="px-4 py-16 md:py-24 bg-card">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Por Que Funciona <span className="text-muted-foreground">(Quando Outros "Treinos" Não Funcionam)</span>
          </h2>
        </ScrollReveal>

        <div className="space-y-4">
          {comparisons.map((comparison, index) => (
            <ScrollReveal key={index} delay={0.1 + index * 0.08}>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 bg-destructive/5 border border-destructive/20 rounded-xl p-4">
                  <X className="w-5 h-5 text-destructive flex-shrink-0" />
                  <span className="text-muted-foreground">{comparison.wrong}</span>
                </div>
                <div className="flex items-center gap-3 bg-secondary/10 border border-secondary/20 rounded-xl p-4">
                  <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="font-medium text-foreground">{comparison.right}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.5}>
          <p className="text-center text-xl font-bold text-primary mt-12">
            Por isso funciona em 1 hora, não em 1 mês.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default WhyItWorksSection;
