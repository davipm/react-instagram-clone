import React from 'react';
import Card from "../components/Card";
import Aside from "../components/Aside";

export default function Feed() {
  const items = [
    {
      userImg: 'https://66.media.tumblr.com/b3316422c113bb4294fb8bd6542b6d4b/85897f85c36a22e6-ce/s2048x3072/a7373752aaf4c28cb8b2519647bc2ffbe8cd6f7c.png',
      contentImg: 'https://i.pinimg.com/originals/89/f6/2a/89f62aeb5b2c134b5c592e2023a283da.jpg',
      userName: 'inosuke_hashibira',
      comment: '',
      id: 1
    },
    {
      userImg: 'https://66.media.tumblr.com/b3316422c113bb4294fb8bd6542b6d4b/85897f85c36a22e6-ce/s2048x3072/a7373752aaf4c28cb8b2519647bc2ffbe8cd6f7c.png',
      contentImg: 'https://cosmonerd.com.br/wp-content/uploads/2019/08/a36c0ce2-a2dc-43d5-944e-6b639657ba57.jpg',
      userName: 'inosuke_hashibira',
      id: 2
    },
    {
      userImg: 'https://66.media.tumblr.com/b3316422c113bb4294fb8bd6542b6d4b/85897f85c36a22e6-ce/s2048x3072/a7373752aaf4c28cb8b2519647bc2ffbe8cd6f7c.png',
      contentImg: 'https://i.pinimg.com/originals/0c/97/2d/0c972dbc58d4a142c2d12d59bd89e4fa.jpg',
      userName: 'inosuke_hashibira',
      id: 3
    },
  ];

  return (
    <section className="container">
      <div className="content">
        <div className="row">
          <div className="feed">
            {items.map(item => (
              <Card key={item.id} {...item} />
            ))}
          </div>

          <Aside />
        </div>
      </div>
    </section>
  )
}
