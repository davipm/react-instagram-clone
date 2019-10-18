import React from 'react';
import History from "../History";

import useScrollTop from "../../hooks/useScrollTop";

export default function Aside() {
  const stickAside = useScrollTop(100);

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
    </aside>
  )
}
