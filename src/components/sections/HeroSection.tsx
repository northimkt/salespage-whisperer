import CTAButton from "@/components/CTAButton";
import ScrollReveal from "@/components/ScrollReveal";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-4 py-16 md:py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-3xl mx-auto text-center">
        <ScrollReveal>
          <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-foreground">
            Pare de Perder Pacientes no <span className="text-primary">WhatsApp.</span>
          </h1>
        </ScrollReveal>
        
        <ScrollReveal delay={0.1}>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12">
            Sistema pronto que transforma <span className="font-semibold text-secondary">"vou pensar"</span> em consulta agendada por apenas <span className="font-bold text-primary">R$ 57</span>
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="bg-card border border-border rounded-xl p-6 md:p-8 mb-12 text-left shadow-lg">
            <p className="text-muted-foreground mb-4">Sua secretária acabou de responder:</p>
            <p className="text-xl md:text-2xl italic text-foreground mb-6">
              "Entendo, qualquer coisa estou à disposição."
            </p>
            <p className="text-destructive font-semibold text-lg mb-2">Paciente sumiu.</p>
            <p className="text-muted-foreground">Aconteceu de novo.</p>
            <p className="text-muted-foreground">E vai acontecer amanhã.</p>
            <p className="text-muted-foreground">E depois de amanhã.</p>
            <p className="text-primary font-bold mt-4 text-lg">Até você ter esse sistema.</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <CTAButton size="xl">
            → QUERO O SISTEMA POR R$ 57
          </CTAButton>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default HeroSection;
