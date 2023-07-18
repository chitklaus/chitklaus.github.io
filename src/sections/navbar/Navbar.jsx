import './navbar.css';
import Logo from '../../assets/logo.png';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import navbarItem from './navbarItem';
import { AiOutlineArrowRight } from 'react-icons/ai';

const Navbar = () => {
  return (
    <nav>
      <div className="container nav__container">
        <img className='nav__logo' src={Logo} alt="Logo" />
        <ul className='nav__menu'>
          {navbarItem.map(item => (
            <AbsoulteLink key={item.id} to={item.link} title={item.title} />
          ))}
        </ul>
      </div>
    </nav>
  );
};

function AbsoulteLink({ to, title, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li>
      <Link to={to} {...props}>
        {isActive && <AiOutlineArrowRight />} {title}
      </Link>
    </li>
  );
}

export default Navbar;
