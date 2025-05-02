import React, { useState } from 'react';
import './SizeFilter.css';

const SizeFilter = ({ onFilterChange }) => {
  const sizes = ['XS', 'S', 'M', 'L', 'XL'];
  const [selectedSizes, setSelectedSizes] = useState([]);

  const handleSizeToggle = (size) => {
    const newSizes = selectedSizes.includes(size)
      ? selectedSizes.filter(s => s !== size)
      : [...selectedSizes, size];
    
    setSelectedSizes(newSizes);
    onFilterChange(newSizes);
  };

  return (
    <div className="size-filter">
      <h3>Filter by size:</h3>
      <div className="size-filter__options">
        {sizes.map(size => (
          <label key={size} className="size-filter__label">
            <input
              type="checkbox"
              checked={selectedSizes.includes(size)}
              onChange={() => handleSizeToggle(size)}
              className="size-filter__checkbox"
            />
            <span className="size-filter__size">{size}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default SizeFilter;