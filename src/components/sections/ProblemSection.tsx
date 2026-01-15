import { X } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import WhatsAppMockup from "@/components/WhatsAppMockup";

const ProblemSection = () => {
  const problems = [
    '"Tá caro"',
    '"Vou ver com meu marido"',
    '"Depois retorno"',
    "Paciente que some depois do orçamento",
    "Consulta não confirmada",
    "Saiu da consulta e não fechou o procedimento",
    'Ficou "pensando" e nunca mais apareceu',
  ];

  const whatsappConversations = [
    {
      contactName: "Paciente - Orçamento",
      messages: [
        { text: "Oi, qual o valor da consulta?", isPatient: true, time: "10:32" },
        { text: "Olá! A consulta custa R$ 350,00", isPatient: false, time: "10:35" },
        { text: "Hmm, tá caro... vou pensar", isPatient: true, time: "10:36" },
        { text: "Ok, qualquer coisa estou à disposição!", isPatient: false, time: "10:38" },
      ]
    },
    {
      contactName: "Maria - Procedimento",
      messages: [
        { text: "Gostei muito do orçamento!", isPatient: true, time: "14:20" },
        { text: "Vou ver com meu marido e te retorno", isPatient: true, time: "14:21" },
        { text: "Perfeito, aguardo seu retorno!", isPatient: false, time: "14:25" },
      ]
    },
    {
      contactName: "Ana - Procedimento",
      messages: [
        { text: "Então, conseguiu falar com seu marido?", isPatient: false, time: "09:15" },
        { text: "Visualizado", isPatient: true, time: "09:15" },
      ]
    },
  ];

  return (
    <section className="px-4 py-16 md:py-24 bg-card">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-4xl font-bold text-center mb-8 text-foreground">
            O Problema Que Está Custando Dinheiro na Sua Clínica <span className="text-destructive">AGORA</span>
          </h2>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Text content */}
          <div>
            <ScrollReveal delay={0.1}>
              <div className="space-y-4 mb-8">
                <p className="text-muted-foreground text-lg">Não é falta de paciente.</p>
                <p className="text-muted-foreground text-lg">Não é preço alto.</p>
                <p className="text-muted-foreground text-lg">Não é concorrência.</p>
                <p className="text-2xl md:text-3xl font-bold text-primary mt-6">É o WhatsApp.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <p className="text-xl mb-6 text-foreground">
                Todo dia, sua clínica perde pacientes em <span className="font-bold text-primary">7 situações que SE REPETEM:</span>
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <ul className="space-y-3 mb-8">
                {problems.map((problem, index) => (
                  <li key={index} className="flex items-center gap-3 text-lg text-foreground">
                    <X className="w-5 h-5 text-destructive flex-shrink-0" />
                    <span>{problem}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>

          {/* WhatsApp Mockups */}
          <ScrollReveal delay={0.25}>
            <div className="flex flex-wrap justify-center gap-4">
              {whatsappConversations.map((conversation, index) => (
                <WhatsAppMockup
                  key={index}
                  messages={conversation.messages}
                  contactName={conversation.contactName}
                />
              ))}
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.3}>
          <div className="border-l-4 border-destructive pl-6 py-4 bg-destructive/5 rounded-r-xl mt-12 max-w-3xl">
            <p className="text-lg mb-2 text-foreground">E sua secretária improvisa.</p>
            <p className="text-lg mb-2 text-foreground">Cada vez de um jeito.</p>
            <p className="text-lg mb-4 text-foreground">Cada dia um desastre diferente.</p>
            <p className="text-xl md:text-2xl font-bold text-destructive">
              Enquanto isso, R$ 2.000, R$ 5.000, R$ 8.000 vão embora TODOS OS MESES.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ProblemSection;
