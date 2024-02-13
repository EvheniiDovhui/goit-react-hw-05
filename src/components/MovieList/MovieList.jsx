import MovieCard from '../MovieCard/MovieCard';
import css from './MovieList.module.css';

const MovieList = ({ items }) => {
  return (
    <ul className={css.list}>
      {items.map(item => (
        <li key={item.id}>
          <MovieCard item={item} />
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
