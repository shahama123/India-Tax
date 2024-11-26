import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

const FaqCard = ({ question, answer, aosDelay }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFaq = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="border rounded-2xl w-[40rem] mt-5 px-5 py-2 bg-white"
      data-aos="fade-up" // Animation on scroll
      data-aos-delay={aosDelay} // Delay based on the index for sequential animation
    >
      <div className="flex justify-between">
        <h2 className="mb-2" onClick={toggleFaq}>{question}</h2>
        <RiArrowDropDownLine onClick={toggleFaq} />
      </div>

      {isOpen && <p>{answer}</p>}
    </div>
  );
};

export default FaqCard;
