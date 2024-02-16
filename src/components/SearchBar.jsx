import React, { useEffect, useState } from 'react';
import { SearchIcon } from '../assets/images';
import { useDispatch } from 'react-redux';
import { SET_SEARCH_TERM } from '../store';
import { useLocation, useNavigate } from 'react-router-dom';
import URLs from '../URLs';

function SearchBar() {
  const [term, setTerm] = useState('');
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!term) dispatch({ type: SET_SEARCH_TERM, payload: '' });
  }, [term]);

  return (
    <form
      className='search-bar'
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({ type: SET_SEARCH_TERM, payload: term });
        if (location.pathname !== URLs.products) navigate(URLs.products);
      }}
    >
      <img src={SearchIcon} alt='search icon' />
      <input
        type='text'
        placeholder='What are you looking for...'
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <button>
        <span>Search</span>
      </button>
    </form>
  );
}

export default SearchBar;
