import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './searchcalendar.scss';

const yesterday = moment().subtract(1, 'day');
const today = moment();
const tomorrow = moment().add(1, 'day');

const SearchCalendar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [startDate, setStartDate] = useState(null);

  const handleGetCalendarDate = date => {
    setStartDate(date);
    date = moment(date).format('DD-MM-YYYY');
    setSearchParams({
      date,
    });
  };
  const handleSelectDate = event => {
    const selectedDate = event.currentTarget;

    if (selectedDate.classList.contains('dates__item_today')) {
      setSearchParams({ date: today.format('DD-MM-YYYY') });
    } else if (selectedDate.classList.contains('dates__item_yesterday')) {
      setSearchParams({ date: yesterday.format('DD-MM-YYYY') });
    } else {
      setSearchParams({ date: tomorrow.format('DD-MM-YYYY') });
    }
  };
  return (
    <div className="search-results__content navdate-content">
      <div className="navdate-content__calendar calendar">
        <label className="calendar__datepicker calendar-datepicker">
          <DatePicker
            selected={startDate}
            onChange={date => handleGetCalendarDate(date)}
            className="calendar-datepicker__input"
            dateFormat="dd/MM"
            showYearDropdown
          />
        </label>
      </div>
      <div className="navdate-content__container dates">
        <button className="dates__item dates__item_yesterday" onClick={handleSelectDate}>
          <div className="dates-num">{yesterday.format('DD/MM')}</div>
          <div className="dates-title">Yesterday</div>
        </button>
        <button className="dates__item dates__item_today" onClick={handleSelectDate}>
          <div className="dates-num">{today.format('DD/MM')}</div>
          <div className="dates-title">Today</div>
        </button>
        <button className="dates__item dates__item_tomorrow" onClick={handleSelectDate}>
          <div className="dates-num">{tomorrow.format('DD/MM')}</div>
          <div className="dates-title">Tomorrow</div>
        </button>
      </div>
    </div>
  );
};
export default SearchCalendar;
