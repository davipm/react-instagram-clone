import React from 'react';

const CardHeader = () => (
  <div className="card__header">
    <div className="card__user">
      <img
        src="https://via.placeholder.com/42x42"
        alt="User"
        className="card__img"
      />
      <h2 className="card__user--name">
        davi_pereira
      </h2>
    </div>
    <div className="card__config">
      ...
    </div>
  </div>
);

export default CardHeader;
