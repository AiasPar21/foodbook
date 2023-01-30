import { useNavigate } from 'react-router-dom';

import Menu from '@/components/Menu';

import logo from '@/assets/looogo.svg';

import './Header.scoped.scss';

function Header() {
  const navigate = useNavigate();

  function goHome() {
    navigate('/');
  }

  return (
    <header>
      <div id="wrapper">
        <svg id="logo" data-src={logo} />
        <button type="button" id="title" onClick={goHome}>
          Foodbook
        </button>
      </div>
      <Menu />
    </header>
  );
}

export default Header;
