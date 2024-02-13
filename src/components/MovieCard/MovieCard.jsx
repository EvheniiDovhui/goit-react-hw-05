import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import css from './MovieCard.module.css';

const MovieCard = ({ item }) => {
  const location = useLocation();
  return (
    <Link to={`/movies/${item.id}`} state={location} className={css.cardLink}>
      {item.title}
    </Link>
  );
};

export default MovieCard;
