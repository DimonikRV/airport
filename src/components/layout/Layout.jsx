import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFlights } from '../../slices/search.flights.slice';
import { useLocation, useParams, useSearchParams } from 'react-router-dom';
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
  const whichRoute = useParams();

  const [currentRoute] = Object.values(whichRoute);

  const newParams = qs.parse(params.search, { ignoreQueryPrefix: true });

  const dispatch = useDispatch();

  const setSearchParams = useSearchParams()[1];

  const currentDate = { date: moment().format('DD-MM-YYYY') };

  useEffect(() => {
    dispatch(fetchFlights());
  }, [dispatch]);

  useEffect(() => {
    setSearchParams(currentDate);
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
              <SearchNavigation currentRoute={currentRoute} />
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
