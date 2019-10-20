import React from 'react';
import { Link } from "react-router-dom";
import { FaRegUser,FaRegHeart } from 'react-icons/fa';
import { FiCompass } from "react-icons/fi";

export default function Menu() {
  return (
    <nav className="menu">
      <ul className="menu__list">
        <li className="menu__item">
          <Link to="/explore/" className="menu__link">
            <FiCompass size={25} />
          </Link>
        </li>
        <li className="menu__item">
          <FaRegHeart size={25} />
        </li>
        <li className="menu__item">
          <Link to="/profile/" className="menu__link">
            <FaRegUser size={25} />
          </Link>
        </li>
      </ul>
    </nav>
  )
}
