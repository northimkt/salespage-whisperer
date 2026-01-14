import ScrollReveal from "@/components/ScrollReveal";

const CostSection = () => {
  return (
    <section className="px-4 py-16 md:py-24 bg-background">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Quanto Custa <span className="text-destructive">Não Ter Isso?</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="bg-destructive/5 border-2 border-destructive/20 rounded-2xl p-8 md:p-10">
            <p className="text-xl font-semibold mb-6 text-foreground">Conta rápida:</p>
            
            <div className="space-y-4 mb-8">
              <p className="text-lg text-foreground">
                Se você perde apenas <span className="font-bold text-primary">5 pacientes por mês</span> por falha no atendimento...
              </p>
              
              <div className="pl-6 space-y-2">
                <p className="text-muted-foreground">→ Consulta média: <span className="font-bold text-foreground">R$ 400</span></p>
                <p className="text-destructive font-bold text-xl">→ R$ 2.000/mês perdidos</p>
              </div>
              
              <div className="pl-6 space-y-2 pt-4">
                <p className="text-muted-foreground">→ Procedimento médio: <span className="font-bold text-foreground">R$ 3.500</span></p>
                <p className="text-destructive font-bold text-xl">→ Se perder 1 por mês = R$ 3.500 perdidos</p>
              </div>
            </div>
            
            <div className="border-t border-destructive/20 pt-6">
              <p className="text-2xl font-bold text-destructive mb-2">
                Total: R$ 5.500/mês escorrendo pelo WhatsApp
              </p>
              <p className="font-heading text-3xl md:text-4xl font-extrabold text-destructive">
                R$ 66.000/ano!
              </p>
              <p className="text-muted-foreground mt-4 italic">
                E estou sendo muito conservador.
              </p>
              <p className="text-xl font-bold text-primary mt-6">
                Uma única consulta recuperada paga esse material 70 vezes
              </p>
              <p className="text-lg text-secondary font-semibold mt-2">
                Se funcionar UMA vez, você já ganhou. Se funcionar toda semana, você cria uma máquina!
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CostSection;
