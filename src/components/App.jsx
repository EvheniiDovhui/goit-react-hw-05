import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Додано `Routes`
import Navbar from './Navbar/Navbar';
import HomePage from '../pages/HomePage/HomePage';
import MoviesPage from '../pages/MoviesPage/MoviesPage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import MoviesDetailsPage from '../pages/MovieDetailsPage/MovieDetailsPage';
import MoviesCast from '../components/MovieCast/MovieCast';
import MovieReviews from '../components/MovieReviews/MovieReviews';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          {' '}
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:moviesId" element={<MoviesDetailsPage />}>
            <Route path="cast" element={<MoviesCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>{' '}
      </div>
    </Router>
  );
};

export default App;
