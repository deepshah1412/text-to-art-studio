import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What is this tool used for?",
    answer: "It lets you create AI-generated images using various styles and prompts.",
  },
  {
    question: "How long does image generation take?",
    answer: "Typically 5–10 seconds, depending on the prompt and style.",
  },
  {
    question: "Can I use the generated images commercially?",
    answer: "Yes, but please review our usage rights outlined in the terms.",
  },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="my-12 max-w-4xl mx-auto px-4">
      <h2 className="text-2xl font-semibold mb-6 text-center">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-lg p-4 transition-all duration-300">
            <button
              className="flex justify-between items-center w-full text-left font-medium"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              {faq.question}
              <ChevronDown
                className={`w-5 h-5 transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? "max-h-24 mt-2" : "max-h-0"
              }`}
            >
              <p className="text-gray-600">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
