import { configureStore } from '@reduxjs/toolkit';
import searchFlightsReducer from '../slices/search.flights.slice';

export default configureStore({
  reducer: {
    flights: searchFlightsReducer,
  },
});
