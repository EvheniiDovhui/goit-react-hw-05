import css from './PageTitle.module.css';
import { BiSolidCameraMovie } from 'react-icons/bi';

const PageTitle = () => {
  return (
    <h1 className={css.titleContainer}>
      <BiSolidCameraMovie className={css.icon} />
      <span className={css.title}>Trending today</span>
    </h1>
  );
};

export default PageTitle;
