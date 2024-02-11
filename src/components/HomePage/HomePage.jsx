import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './HomePage.module.css';

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://api.themoviedb.org/3/trending/movie/week?api_key=e8cda26a224793187e20315f88663066'
      )
      .then(response => {
        setTrendingMovies(response.data.results);
      })
      .catch(error => {
        console.error('Error fetching trending movies:', error);
      });
  }, []);

  return (
    <div className={styles.container}>
      <h2>Trending Movies</h2>
      <ul className={styles.movieList}>
        {trendingMovies.map(movie => (
          <li key={movie.id} className={styles.movieItem}>
            {movie.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
