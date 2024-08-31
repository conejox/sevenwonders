import React, { useState } from 'react';

const StoneCheckboxes = ({ onStoneChange }) => {
  const [checkedStates, setCheckedStates] = useState([false, false, false, false]);

  const handleCheckboxChange = (index) => {
    const newCheckedStates = [...checkedStates];
    newCheckedStates[index] = !newCheckedStates[index];
    setCheckedStates(newCheckedStates);

    const checkedCount = newCheckedStates.filter(state => state).length;
    onStoneChange(checkedCount);
  };

  return (
    <div>
      {checkedStates.map((checked, index) => (
        <label key={index}>
          <input
            type="checkbox"
            checked={checked}
            onChange={() => handleCheckboxChange(index)}
          />
          Stone {index + 1}
        </label>
      ))}
    </div>
  );
};

export default StoneCheckboxes;
