import CTAButton from "@/components/CTAButton";
import ScrollReveal from "@/components/ScrollReveal";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-4 py-16 md:py-24">
      <div className="max-w-3xl mx-auto text-center">
        <ScrollReveal>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Por <span className="text-accent">R$ 1,90 por Dia</span>, Pare de Perder Pacientes no WhatsApp
          </h1>
        </ScrollReveal>
        
        <ScrollReveal delay={0.1}>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12">
            Scripts prontos que transformam "vou pensar" em consulta agendada
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="bg-card border border-border rounded-lg p-6 md:p-8 mb-12 text-left">
            <p className="text-muted-foreground mb-4">Sua secretária acabou de responder:</p>
            <p className="text-xl md:text-2xl italic text-foreground mb-6">
              "Entendo, qualquer coisa estou à disposição."
            </p>
            <p className="text-destructive font-semibold text-lg mb-2">Paciente sumiu.</p>
            <p className="text-muted-foreground">Aconteceu de novo.</p>
            <p className="text-muted-foreground">E vai acontecer amanhã.</p>
            <p className="text-muted-foreground">E depois de amanhã.</p>
            <p className="text-accent font-semibold mt-4 text-lg">Até você ter esses scripts.</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <CTAButton size="xl">
            → QUERO OS SCRIPTS POR R$ 57
          </CTAButton>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default HeroSection;
