"use client";
import { Card, CardHeader, CardBody } from "@nextui-org/react";

function WhyTalentFlow() {
  const features = [
    { title: "IA Avançada", description: "Tecnologia de ponta para encontrar os melhores talentos." },
    { title: "Análise Gratuita", description: "Avaliação sem custos para entender suas necessidades." },
    { title: "Banco de Talentos", description: "Acesso a uma base de talentos em todo o Brasil." },
    { title: "Match Perfeito", description: "Conectamos você ao candidato ideal." },
  ];

  return (
    <div className="p-6 text-center">
      <h2 className="text-2xl font-bold mb-6 text-black">
        Por que a TalentFlow é a escolha certa para você?
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="w-64 p-6 text-center shadow-lg border border-gray-200">
            <CardHeader className="text-xl font-bold bg-gradient-to-r from-blue-700 to-violet-700 text-transparent bg-clip-text">
              {feature.title}
            </CardHeader>
            <CardBody>
              <p className="text-gray-600">{feature.description}</p>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default WhyTalentFlow;