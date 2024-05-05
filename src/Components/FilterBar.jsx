import React, { useState } from 'react';

const FilterBar = ({ classes, filterBy }) => {
  const [selectedClasses, setSelectedClasses] = useState([]);

  const handleCheckboxChange = (classType) => {
    // Toggle the selected class
    const updatedClasses = selectedClasses.includes(classType)
      ? selectedClasses.filter((c) => c !== classType)
      : [...selectedClasses, classType];
    setSelectedClasses(updatedClasses);
    filterBy(updatedClasses); // Call filterBy function with the selected classes
  };

  return (
    <div className="filter-bar">
      <h3>Filter By Class:</h3>
      {classes.map((classType) => (
        <label key={classType}>
          <input
            type="checkbox"
            value={classType}
            checked={selectedClasses.includes(classType)}
            onChange={() => handleCheckboxChange(classType)}
          />
          {classType}
        </label>
      ))}
    </div>
  );
};

export default FilterBar;
