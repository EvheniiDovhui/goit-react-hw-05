import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './MoviesPage.module.css';

const MoviesPage = () => {
  const [query, setQuery] = useState('');
  const history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();
    if (query.trim()) {
      history.push(`/movies?query=${query}`);
    }
  };

  return (
    <div className={styles.container}>
      <h2>Search Movies</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          Search
        </button>
      </form>
    </div>
  );
};

export default MoviesPage;
