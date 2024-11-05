import { useState } from 'react';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems = [
    { question: 'What does TAYARi do?', answer: "We bridge the gap between potential and opportunity for Africa's youth. Our mission is to dismantle the societal, economic, and institutional barriers that hold you back." },
    { question: 'How do I Benefit?', answer: 'You can benefit by either contacting us via our form or registering for our internships.' },
    { question: 'Is TAYARi Transition free?', answer: 'Yes, TAYARi Transition is completely free for farmers to use.' },
  ];

  return (
    <div className="faq pri1 py-16 px-5">
      {/* FAQ Heading */}
      <div className="border-l-4 obl py-2 pl-2 mb-8">
        <h2 className="text-3xl font-semibold text-white opacity-90">Frequently Asked Questions</h2>
      </div>

      {/* Accordion Section */}
      <div className="space-y-4">
        {faqItems.map((item, index) => (
          <div key={index} className="bg-gray-800 rounded-md shadow-md">
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full text-left p-4 bg-gray-900 rounded-md focus:outline-none"
            >
              <h3 className="text-lg font-medium text-white">
                {item.question}
                <span className="float-right">{activeIndex === index ? '-' : '+'}</span>
              </h3>
            </button>
            {activeIndex === index && (
              <div className="p-4 bg-gray-700 text-white">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
