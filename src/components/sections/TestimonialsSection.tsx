import { Quote } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Em uma semana, recuperamos 3 pacientes que tinham sumido após orçamento. Só isso já pagou o material 10 vezes.",
      name: "Dra. Camila Ribeiro",
      clinic: "Clínica de Dermatologia",
      city: "São Paulo, SP",
      result: "+R$ 4.200 recuperados",
    },
    {
      quote: "Minha secretária não sabia o que responder quando falavam 'tá caro'. Agora ela só copia o script. Simples assim.",
      name: "Dr. Marcos Andrade",
      clinic: "Clínica Odontológica",
      city: "Belo Horizonte, MG",
      result: "Zero improviso",
    },
    {
      quote: "Reduzi as faltas de consulta em 40% só com os scripts de confirmação. Antes a gente mandava mensagem genérica.",
      name: "Dra. Fernanda Costa",
      clinic: "Clínica de Estética",
      city: "Curitiba, PR",
      result: "-40% faltas",
    },
    {
      quote: "Contratei secretária nova na segunda. Na quarta ela já estava usando os scripts como se trabalhasse aqui há meses.",
      name: "Dr. Ricardo Lima",
      clinic: "Ortopedia",
      city: "Porto Alegre, RS",
      result: "Treinamento em 1 dia",
    },
    {
      quote: "O script de 'vou ver com meu marido' funciona demais. Antes eu perdia 80% desses. Agora recupero mais da metade.",
      name: "Dra. Juliana Mendes",
      clinic: "Clínica de Nutrição",
      city: "Rio de Janeiro, RJ",
      result: "+50% conversão",
    },
    {
      quote: "R$ 57 por scripts que me fizeram parar de perder R$ 5.000 por mês. Faz a conta.",
      name: "Dr. Paulo Henrique",
      clinic: "Clínica Médica",
      city: "Brasília, DF",
      result: "ROI absurdo",
    },
  ];

  return (
    <section className="px-4 py-16 md:py-24 bg-card">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-4">
            O Que Dizem as Clínicas Que Já Usam
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-12">
            Resultados reais de quem parou de improvisar
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={index} delay={0.1 + index * 0.08}>
              <div className="bg-secondary border border-border rounded-xl p-6 flex flex-col hover:border-primary/30 transition-colors h-full">
                <Quote className="w-8 h-8 text-primary/40 mb-4" />
                
                <p className="text-foreground mb-6 flex-grow leading-relaxed">
                  "{testimonial.quote}"
                </p>
                
                <div className="border-t border-border pt-4">
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.clinic}</p>
                  <p className="text-sm text-muted-foreground mb-3">{testimonial.city}</p>
                  <span className="inline-block bg-primary/20 text-primary text-sm font-semibold px-3 py-1 rounded-full">
                    {testimonial.result}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.6}>
          <p className="text-center text-muted-foreground mt-12 text-sm">
            *Resultados baseados em feedback de clínicas reais após implementação dos scripts
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default TestimonialsSection;
