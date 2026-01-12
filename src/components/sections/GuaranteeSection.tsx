import { Shield } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const GuaranteeSection = () => {
  return (
    <section className="px-4 py-16 md:py-24">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <div className="bg-secondary border border-border rounded-2xl p-8 md:p-10 text-center">
            <Shield className="w-16 h-16 text-primary mx-auto mb-6" />
            
            <h2 className="text-2xl md:text-4xl font-bold mb-8">
              Garantia Simples: 7 Dias Para Testar Tudo
            </h2>

            <div className="text-left max-w-lg mx-auto space-y-4 text-lg mb-8">
              <p>Baixa os scripts.</p>
              <p>Usa na sua clínica.</p>
              <p>Vê o resultado por 7 dias.</p>
              <p className="text-primary font-semibold">Se não valer cada centavo, me manda um email.</p>
              <p className="text-2xl font-bold text-accent">Devolvo 100%.</p>
              <p className="text-muted-foreground">Sem pergunta.</p>
              <p className="text-muted-foreground">Sem enrolação.</p>
            </div>

            <p className="text-xl font-bold text-primary">
              Você literalmente não tem nada a perder.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default GuaranteeSection;
