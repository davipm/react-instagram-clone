import React from 'react';
import { Link } from "react-router-dom";

import History from "../History";

import useScrollTop from "../../hooks/useScrollTop";

export default function Aside() {
  const stickAside = useScrollTop(200);

  const history = [
    { user_name: 'davi_pereira', time: 10, id: 1},
    { user_name: 'davi_pereira', time: 10, id: 2},
    { user_name: 'davi_pereira', time: 10, id: 3 },
    { user_name: 'davi_pereira', time: 10, id: 4 },
    { user_name: 'davi_pereira', time: 10, id: 5 },
    { user_name: 'davi_pereira', time: 10, id: 6 },
    { user_name: 'davi_pereira', time: 10, id: 7 },
    { user_name: 'davi_pereira', time: 10, id: 8 },
    { user_name: 'davi_pereira', time: 10, id: 9 },
    { user_name: 'davi_pereira', time: 10, id: 10 },
  ];

  const suggestions = [
    { user_name: 'davi_pereira', time: 'Segue você', id: 1},
    { user_name: 'davi_pereira', time: 'Amigo no Facebook', id: 2},
    { user_name: 'davi_pereira', time: 'Amigo no Facebook', id: 3 },
  ];

  const items = [
    { title: 'Sobre nós', url: '/' },
    { title: 'Suporte', url: '/' },
    { title: 'Imprensa', url: '/' },
    { title: 'API', url: '/' },
    { title: 'Carreiras', url: '/' },
    { title: 'Privacidade', url: '/' },
    { title: 'Termos', url: '/' },
    { title: 'Diretório', url: '/' },
    { title: 'Perfis', url: '/' },
    { title: 'Hashtags', url: '/' },
  ];

  let className = 'aside';

  if (stickAside) {
    className += ' aside--stick'
  }

  return (
    <aside className={className}>
      <div className="aside__user">
        <img
          src="https://via.placeholder.com/50x50"
          alt="User"
          className="img-rounded"
        />

        <div className="aside__user--info">
          <strong>davi_pereira</strong>
          <small>Davi Pereira</small>
        </div>
      </div>

      <History title="History" items={history} />
      <History title="Sugestões para você" items={suggestions} />

      <nav className="aside-nav">
        <ul className="aside-menu__menu">
          {items.map(item => (
            <li key={item.title} className="aside-nav__item">
              <Link to={item.url} className="aside-nav__link">
                {item.title}
              </Link>
            </li>
          ))}
          <li className="aside-nav__item">
            <span className="language-select">
              IDIOMA
            </span>
          </li>
        </ul>
      </nav>
    </aside>
  )
}
