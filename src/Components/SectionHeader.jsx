import React from 'react'

const SectionHeader = ({ title, description }) => {
    return (
      <div className="section-header text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">{title}</h2>
        <p className="text-lg">{description}</p>
      </div>
    );
  };
  

export default SectionHeader