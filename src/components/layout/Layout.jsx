/* eslint-disable */
import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFlights } from '../../slices/search.flights.slice';
import { useLocation, useSearchParams } from 'react-router-dom';
import qs from 'qs';
import moment from 'moment';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import SearchForm from '../searchForm/SearchForm';
import SearchNavigation from '../searchNavigation/SearchNavigation';
import SearchCalendar from '../searchCalendar/SearchCalendar';
import ScheduleTable from '../scheduleTable/ScheduleTable';
import Advertisment from '../advertisment/Advertisment';
import './layout.scss';

const Layout = () => {
  const params = useLocation();

  const { pathname, search } = params;
  console.log(search);

  const newParams = qs.parse(search, { ignoreQueryPrefix: true });
  console.log(newParams);

  const dispatch = useDispatch();
  const [searcParams, setSearchParams] = useSearchParams();

  const currentDay = useMemo(
    () => (newParams?.date ? newParams : { date: moment().format('DD-MM-YYYY') }),
    [newParams],
  );

  useEffect(() => {
    dispatch(fetchFlights());
  }, [dispatch]);

  useEffect(() => {
    setSearchParams(currentDay);
  }, []);

  const status = useSelector(state => state.flights.status);

  if (status === 'loading') {
    return (
      <div className="loading-page">
        Loading...
        <div className="loading-page_spinner"></div>
      </div>
    );
  }

  return (
    <>
      <header className="header">
        <Header />
      </header>
      <main className="search-main">
        <div className="search-results container">
          <div className="search-results__nav nav-tabs">
            <div className="search-container">
              <SearchForm newParams={newParams} setSearchParams={setSearchParams} />
              <SearchNavigation currentRoute={pathname} searcParams={searcParams} />
              <SearchCalendar />
              <ScheduleTable />
              <Advertisment />
            </div>
          </div>
        </div>
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </>
  );
};
export default Layout;
