import React from 'react';
import PropTypes from 'prop-types';
import FlightsItem from '../flightsItem/FlightsItem';
import './flightslist.scss';

const FlightsList = ({ flightsData }) => {
  if (!flightsData) {
    return null;
  }
  if (!flightsData.length) {
    return <div className="search-list_empty">No Flights</div>;
  }
  return (
    <ul className="flights-table__list">
      {flightsData.map(flight => (
        <FlightsItem key={flight.id} {...flight} />
      ))}
    </ul>
  );
};

FlightsList.propTypes = {
  flightsData: PropTypes.arrayOf(PropTypes.shape()),
};

export default FlightsList;
