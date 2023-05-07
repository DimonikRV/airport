import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchFlights = createAsyncThunk(
  'flights/fetchFlights',
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch('https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/airport');
      if (!response.ok) {
        throw new Error('Failed to load data');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const searchFlightsSlice = createSlice({
  name: 'flights',
  initialState: {
    flights: [],
    status: null,
    error: null,
  },

  extraReducers: builder => {
    builder.addCase(fetchFlights.pending, state => {
      state.status = 'loading';
      state.error = null;
    });

    builder.addCase(fetchFlights.fulfilled, (state, action) => {
      state.status = 'resolved';
      state.flights = state.flights.concat(action.payload);
    });
    builder.addCase(fetchFlights.rejected, (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    });
  },
});

export default searchFlightsSlice.reducer;
