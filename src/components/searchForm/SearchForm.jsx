/* eslint-disable */
import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useCurrentRootParams } from '../../hook/useCurrentRootParams';
import './searchform.scss';

const SearchForm = () => {
  const [searchText, setSearchText] = useState('');

  const { search } = useCurrentRootParams();

  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = event => {
    const text = event.target.value.trim();
    setSearchText(prevText => text);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (!searchText) {
      return;
    }

    setSearchParams({
      ...search,
      search: searchText,
    });

    setSearchText(prevText => '');
  };

  return (
    <div className="search-flights">
      <h1 className="search-flights__title">Flights search</h1>
      <div className="search-flights__form">
        <form className="form_search">
          <button className="form_search__mobile-button" onClick={handleSubmit}>
            <svg
              className="search-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-512.053 29 44 43"
            >
              <g id="ic_search_white" transform="translate(-512.053 29)">
                <rect id="rectangle" className="cls-1"></rect>
                <path
                  id="ic_search_white-2"
                  d="M317.717,70.708H316.25l-.55-.538a11.072,11.072,0,0,0,2.933-7.525,11.92,11.92,0,1,0-11.917,11.646,11.628,11.628,0,0,0,7.7-2.867l.55.538V73.4l9.167,8.958,2.75-2.687Zm-11,0a8.065,8.065,0,1,1,8.25-8.063A8.124,8.124,0,0,1,306.717,70.708Z"
                  transform="translate(-289.3 -45.625)"
                ></path>
              </g>
            </svg>
          </button>
          <label>
            <input
              className="form_search__input"
              name="search"
              type="text"
              placeholder="Flights number or city"
              value={searchText || ''}
              onChange={handleChange}
            />
          </label>
          <button className="form_search__button" type="button" onClick={handleSubmit}>
            Find
          </button>
        </form>
      </div>
    </div>
  );
};
export default SearchForm;
