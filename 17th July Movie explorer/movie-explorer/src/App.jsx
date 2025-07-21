
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import UpcomingMovies from './pages/UpcomingMovies';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/movies/upcoming" />} />
      <Route path="/movies/upcoming" element={<UpcomingMovies />} />
    </Routes>
  );
};

export default App;
