import { getMoviesReviews } from '../../Api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import css from './MovieReviews.module.css';

export default function MovieReviews() {
  const { moviesId } = useParams();
  const [reviews, setReviews] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchReviews() {
      if (!moviesId) return;
      try {
        const fetchedReviews = await getMoviesReviews(moviesId);
        setReviews(fetchedReviews);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          setError(true);
        }
      }
    }
    fetchReviews();
  }, [moviesId]);

  return (
    <div className={css.container}>
      {error && <ErrorMessage className={css.error} />}
      {reviews && (
        <ul className={css.reviewsList}>
          {reviews.map(review => (
            <li key={review.id} className={css.reviewItem}>
              <h2 className={css.author}>Author: {review.author}</h2>
              <p className={css.content}>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
      {reviews == 0 && <p>We do not have any reviews for this movie</p>}
    </div>
  );
}
