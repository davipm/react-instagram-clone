import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { useHistory } from "react-router-dom";
import Menu from "../Menu/Menu";

import useScrollTop from "../../hooks/useScrollTop";

import logo from '../../assets/img/logo.png';

export default function Header() {
  let history = useHistory();
  const stickHeader = useScrollTop(20);
  let className = 'header';

  if (stickHeader) {
    className += ' header--stick'
  }

  return (
    <header className={className}>
      <div className="container">
        <div className="row align-center">
          <div
            className="header__logo"
            onClick={() => {
              history.push('/');
            }}
          >
            <FaInstagram size={30} />
            <div className="divisor" />
            <img src={logo} alt="Logo" className="logo" />
          </div>
          <div className="header__form">
            <input
              type="text"
              placeholder="Search"
              className="form-control"
            />
          </div>
          <div className="header__menu">
            <Menu />
          </div>
        </div>
      </div>
    </header>
  )
}
