import CTAButton from "@/components/CTAButton";
import ScrollReveal from "@/components/ScrollReveal";
import { Check, Lock } from "lucide-react";
const OfferSection = () => {
  const included = ["21 scripts prontos para as 7 situações críticas", "Bônus 1: Sistema Anti-Perda com ChatGPT (acesso imediato)", "Bônus 2: Template Trello CRM (liberado em 7 dias)", "Garantia incondicional de 7 dias", "Acesso vitalício", "Pagamento único"];
  return <section className="px-4 py-16 md:py-24 bg-muted/30">
      <div className="max-w-3xl mx-auto text-center">
        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-4xl font-bold mb-8 text-foreground">
            O Investimento Que Se Paga com 1 Consulta
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mb-8">
            <p className="text-muted-foreground mb-4">Esse material poderia custar <span className="line-through">R$ 197</span>.</p>
            <p className="text-lg text-muted-foreground mb-4">
              Afinal, são <span className="font-bold text-primary">18 mil conversas reais</span> analisadas e <span className="font-bold text-primary">37 clínicas</span> testadas.
            </p>
            <p className="text-muted-foreground mb-2">Mas o preço não é esse.</p>
            <p className="text-muted-foreground mb-2">Porque eu quero que toda clínica use.</p>
            <p className="text-muted-foreground">Pequena, grande, começando agora.</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="mb-8">
            <p className="text-muted-foreground mb-2">Por isso:</p>
            <p className="text-4xl font-bold text-muted-foreground/60 line-through mb-2">R$ 197</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="bg-card border-2 border-primary rounded-2xl p-8 md:p-12 mb-8 shadow-xl">
            <p className="font-heading text-6xl md:text-7xl font-extrabold text-primary mb-4">R$ 57</p>
            <p className="text-xl text-muted-foreground mb-4">O preço de um almoço.</p>
            
            <p className="text-lg text-muted-foreground mb-8">Pagamento único. Usa para sempre.</p>

            <div className="flex items-center justify-center gap-2 text-secondary font-bold text-lg mb-6">
              <Lock className="w-5 h-5" />
              <span>ACESSO IMEDIATO E SEGURO</span>
            </div>

            <CTAButton size="xl" className="mb-8">
              ACESSAR AGORA!
            </CTAButton>

            <ul className="text-left max-w-md mx-auto space-y-3">
              {included.map((item, index) => <li key={index} className="flex items-center gap-3 text-foreground">
                  <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span>{item}</span>
                </li>)}
            </ul>

            <p className="text-sm text-muted-foreground mt-6">
              Compra 100% segura • Acesso em 2 minutos
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>;
};
export default OfferSection;