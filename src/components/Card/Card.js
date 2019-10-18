import React, { useState } from 'react';
import Comments from "../Comment/Commetn";
import CardHeader from "./CardHeader";
import CardLikes from "./CardLikes";

let COMMENT_ID = 0;

export default function Card() {
  const [comment, setComment] = useState('');
  const [commentList, setCommentList] = useState([]);

  const likes = 165;

  function addComment(event) {
    event.preventDefault();

    setCommentList([
      ...commentList, {
        comment: comment,
        id: COMMENT_ID++
      }
    ]);

    setComment('');
  }

  return (
    <div className="card">
      <CardHeader />

      <div className="card__content">
        <img
          src="https://via.placeholder.com/614x614"
          alt="Post"
          className="card__img--post"
        />
      </div>

      <div className="card__footer">
        <CardLikes />

        <div className="likes__count">
          <img
            src="https://via.placeholder.com/20x20"
            alt="User Liked"
            className="img-rounded"
          />
          <span>Curtido por <strong>Davi Pereira</strong> e <strong>outras {likes} pessoas</strong></span>

          {commentList.length ? <Comments comments={commentList} /> : ''}
        </div>
      </div>

      <div className="card__form">
        <input
          value={comment}
          onChange={(event) => {
            setComment(event.target.value);
          }}
          name="comment"
          type="text"
          className="card__input"
          placeholder="Adicione um comentário"
        />

        <button
          aria-label="button comment"
          onClick={addComment}
          className="card__publish"
          disabled={!comment.length > 0}
        >
          Publicar
        </button>
      </div>
    </div>
  )
}
