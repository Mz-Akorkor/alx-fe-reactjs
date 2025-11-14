import React from 'react';
import { useRecipeStore } from './recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{
        padding: '10px',
        margin: '15px 0',
        width: '100%',
        borderRadius: '5px',
        border: '1px solid #ccc'
      }}
    />
  );
};

export default SearchBar;