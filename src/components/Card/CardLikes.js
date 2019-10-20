import React from 'react';
import { 
  FaRegHeart,
  FaRegComment,
  FaUpload,
  FaRegClone,
  FaHeart
} from "react-icons/fa";

const CardLikes = ({ handleClick, isLiked }) => (
  <div className="card__likes__content">
    <div className="card__likes">
      <ul className="likes">
        <li
          className="likes__item"
          onClick={handleClick}
        >
          {!isLiked
            ? <FaRegHeart size={20} />
            : <FaHeart size={20} color="red" />
          }
        </li>
        <li className="likes__item">
          <FaRegComment size={20} />
        </li>
        <li className="likes__item">
          <FaUpload size={20} />
        </li>
      </ul>
    </div>
    <div className="card__save">
      <FaRegClone size={20} />
    </div>
  </div>
);

export default CardLikes;
