import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ScrollReveal from "@/components/ScrollReveal";

const FAQSection = () => {
  const faqs = [
    {
      question: "Funciona para qualquer clínica?",
      answer: "Sim. Testado em dermatologia, odontologia, estética, ortopedia e mais.",
    },
    {
      question: "Minha secretária não sabe vender. Funciona?",
      answer: "Funciona porque ela não precisa saber. Só copiar.",
    },
    {
      question: "Precisa de programa especial?",
      answer: "Não. Só WhatsApp + ChatGPT grátis + Trello grátis.",
    },
    {
      question: "Quanto tempo para implementar?",
      answer: "Menos de 1 hora. Sério.",
    },
    {
      question: "E se não funcionar?",
      answer: "7 dias para pedir reembolso total.",
    },
  ];

  return (
    <section className="px-4 py-16 md:py-24 bg-card">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Perguntas Rápidas
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background border border-border rounded-xl px-6"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline text-foreground">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FAQSection;
