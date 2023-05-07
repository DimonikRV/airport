import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import './flightsitem.scss';

const FlightsItem = ({ ...flight }) => {
  const {
    terminal,
    departureDateExpected,
    arrivalCity,
    status,
    departureDate,
    airlineLogo,
    airlineName,
    arrivalDate,
    arrivalDateExpected,
    departureCity,
    codeShare,
    type,
  } = flight;

  let flightStatus;
  let flightStatusDate;
  let city;
  let time;

  switch (type) {
    case 'ARRIVAL':
      flightStatusDate = moment(arrivalDate).format('HH:MM');
      flightStatus = status === 'AR' ? 'Arrived' : 'Planed';
      city = arrivalCity;
      time = moment(arrivalDateExpected).format('HH:MM');
      break;
    case 'DEPARTURE':
      flightStatusDate = moment(departureDate).format('HH:MM');
      flightStatus = status === 'DP' ? 'Departed' : 'Planed';
      city = departureCity;
      time = moment(departureDateExpected).format('HH:MM');
      break;
    default:
      flightStatusDate = departureDate;
      flightStatus = status === 'DP' ? 'Departed' : 'Planed';
  }

  return (
    <>
      <li className="flights-table__item">
        <div className="terminal-field item-slot">{terminal}</div>
        <div className="time-field item-slot">{time}</div>
        <div className="way-field item-slot">{city}</div>
        <div className="status-field item-slot">{`${flightStatus} at ${flightStatusDate}`}</div>
        <div className="company-name item-slot">
          <div className="logo">
            <img src={airlineLogo} alt="LOT" />
          </div>
          <p>{airlineName}</p>
        </div>
        <div className="flight-field item-slot">{codeShare}</div>
        <div className="details-field item-slot">
          <a href="/departures/2000043798526?dt=11-01-2022">flight details</a>
        </div>
      </li>
    </>
  );
};

FlightsItem.propTypes = {
  flight: PropTypes.object,
};

FlightsItem.defaultProps = {
  flight: null,
};

export default FlightsItem;
