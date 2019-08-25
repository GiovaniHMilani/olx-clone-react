import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './Header.css'

import Menu from '../../../assets/Hamburger_icon.png'

export default function Header(props) {

  const [menu, setMenu] = useState(false);

  const { user } = props;

  function menuToggle() {
    setMenu(!menu)
  }

  return (
    <header>
      <div className="container">
        <div className="menu-opener" onClick={menuToggle}>
          <img src={Menu} alt="Menu" />
        </div>

        <div className="logo">
          <Link to="/">
            <span className="logo-o">O</span>
            <span className="logo-l">L</span>
            <span className="logo-x">X</span>
          </Link>
        </div>

        <nav className={menu ? 'opened' : ''}>
          <ul>
            {user.logged &&
              <li><Link to="/account">Minha Conta</Link></li>
            }
            {user.logged === false &&
              <>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Registrar</Link></li>
              </>
            }
            <li><Link to="/post" className="link-button">Poste um Anúncio</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
