import { Gift, Check } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const BonusSection = () => {
  return (
    <section className="px-4 py-16 md:py-24 bg-background">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <div className="bg-card border-2 border-secondary/30 rounded-2xl p-8 md:p-10 mb-8 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <Gift className="w-8 h-8 text-secondary" />
              <h3 className="font-heading text-2xl font-bold text-foreground">BÔNUS 1: Sistema Anti-Perda com ChatGPT</h3>
            </div>
            <p className="text-secondary text-sm font-semibold mb-4">(Liberação imediata)</p>
            
            <p className="text-lg mb-4 text-foreground">Para situações onde não existe script pronto.</p>
            <p className="text-muted-foreground mb-4">3 prompts profissionais que sua secretária usa assim:</p>
            
            <p className="text-lg font-semibold mb-4 text-foreground">Funciona para:</p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2 text-foreground">
                <Check className="w-5 h-5 text-secondary" />
                <span>Paciente que pediu preço e sumiu</span>
              </li>
              <li className="flex items-center gap-2 text-foreground">
                <Check className="w-5 h-5 text-secondary" />
                <span>Paciente que parou de responder</span>
              </li>
              <li className="flex items-center gap-2 text-foreground">
                <Check className="w-5 h-5 text-secondary" />
                <span>Paciente indeciso que não fecha</span>
              </li>
            </ul>
            
            <div className="border-t border-secondary/30 pt-6">
              <p className="text-xl font-bold text-primary">+ Checklist de Padronização Completo</p>
              <p className="text-muted-foreground mt-2">Para sua clínica nunca mais improvisar.</p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="bg-card border-2 border-secondary/30 rounded-2xl p-8 md:p-10 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <Gift className="w-8 h-8 text-secondary" />
              <h3 className="font-heading text-2xl font-bold text-foreground">BÔNUS 2: Template Trello "Fluxo Simples de Pacientes"</h3>
            </div>
            <p className="text-secondary text-sm font-semibold mb-4">(Liberado após 7 dias)</p>
            
            <p className="text-lg mb-4 text-foreground">CRM visual completo e pronto para usar.</p>
            
            <p className="text-2xl font-bold text-primary mb-2">Chega de planilha.</p>
            <p className="text-2xl font-bold text-primary mb-6">Chega de "achismo".</p>
            
            <p className="text-lg font-semibold mb-4 text-foreground">Quadro Trello com:</p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2 text-foreground">
                <Check className="w-5 h-5 text-secondary" />
                <span>Todo funil de atendimento configurado</span>
              </li>
              <li className="flex items-center gap-2 text-foreground">
                <Check className="w-5 h-5 text-secondary" />
                <span>Instruções em cada coluna</span>
              </li>
              <li className="flex items-center gap-2 text-foreground">
                <Check className="w-5 h-5 text-secondary" />
                <span>Sistema de etiquetas pronto</span>
              </li>
              <li className="flex items-center gap-2 text-foreground">
                <Check className="w-5 h-5 text-secondary" />
                <span>Zero paciente esquecido</span>
              </li>
            </ul>
            
            <p className="text-secondary font-semibold">
              Copia o template. Em 10 minutos está funcionando.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default BonusSection;
