import React, { useState } from 'react';

const AccordionTab = ({ label, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-tab">
      <button className="accordion-button" onClick={toggleOpen}>
        {label}
      </button>
      {isOpen && <div className="accordion-content">{children}</div>}
    </div>
  );
};

export default AccordionTab;