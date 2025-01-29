"use client";
import { Card, CardHeader, CardBody, CardFooter, Button } from "@nextui-org/react";

function PricingCards() {
  const plans = [
    {
      title: "Free",
      price: "R$0/mês",
      features: ["1 Usuário", "Suporte Básico", "Recursos Limitados"],
      button: "Começar",
    },
    {
      title: "Standard",
      price: "R$49/mês",
      features: ["5 Usuários", "Suporte Prioritário", "Recursos Avançados"],
      button: "Assinar",
    },
    {
      title: "Full",
      price: "R$99/mês",
      features: ["Usuários Ilimitados", "Suporte 24/7", "Todos os Recursos"],
      button: "Contratar",
    },
  ];

  return (
    <div className="flex flex-col items-center p-6">
      <h2 className="text-3xl font-bold mb-6">Preços</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {plans.map((plan, index) => (
          <Card key={index} className="w-80 p-6 text-center shadow-lg border border-gray-200">
            <CardHeader className="text-xl font-bold">{plan.title}</CardHeader>
            <CardBody>
              <p className="text-2xl font-semibold text-primary">{plan.price}</p>
              <ul className="mt-4 space-y-2 text-gray-600">
                {plan.features.map((feature, i) => (
                  <li key={i} className="text-sm">✔ {feature}</li>
                ))}
              </ul>
            </CardBody>
            <CardFooter>
              <Button color="primary" className="w-full">
                {plan.button}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default PricingCards;
