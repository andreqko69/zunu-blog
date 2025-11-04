import React from 'react';
import FilterButtons from './FilterButtons';

function TodoFilter({ currentFilter, onFilterChange }) {
  return (
    <FilterButtons currentFilter={currentFilter} onFilterChange={onFilterChange} />
  );
}

export default TodoFilter;
