import CTAButton from "@/components/CTAButton";
import ScrollReveal from "@/components/ScrollReveal";
import heroImage from "@/assets/hero-image.png";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-4 py-16 md:py-24 relative overflow-hidden">
      {/* Background with subtle pattern */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/50"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%2300a0dc' fill-opacity='0.03' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}
      />
      
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <ScrollReveal>
              <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-foreground">
                Pare de Perder Pacientes no <span className="text-primary">WhatsApp.</span>
              </h1>
            </ScrollReveal>
            
            <ScrollReveal delay={0.1}>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                Sistema pronto que transforma <span className="font-semibold text-secondary">"vou pensar"</span> em consulta agendada por apenas <span className="font-bold text-primary">R$ 57</span>
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <CTAButton size="xl" className="mb-8 lg:mb-0">
                ACESSAR AGORA!
              </CTAButton>
            </ScrollReveal>
          </div>

          {/* Hero Image Placeholder */}
          <ScrollReveal delay={0.2}>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl" />
                
                <div className="relative bg-card border border-border rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src={heroImage} 
                    alt="Secretária preocupada olhando o celular" 
                    className="w-64 h-64 md:w-80 md:h-80 object-cover"
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Card section below */}
        <ScrollReveal delay={0.25}>
          <div className="bg-card border border-border rounded-xl p-6 md:p-8 mt-12 text-left shadow-lg max-w-3xl mx-auto lg:mx-0">
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
      </div>
    </section>
  );
};

export default HeroSection;
