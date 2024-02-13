import css from './MovieDetailList.module.css';

const MoviesDetailsList = ({ movieData }) => {
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  return (
    <div className={css.container}>
      <div className={css.poster}>
        <img
          src={
            movieData.poster_path
              ? `https://image.tmdb.org/t/p/w500/${movieData.poster_path}`
              : defaultImg
          }
          width={250}
          alt={movieData.title}
        />
      </div>
      <div className={css.details}>
        <h2 className={css.title}>{movieData.title}</h2>
        {movieData.vote_average > 0 && (
          <div className={css.score}>
            <h3>User Score:</h3>
            <p>{movieData.vote_average.toFixed(0) * 10}%</p>
          </div>
        )}
        <h3 className={css.overview}>Overview:</h3>
        <p className={css.overview}> {movieData.overview}</p>
        <h3 className={css.genres}>Genres:</h3>
        {movieData.genres && (
          <p className={css.genres}>
            {movieData.genres.map(genre => genre.name).join(' ')}
          </p>
        )}
      </div>
    </div>
  );
};

export default MoviesDetailsList;
