import React from 'react';

const SortBar = ({ sortBy, option }) => {
  const handleSort = (criteria) => {
    sortBy(criteria); // Call sortBy function with the selected criteria
  };

  return (
    <select value={option} onChange={sortBy}className="form-select">
      <option >Sort by</option>
      <option value="health">health</option>
      <option value="damage">damage</option>
      <option value="armor">armor</option>
    </select>

  )
};

export default SortBar;
