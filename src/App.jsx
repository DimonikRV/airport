import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import SearchFilter from './components/searchFilter/SearchFilter';
import { getByType } from './utils/utils';

const departure = 'DEPARTURE';
const arrival = 'ARRIVAL';

const App = () => {
  const { flights } = useSelector(state => state.flights);

  const departureData = getByType(departure, flights);
  const arrivalData = getByType(arrival, flights);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="departures" element={<SearchFilter flightsData={departureData} />} />
          <Route path="arrivals" element={<SearchFilter flightsData={arrivalData} />} />
        </Route>
        <Route index element={<Navigate to="/departures" replace />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
