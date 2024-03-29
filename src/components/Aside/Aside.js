import React from 'react';
import { Link, useHistory } from "react-router-dom";

import History from "../History";

import useScrollTop from "../../hooks/useScrollTop";

import { suggestions, items, historyData } from "./asideData";

export default function Aside() {
  let history = useHistory();
  const stickAside = useScrollTop(45);
  let className = 'aside';

  if (stickAside) {
    className += ' aside--stick'
  }

  return (
    <aside className={className}>
      <div
        className="aside__user"
        onClick={() => {
          history.push('/explore/');
        }}
      >
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

      <History title="History" items={historyData} />
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
