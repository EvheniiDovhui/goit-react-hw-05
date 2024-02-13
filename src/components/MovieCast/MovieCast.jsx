import { getMoviesCast } from '../../Api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import css from './MovieCast.module.css';

export default function MoviesCast() {
  const { moviesId } = useParams();
  const [casts, setCasts] = useState(null);
  const [error, setError] = useState(false);

  const defaultImg =
    'https://img.freepik.com/premium-vector/actor-holding-star-trophy-cartoon-icon_24908-10408.jpg';

  useEffect(() => {
    if (!moviesId) return;
    async function fetchCast() {
      try {
        const fetchedCast = await getMoviesCast(moviesId);
        setCasts(fetchedCast);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          setError(true);
        }
      }
    }
    fetchCast();
  }, [moviesId]);
  return (
    <div className={css.container}>
      {error && <ErrorMessage className={css.error} />}
      {casts && (
        <ul className={css.castList}>
          {casts.map(cast => (
            <li key={cast.id} className={css.castItem}>
              <img
                src={
                  cast.profile_path
                    ? `https://image.tmdb.org/t/p/w500/${cast.profile_path}`
                    : defaultImg
                }
                className={css.castImage}
                alt={cast.title}
              />
              <h4 className={css.castName}>{cast.name}</h4>
              <p>
                <b className={css.castCharacter}>Character: </b>
                {cast.character}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
