import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import css from './Navbar.module.css';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive ? css.active : null);
};

const Navbar = () => {
  return (
    <nav className={css.nav}>
      <NavLink exact={true.toString()} to="/" className={buildLinkClass}>
        Home
      </NavLink>
      <NavLink to="/movies" className={buildLinkClass}>
        Movies
      </NavLink>
    </nav>
  );
};

export default Navbar;
