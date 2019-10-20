import React from 'react';
import { Link } from "react-router-dom";

export default function Footer () {
  const items = [
    { title: 'SOBRE NÓS', url: '/' },
    { title: 'SUPORTE', url: '/' },
    { title: 'IMPRENSA', url: '/' },
    { title: 'API', url: '/' },
    { title: 'EMPRENGOS', url: '/' },
    { title: 'PRIVACIDADE', url: '/' },
    { title: 'TERMOS', url: '/' },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <nav className="menu">
            <ul className="menu__list menu__list--footer">
              {items.map(item => (
                <li key={item.title} className="menu__item">
                  <Link to={item.url}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <p className="footer__dev">© 2019 INSTAGRAM</p>
        </div>
      </div>
    </footer>
  )
}
