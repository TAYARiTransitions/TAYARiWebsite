import { useState } from 'react';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems = [
    { question: 'Who can join TAYARi Transitions programs?', answer: "Our programs are open to young African professionals, recent graduates, and individuals at various career stages—from those seeking their first job to mid-career professionals and individuals considering retirement. If you’re looking to grow, pivot, or retire with purpose, TAYARi has a program for you." },


    { question: 'How do I know which program is right for me?', answer: 'Each program is designed for specific career transitions: Becoming Employable is ideal for recent graduates or early-career professionals., Advancing Careers & Building Enterprises suits those aiming to grow within their field or start a business, Purposeful Retirement is tailored to those nearing retirement and seeking meaningful ways to use their expertise. If you’re unsure, contact us, and we can guide you toward the best fit.' },


    { question: 'What types of training are included in the programs?', answer: 'Our training sessions cover a blend of technical and soft skills, specific to each transition. This includes job search strategies, interview skills, leadership training, entrepreneurial development, legacy planning, and more. Each program also emphasizes personal growth and strategic career planning.' },


    { question: 'Are there opportunities for mentorship?', answer: 'Yes, each program includes access to experienced mentors and coaches who provide personalized guidance and insights relevant to your career goals.' },


    { question: 'Do your programs offer networking opportunities?', answer: 'Absolutely. TAYARi offers numerous networking opportunities, including events, meetups, and direct connections with industry professionals and peers. We believe in building strong professional networks to support your transition journey.' },


    { question: 'Can participants receive funding or internships?', answer: 'Yes. Depending on your progress in the program and your project’s impact potential, participants may access: Internships to gain real-world experience, Funding Opportunities for vetted, innovative ideas, Investment Introductions for eligible projects.' },

    { question: 'How long are the programs?', answer: 'Our programs may include a nominal fee to cover resources, training, and coaching. However, we strive to make our programs accessible and can offer financial assistance to qualifying participants.' },

    { question: 'What if I need to pause or leave a program?', answer: 'Life happens! If you need to pause or step away, contact your program coordinator. We’re flexible and aim to support participants in achieving their goals, even if the journey takes unexpected turns.' },

    { question: 'How do I apply?', answer: 'You can apply directly through our website by filling out the application form for the program that interests you. After submitting, our team will review your application and contact you with the next steps.' },

    { question: 'Will I receive a certificate upon completing the program?', answer: 'Yes, participants who complete a program will receive a certificate, which can enhance your resume and demonstrate your commitment to personal and professional growth.' },

    { question: 'Can I enroll in more than one program?', answer: 'Each program is tailored to specific career stages, so we recommend selecting the one that best fits your current needs. However, if you progress through one transition and wish to join another program later, you’re welcome to reapply.' },
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
