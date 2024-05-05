import React from 'react';

const FilterCheckbox = ({ classType, isChecked, handleCheckboxChange }) => {
  return (
    <label>
      <input
        type="checkbox"
        value={classType}
        checked={isChecked}
        onChange={() => handleCheckboxChange(classType)}
      />
      {classType}
    </label>
  );
};

export default FilterCheckbox;
