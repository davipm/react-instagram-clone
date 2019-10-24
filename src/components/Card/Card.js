import React, { useState } from 'react';
import Comments from "../Comment/Commetn";
import CardHeader from "./CardHeader";
import CardLikes from "./CardLikes";

let COMMENT_ID = 0;

export default function Card({ userImg, contentImg, userName }) {
  const [comment, setComment] = useState('');
  const [commentList, setCommentList] = useState([]);
  const [liked, setLiked] = useState(false);

  const likes = 165;

  function addComment(/*event*/) {
    //event.preventDefault();
    setCommentList([
      ...commentList, {
        comment: comment,
        id: COMMENT_ID++
      }
    ]);

    setComment('');
  }

  const handleLiked = () => setLiked(!liked);

  return (
    <div className="card">
      <CardHeader userImg={userImg} userName={userName} />

      <div
        className="card__content"
        onDoubleClick={handleLiked}
      >
        <img
          src={contentImg}
          alt="Post"
          className="card__img--post"
        />
      </div>

      <div className="card__footer">
        <CardLikes
          isLiked={liked}
          handleClick={handleLiked}
        />

        <div className="likes__count">
          <img
            src={userImg}
            width={20}
            height={20}
            alt="User Liked"
            className="img-rounded"
          />
          <span>Curtido por <strong>Davi Pereira</strong> e <strong>outras {likes} pessoas</strong></span>

          {commentList.length ? <Comments comments={commentList} /> : null}
        </div>
      </div>

      <div className="card__form">
        <input
          value={comment}
          onChange={(event) => {
            setComment(event.target.value);
          }}
          onKeyUp={event => {
            if (event.keyCode === 13 && comment.length > 0) {
              addComment();
            }
          }}
          name="comment"
          type="text"
          className="card__input"
          placeholder="Adicione um comentário"
        />

        <button
          aria-label="button comment"
          onClick={event => {
            event.preventDefault();
            addComment();
          }}
          className="card__publish"
          disabled={!comment.length > 0}
        >
          Publicar
        </button>
      </div>
    </div>
  )
}
