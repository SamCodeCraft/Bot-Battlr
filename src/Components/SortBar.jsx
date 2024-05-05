import React from 'react';

const SortBar = ({ sortBy }) => {
  const handleSort = (criteria) => {
    sortBy(criteria); // Call sortBy function with the selected criteria
  };

  return (
    <div className="sort-bar">
      <h3>Sort By:</h3>
      <button onClick={() => handleSort('health')}>Health</button>
      <button onClick={() => handleSort('damage')}>Damage</button>
      <button onClick={() => handleSort('armor')}>Armor</button>
    </div>
  );
};

export default SortBar;
