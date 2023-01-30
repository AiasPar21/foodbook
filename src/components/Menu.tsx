import { NavLink } from 'react-router-dom';

import 'external-svg-loader';

import './Menu.scoped.scss';

function Menu() {
  const routes = { '/about': 'About' };

  return (
    <nav>
      <ul>
        {Object.entries(routes).map(([key, value]) => (
          <li key={key}>
            <NavLink to={key} className={({ isActive }) => (isActive ? 'active' : '')}>
              {value}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Menu;
