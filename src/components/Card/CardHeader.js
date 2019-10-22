import React from 'react';

const CardHeader = ({ userImg, userName }) => (
  <div className="card__header">
    <div className="card__user">
      <img
        src={userImg}
        width={42}
        height={42}
        alt="User"
        className="card__img"
      />
      <h2 className="card__user--name">
        {userName}
      </h2>
    </div>
    <div className="card__config">
      ...
    </div>
  </div>
);

export default CardHeader;
