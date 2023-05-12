import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import qs from 'qs';
import PropTypes from 'prop-types';
import {
  getSelectedCity,
  getCitiesByType,
  filter,
  filterByDate,
  filterByCode,
  filterByDateCode,
  filterByDateCity,
  sortByDate,
} from '../../utils/utils';
import FlightsList from '../flightsList/FlightsList';

const SearchFilter = ({ flightsData }) => {
  const { search, pathname } = useLocation();

  const filterParams = qs.parse(search, { ignoreQueryPrefix: true });

  const cities = useMemo(() => getCitiesByType(flightsData), [flightsData]);

  const currentCity = useMemo(() => getSelectedCity(cities, filterParams), [cities, filterParams]);

  let filterData;

  if (currentCity) {
    filterData = filterByDateCity(filterParams, currentCity, flightsData);
  } else {
    filterData = filter(flightsData, filterParams, filterByDate, filterByCode, filterByDateCode);
  }

  const filterSortData = useMemo(() => sortByDate(filterData, pathname), [filterData, pathname]);

  return (
    <>
      <FlightsList flightsData={filterSortData} />
    </>
  );
};

SearchFilter.propTypes = {
  flightsData: PropTypes.arrayOf(PropTypes.shape()),
};

export default SearchFilter;
