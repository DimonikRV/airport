import React from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { getByType } from '../../utils/utils';
import SearchFilter from '../searchFilter/SearchFilter';
import './scheduletable.scss';

const departure = 'DEPARTURE';
const arrival = 'ARRIVAL';

const ScheduleTable = () => {
  const { flights, error } = useSelector(state => state.flights);

  const departureData = getByType(departure, flights);
  const arrivalData = getByType(arrival, flights);

  return (
    <div className="navdate-content__table flights-table">
      <div className="flights-table__header">
        <ul className="flights-table-nav">
          <li className="flights-table-nav__item">Terminal</li>
          <li className="flights-table-nav__item">Schedule</li>
          <li className="flights-table-nav__item">Direction</li>
          <li className="flights-table-nav__item">Status</li>
          <li className="flights-table-nav__item airline">Airline</li>
          <li className="flights-table-nav__item flight">Flight</li>
        </ul>
      </div>

      {error ? (
        <h2 className="flights-table_error">{error}</h2>
      ) : (
        <Routes>
          <Route path="arrivals" element={<SearchFilter flightsData={arrivalData} />} />
          <Route path="departures" element={<SearchFilter flightsData={departureData} />} />
        </Routes>
      )}
    </div>
  );
};
export default ScheduleTable;
