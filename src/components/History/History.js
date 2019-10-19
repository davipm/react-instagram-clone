import React from 'react';

/**
 * @return {null}
 */

export default function History({ title, items = [] }) {
  if (items.length < 0) return null;

  return (
    <div className="card history">
      <div className="history__header">
        <div className="history__title">
          {title}
        </div>
        <div className="history__subtitle">
          See all
        </div>
      </div>

      <div className="history__content">
        <ul className="history-list">
          {items.map(item => (
            <li key={item.id} className="history-list__item">
              <User
                name={item.user_name}
                info={item.time}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

const User = ({ name, info }) => (
  <button className="user">
    <div className="user__img-list">
      <img
        src="https://via.placeholder.com/44x44"
        alt={name}
        className="img-rounded"
      />
    </div>
    <div className="user__info-list">
      <h3 className="user__name">
        {name}
      </h3>
      <span className="user__info">
        {info}{ !isNaN(info) ? 'h ago': '' }
      </span>
    </div>
  </button>
);
