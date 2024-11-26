import React from 'react'

const SectionHeader = ({ title, description }) => {
    return (
      <div className="section-header text-center mb-8">
        <h2 className="text-4xl font-bold mb-2">{title}</h2>
        <p className="text-xl">{description}</p>
      </div>
    );
  };
  

export default SectionHeader