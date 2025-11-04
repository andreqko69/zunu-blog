import React from 'react';

function FilterButtons({ currentFilter, onFilterChange }) {
  const filters = [
    { id: 'all', label: 'Всі' },
    { id: 'active', label: 'Активні' },
    { id: 'completed', label: 'Виконані' },
  ];

  return (
    <div className="filter-buttons">
      {filters.map(filter => (
        <button
          key={filter.id}
          className={`filter-btn ${currentFilter === filter.id ? 'active' : ''}`}
          onClick={() => onFilterChange(filter.id)}
          data-filter={filter.id}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}

export default FilterButtons;
