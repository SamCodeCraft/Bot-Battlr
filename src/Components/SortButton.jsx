import React from 'react';

const SortButton = ({ criteria, handleSort }) => {
  return (
    <button onClick={() => handleSort(criteria)}>
      Sort by {criteria.charAt(0).toUpperCase() + criteria.slice(1)}
    </button>
  );
};

export default SortButton;
