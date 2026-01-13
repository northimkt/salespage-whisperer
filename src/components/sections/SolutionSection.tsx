import ScrollReveal from "@/components/ScrollReveal";

const SolutionSection = () => {
  return (
    <section className="px-4 py-16 md:py-24 bg-background">
      <div className="max-w-3xl mx-auto text-center">
        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-4xl font-bold mb-4 text-foreground">
            A Solução Mais Simples Que Existe
          </h2>
          <p className="text-xl text-primary font-semibold mb-12">(E Você Usa Hoje Mesmo)</p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="bg-card border-2 border-primary/20 rounded-2xl p-8 md:p-12 shadow-lg">
            <h3 className="font-heading text-3xl md:text-5xl font-extrabold text-primary mb-6">
              21 Scripts Prontos para Copiar e Colar
            </h3>
            <p className="text-xl text-muted-foreground mb-8">
              Para as 7 situações que fazem você perder paciente
            </p>
            
            <div className="space-y-4 text-lg text-left max-w-md mx-auto">
              <p className="text-foreground">Cada situação tem <span className="font-bold text-secondary">3 opções de resposta.</span></p>
              <p className="text-foreground">Sua secretária escolhe. Copia. Cola.</p>
              <p className="text-primary font-semibold">Acabou a improviso.</p>
              <p className="text-primary font-semibold">Acabou o "deixa eu pensar no que responder".</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default SolutionSection;
