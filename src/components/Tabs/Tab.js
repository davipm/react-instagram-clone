import React from "react";
import PropTypes from "prop-types";

Tab.propTypes = {
  activeTab: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default function Tab({ onClick, activeTab = "", label = "" }) {
  const changeTab = () => onClick(label);
  let className = 'tab-list-item';

  if (activeTab === label) className += ' tab-list-active';

  return (
    <li
      className={className}
      onClick={changeTab}
    >
      {label}
    </li>
  );
}
