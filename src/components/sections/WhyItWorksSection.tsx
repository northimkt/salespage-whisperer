import { X, Check } from "lucide-react";

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
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">
          Por Que Funciona <span className="text-muted-foreground">(Quando Outros "Treinos" Não Funcionam)</span>
        </h2>

        <div className="space-y-4">
          {comparisons.map((comparison, index) => (
            <div key={index} className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 bg-destructive/10 rounded-lg p-4">
                <X className="w-5 h-5 text-destructive flex-shrink-0" />
                <span className="text-muted-foreground">{comparison.wrong}</span>
              </div>
              <div className="flex items-center gap-3 bg-primary/10 rounded-lg p-4">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="font-medium">{comparison.right}</span>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xl font-bold text-accent mt-12">
          Por isso funciona em 1 hora, não em 1 mês.
        </p>
      </div>
    </section>
  );
};

export default WhyItWorksSection;
