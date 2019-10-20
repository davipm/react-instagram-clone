import React from 'react';
import Card from "../components/Card";
import Aside from "../components/Aside";

export default function Feed() {
  const feed = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <section className="container">
      <div className="content">
        <div className="row">
          <div className="feed">
            {feed.map(item => (
              <Card key={item} />
            ))}
          </div>
          <Aside />
        </div>
      </div>
    </section>
  )
}
