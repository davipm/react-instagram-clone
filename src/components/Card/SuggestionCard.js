import React from 'react';

function SuggestionCard() {
  return (
    <div className="card card--suggestion">
      <img src="https://66.media.tumblr.com/b3316422c113bb4294fb8bd6542b6d4b/85897f85c36a22e6-ce/s2048x3072/a7373752aaf4c28cb8b2519647bc2ffbe8cd6f7c.png" alt="" className="card__img" />
      <div className="card-body">
        <h3 className="card__title">davi_pereira</h3>
        <p className="card__text">Amigo do Facebook</p>
        <button className="btn btn--primary">Seguir</button>
      </div>
    </div>
  );
}

export default SuggestionCard;
