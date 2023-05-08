import moment from 'moment';

export const getCitiesByType = flightsData =>
  flightsData.map(flight =>
    flight.type === 'DEPARTURE' ? flight.departureCity : flight.arrivalCity,
  );

export const getSelectedCity = (cities, filterParams) => {
  if (!filterParams.search) {
    return;
  }
  return cities.find(city => city.toLowerCase() === filterParams.search.toLowerCase());
};

export const getByType = (type, flightsData) =>
  flightsData.filter(flights => flights.type === type);

export const filterByDate = (date, flightsData) => {
  return flightsData.filter(flight =>
    moment(flight.departureDateExpected).isSame(moment(date, 'DD-MM-YYYY'), 'day'),
  );
};

export const filterByCode = (searchText, flightsData) => {
  if (!searchText) {
    return;
  }
  return flightsData.filter(flight =>
    flight.codeShare ? flight.codeShare.toLowerCase().includes(searchText.toLowerCase()) : null,
  );
};

export const filterByCity = (currentCity, flightsData) => {
  return flightsData.filter(flight =>
    flight.type === 'DEPARTURE'
      ? flight.departureCity === currentCity
      : flight.arrivalCity === currentCity,
  );
};

export const filterByDateCode = (date, searchText, flightsData) => {
  const filteredFlights = filterByDate(date, flightsData);
  return filterByCode(searchText, filteredFlights);
};
export const filterByDateCity = (filterParams, currentCity, flightsData) => {
  const filteredFlights = filterByDate(filterParams.date, flightsData);
  return filterByCity(currentCity, filteredFlights);
};

export const filter = (flightsData, filterParams, filterByDate, filterByCode, filterByDateCode) => {
  if (filterParams.search && filterParams.date) {
    return filterByDateCode(filterParams.date, filterParams.search, flightsData);
  }

  if (filterParams.date) {
    return filterByDate(filterParams.date, flightsData);
  }

  return filterByCode(filterParams.search, flightsData);
};
export const sortByDate = (filterData, pathname) => {
  if (!filterData) {
    return;
  }
  let sort;
  if (pathname === '/departures') {
    sort = filterData.sort((a, b) => a.departureDateExpected - b.departureDateExpected);
  } else {
    sort = filterData.sort((a, b) => a.arrivalDateExpected - b.arrivalDateExpected);
  }
  return sort;
};
