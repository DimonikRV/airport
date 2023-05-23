import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import './scheduletable.scss';

const ScheduleTable = () => {
  const { error } = useSelector(state => state.flights);

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

      {error ? <h2 className="flights-table_error">{error}</h2> : <Outlet />}
    </div>
  );
};
export default ScheduleTable;
