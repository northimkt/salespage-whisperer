import CTAButton from "@/components/CTAButton";
import ScrollReveal from "@/components/ScrollReveal";

const ClosingSection = () => {
  return (
    <section className="px-4 py-16 md:py-24">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">
            Escolha Agora
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <ScrollReveal delay={0.1} direction="left">
            <div className="bg-destructive/10 border border-destructive/30 rounded-2xl p-8 h-full">
              <h3 className="text-2xl font-bold text-destructive mb-6">Opção 1:</h3>
              <div className="space-y-3 text-lg">
                <p>Continuar perdendo paciente.</p>
                <p>Secretária improvisando.</p>
                <p className="text-destructive font-bold">R$ 5.000+ indo embora todo mês.</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1} direction="right">
            <div className="bg-primary/10 border border-primary/30 rounded-2xl p-8 h-full">
              <h3 className="text-2xl font-bold text-primary mb-6">Opção 2:</h3>
              <div className="space-y-3 text-lg">
                <p className="text-3xl font-bold text-primary">R$ 57.</p>
                <p>Scripts prontos.</p>
                <p className="text-primary font-bold">Funcionando em 1 hora.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.2}>
          <div className="text-center">
            <CTAButton size="xl" className="mb-6">
              → SIM, QUERO PARAR DE PERDER PACIENTES - R$ 57
            </CTAButton>
            <p className="text-sm text-muted-foreground">
              Acesso imediato • Garantia 7 dias • Pagamento único
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="mt-16 space-y-6 text-muted-foreground">
            <p className="border-l-4 border-accent pl-4">
              <span className="font-bold text-foreground">P.S.:</span> Se você perde 1 consulta por semana por falha no atendimento, são R$ 1.600/mês. Este material custa R$ 57 uma vez. Faça a conta.
            </p>
            <p className="border-l-4 border-accent pl-4">
              <span className="font-bold text-foreground">P.P.S.:</span> Lembra: 7 dias de garantia total. O risco é zero. A perda de continuar sem os scripts? Essa você já conhece.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ClosingSection;
