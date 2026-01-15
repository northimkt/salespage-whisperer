import { Gift, Check, Bot, Layout } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const BonusSection = () => {
  return (
    <section className="px-4 py-16 md:py-24 bg-background">
      <div className="max-w-5xl mx-auto">
        {/* Bonus 1 - ChatGPT */}
        <ScrollReveal>
          <div className="bg-card border-2 border-secondary/30 rounded-2xl p-8 md:p-10 mb-8 shadow-lg">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Content */}
              <div>
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

              {/* Image Placeholder - AI/Robot */}
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-3xl blur-xl" />
                  <div className="relative bg-muted rounded-2xl p-8 border border-border shadow-lg">
                    <div className="w-48 h-48 md:w-56 md:h-56 flex flex-col items-center justify-center text-muted-foreground">
                      <Bot className="w-20 h-20 text-secondary/50 mb-4" />
                      <p className="text-sm font-medium text-center">Imagem IA/Robô</p>
                      <p className="text-xs mt-1 text-center">Atendimento inteligente</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Bonus 2 - Trello */}
        <ScrollReveal delay={0.15}>
          <div className="bg-card border-2 border-secondary/30 rounded-2xl p-8 md:p-10 shadow-lg">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Image Placeholder - Trello Screenshot */}
              <div className="flex justify-center order-2 lg:order-1">
                <div className="relative w-full max-w-md">
                  <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-xl" />
                  <div className="relative bg-muted rounded-2xl p-4 border border-border shadow-lg overflow-hidden">
                    {/* Trello-like mockup */}
                    <div className="bg-[hsl(199,89%,35%)] rounded-lg p-3">
                      <div className="flex gap-3 overflow-hidden">
                        {/* Column 1 */}
                        <div className="bg-muted/90 rounded-lg p-2 min-w-[100px] flex-shrink-0">
                          <p className="text-xs font-bold text-foreground mb-2">Novos Leads</p>
                          <div className="space-y-1">
                            <div className="bg-card rounded p-1 text-[8px]">Paciente 1</div>
                            <div className="bg-card rounded p-1 text-[8px]">Paciente 2</div>
                          </div>
                        </div>
                        {/* Column 2 */}
                        <div className="bg-muted/90 rounded-lg p-2 min-w-[100px] flex-shrink-0">
                          <p className="text-xs font-bold text-foreground mb-2">Em Contato</p>
                          <div className="space-y-1">
                            <div className="bg-card rounded p-1 text-[8px]">Paciente 3</div>
                          </div>
                        </div>
                        {/* Column 3 */}
                        <div className="bg-muted/90 rounded-lg p-2 min-w-[100px] flex-shrink-0">
                          <p className="text-xs font-bold text-foreground mb-2">Agendados</p>
                          <div className="space-y-1">
                            <div className="bg-secondary/20 rounded p-1 text-[8px]">Paciente 4</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-3 text-center">
                      <Layout className="w-8 h-8 text-primary/50 mx-auto mb-2" />
                      <p className="text-xs font-medium text-muted-foreground">Template Trello Pronto</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="order-1 lg:order-2">
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
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default BonusSection;
