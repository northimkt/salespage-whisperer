const SolutionSection = () => {
  return (
    <section className="px-4 py-16 md:py-24">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">
          A Solução Mais Simples Que Existe
        </h2>
        <p className="text-xl text-accent mb-12">(E Você Usa Hoje Mesmo)</p>

        <div className="bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 rounded-2xl p-8 md:p-12">
          <h3 className="text-3xl md:text-5xl font-bold text-primary mb-6">
            21 Scripts Prontos para Copiar e Colar
          </h3>
          <p className="text-xl text-muted-foreground mb-8">
            Para as 7 situações que fazem você perder paciente
          </p>
          
          <div className="space-y-4 text-lg text-left max-w-md mx-auto">
            <p>Cada situação tem <span className="font-bold text-accent">3 opções de resposta.</span></p>
            <p>Sua secretária escolhe. Copia. Cola.</p>
            <p className="text-primary font-semibold">Acabou a improviso.</p>
            <p className="text-primary font-semibold">Acabou o "deixa eu pensar no que responder".</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
