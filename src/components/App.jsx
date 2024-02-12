import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Додано `Routes`
import { Navbar } from './Navbar/Navbar';
import HomePage from './HomePage/HomePage';
import MoviesPage from './MoviesPage/MoviesPage';
import NotFoundPage from './NotFoundPage/NotFoundPage';
import MoviesDetailsPage from './MovieDetailsPage/MovieDetailsPage';
import MoviesCast from './MovieCast/MovieCast';
import MovieReviews from './MovieReviews/MovieReviews';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          {' '}
          {/* Додано `Routes` */}
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:moviesId" element={<MoviesDetailsPage />}>
            <Route path="cast" element={<MoviesCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>{' '}
        {/* Додано закриваючий тег `Routes` */}
      </div>
    </Router>
  );
};

export default App;
