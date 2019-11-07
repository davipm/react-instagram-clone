import React from 'react';
import { FaHeart } from "react-icons/fa";
import { MdModeComment } from "react-icons/md";

const CardImage = () => (
  <div className="card card--image card--no-border">
    <img src="https://via.placeholder.com/293x293" alt="Card content" />
    <div className="card__overlay">
      <span className="text">
        <FaHeart />
        301
      </span>
      <span className="text">
        <MdModeComment />
        10
      </span>
    </div>
  </div>
);

export default CardImage;
