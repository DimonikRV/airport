import React from 'react';
import { Provider } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import store from './store/store';
import Layout from './components/layout/Layout';

const App = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/*" element={<Layout />} />
        <Route index element={<Navigate to="/departures" replace />} />
      </Routes>
    </Provider>
  );
};

export default App;
