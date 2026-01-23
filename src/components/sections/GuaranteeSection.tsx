import { Shield } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const GuaranteeSection = () => {
  return (
    <section className="px-4 sm:px-6 py-12 md:py-24 bg-muted/30">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <div className="bg-card border-2 border-secondary/30 rounded-2xl p-5 sm:p-8 md:p-10 text-center shadow-lg">
            <Shield className="w-12 h-12 sm:w-16 sm:h-16 text-secondary mx-auto mb-4 sm:mb-6" />
            
            <h2 className="font-heading text-xl sm:text-2xl md:text-4xl font-bold mb-6 sm:mb-8 text-foreground">
              Garantia Simples: 7 Dias Para Testar Tudo
            </h2>

            <div className="text-left max-w-lg mx-auto space-y-3 sm:space-y-4 text-base sm:text-lg mb-6 sm:mb-8">
              <p className="text-foreground">Baixa os scripts.</p>
              <p className="text-foreground">Usa na sua clínica.</p>
              <p className="text-foreground">Vê o resultado por 7 dias.</p>
              <p className="text-primary font-semibold">Se não valer cada centavo, me manda um email.</p>
              <p className="text-xl sm:text-2xl font-bold text-secondary">Devolvo 100%.</p>
              <p className="text-muted-foreground">Sem pergunta.</p>
              <p className="text-muted-foreground">Sem enrolação.</p>
            </div>

            <p className="text-lg sm:text-xl font-bold text-primary">
              Você literalmente não tem nada a perder.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default GuaranteeSection;
