"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Como puedo empezar a usar la plantilla?",
    answer:
      "Solo necesitas clonar el repositorio, instalar las dependencias con npm install y correr npm run dev. Es asi de simple.",
  },
  {
    question: "Necesito saber programar?",
    answer:
      "No necesitas experiencia previa. La plantilla esta disenada para que puedas personalizar textos, colores e imagenes facilmente.",
  },
  {
    question: "Puedo usar mi propio dominio?",
    answer:
      "Si, al hacer deploy puedes conectar cualquier dominio personalizado que tengas.",
  },
  {
    question: "Que metodos de pago aceptan?",
    answer:
      "Aceptamos tarjetas de credito y debito a traves de nuestra plataforma de pagos segura.",
  },
  {
    question: "Ofrecen soporte tecnico?",
    answer:
      "Si, todos los planes incluyen soporte por email. Los planes Pro y Enterprise incluyen soporte prioritario.",
  },
];

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full py-5 flex items-center justify-between text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-base font-medium text-gray-900">{question}</span>
        <svg
          className={`w-5 h-5 text-gray-500 shrink-0 ml-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <p className="pb-5 text-gray-600 leading-relaxed">{answer}</p>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-20 px-6 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Preguntas frecuentes
          </h2>
          <p className="text-lg text-gray-600">
            Resolvemos tus dudas mas comunes.
          </p>
        </div>
        <div>
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
