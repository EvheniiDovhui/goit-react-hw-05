import { useEffect, useState } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import { getMovies } from '../../Api';
import PageTitle from '../PageTitle/PageTitle';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import css from './HomePage.module.css';

export default function HomePage() {
  const [populars, setPopulars] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchData() {
      try {
        const fetchedMovies = await getMovies({ abortController: controller });
        setPopulars(fetchedMovies.results);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          setError(true);
        }
      }
    }
    fetchData();
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div className={css.container}>
      <PageTitle>Trending today</PageTitle>
      {error && <ErrorMessage className={css.error} />}
      {populars.length > 0 && <MovieList items={populars} />}
    </div>
  );
}
