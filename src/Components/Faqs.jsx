import React, { useEffect } from "react";
import FaqCard from "./FaqCard";
import Aos from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const Faqs = () => {
  useEffect(() => {
    // Initialize AOS
    Aos.init({ duration: 1000, once: true });
  }, []);

  const faqData = [
    {
      question: "Do I need to register if I am not earning any income?",
      answer: "Registration is not mandatory for individuals who are not earning income. However, if your situation changes in the future, it's advisable to complete your registration to ensure you are compliant with tax regulations when you start earning.",
    },
    {
      question: "How long does the registration process take?",
      answer: "The registration process usually takes between 1 to 3 business days, depending on the complexity of your details. In most cases, it’s a quick process if all necessary information is provided correctly.",
    },
    {
      question: "Can I update my details after registration?",
      answer: "Yes, you can update your details after registration. Most platforms allow you to modify your information through your account settings or by contacting customer support for assistance.",
    },
    {
      question: "What documents are required for registration?",
      answer: "Typically, you will need proof of identity (e.g., Aadhar card, Passport), proof of address (e.g., utility bill, bank statement), and any relevant financial documents if you are earning income.",
    },
    {
      question: "What happens if I miss the registration deadline?",
      answer: "Missing the registration deadline may result in penalties or fines. It is best to complete your registration as soon as possible to avoid any legal or financial consequences.",
    },
  ];

  return (
    <div className="flex justify-center py-10 bg-gray-200">
      <div>
        <h1 className="text-3xl text-center font-bold mb-10">Curious Minds Ask!</h1>
        {faqData.map((faq, index) => (
          <FaqCard
            key={index}
            question={faq.question}
            answer={faq.answer}
            aosDelay={index * 200} // Adds delay to each card for sequential animation
          />
        ))}
      </div>
    </div>
  );
};

export default Faqs;
