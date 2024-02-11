import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styles from './MovieCast.module.css';

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=YOUR_API_KEY`
      )
      .then(response => {
        setCast(response.data.cast);
      })
      .catch(error => {
        console.error('Error fetching movie cast:', error);
      });
  }, [movieId]);

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Cast</h3>
      <ul className={styles.castList}>
        {cast.map(actor => (
          <li key={actor.id} className={styles.actor}>
            {actor.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
