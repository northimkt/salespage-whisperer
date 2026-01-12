import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">
          Perguntas Rápidas
        </h2>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-secondary border border-border rounded-lg px-6"
            >
              <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
