import CTAButton from "@/components/CTAButton";
import ScrollReveal from "@/components/ScrollReveal";
const ClosingSection = () => {
  return <section className="px-4 sm:px-6 py-12 md:py-24 bg-background">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <h2 className="font-heading text-xl sm:text-2xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-foreground">
            Escolha Agora
          </h2>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-8 mb-8 sm:mb-12">
          <ScrollReveal delay={0.1} direction="left">
            <div className="bg-destructive/5 border-2 border-destructive/20 rounded-2xl p-5 sm:p-8 h-full">
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-destructive mb-4 sm:mb-6">Opção 1:</h3>
              <div className="space-y-2 sm:space-y-3 text-base sm:text-lg text-foreground">
                <p>Continuar perdendo paciente.</p>
                <p>Secretária improvisando.</p>
                <p className="text-destructive font-bold">R$ 5.000+ indo embora todo mês.</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1} direction="right">
            <div className="bg-secondary/10 border-2 border-secondary/30 rounded-2xl p-5 sm:p-8 h-full">
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-secondary mb-4 sm:mb-6">Opção 2:</h3>
              <div className="space-y-2 sm:space-y-3 text-base sm:text-lg text-foreground">
                <p className="font-heading text-2xl sm:text-3xl font-extrabold text-primary">R$ 57.</p>
                <p>Sistema Completo Anti Perda de Pacientes.</p>
                <p className="text-secondary font-bold">Funcionando em 1 hora.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.2}>
          <div className="text-center">
            <CTAButton size="xl" className="mb-4 sm:mb-6">
              QUERO PARAR DE PERDER PACIENTES
            </CTAButton>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Acesso imediato • Garantia 7 dias • Pagamento único
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="mt-10 sm:mt-16 space-y-4 sm:space-y-6 text-sm sm:text-base text-muted-foreground">
            <p className="border-l-4 border-primary pl-3 sm:pl-4">
              <span className="font-bold text-foreground">P.S.:</span> Se você perde 1 consulta por semana por falha no atendimento, são R$ 1.600/mês. Este material custa R$ 57 uma vez. Faça a conta.
            </p>
            <p className="border-l-4 border-primary pl-3 sm:pl-4">
              <span className="font-bold text-foreground">P.P.S.:</span> Lembra: 7 dias de garantia total. O risco é zero. A perda de continuar sem os scripts? Essa você já conhece.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>;
};
export default ClosingSection;