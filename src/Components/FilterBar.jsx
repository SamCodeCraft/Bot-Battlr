
import React, { useState } from 'react';

const FilterBar = ({ classes, filterBy }) => {
  const [selectedClasses, setSelectedClasses] = useState([]);

  const handleCheckboxChange = (classType) => {
    let updatedClasses;
    if (selectedClasses.includes(classType)) {
      updatedClasses = selectedClasses.filter(c => c !== classType);
    } else {
      updatedClasses = [...selectedClasses, classType];
    }

    setSelectedClasses(updatedClasses);
    filterBy(updatedClasses); // Update filter based on selection
  };

  return (
    <div className="filter-bar">
      <h3>Filter By Class:</h3>
      {classes.map((classType) => (
        <label key={classType}>
          <input
            type="select menu"
            value={classType}
            selected={selectedClasses.includes(classType)}
            onChange={() => handleCheckboxChange(classType)}
          />
          {classType}
        </label>
      ))}
    </div>
  );
};

export default FilterBar;
