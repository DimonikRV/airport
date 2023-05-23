import React, { useMemo } from 'react';
import { useCurrentRootParams } from '../../hook/useCurrentRootParams';
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
  const { search, pathname } = useCurrentRootParams();

  const cities = useMemo(() => getCitiesByType(flightsData), [flightsData]);

  const currentCity = useMemo(() => getSelectedCity(cities, search), [cities, search]);

  let filterData;

  if (currentCity) {
    filterData = filterByDateCity(search, currentCity, flightsData);
  } else {
    filterData = filter(flightsData, search, filterByDate, filterByCode, filterByDateCode);
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
