import React, { useState } from "react";
import PropTypes from "prop-types";
import Tab from "./Tab";

Tabs.propTypes = {
  children: PropTypes.instanceOf(Array).isRequired
};

export default function Tabs({ children = [] }) {
  const [activeTab, setActiveTab] = useState(children[0].props.label);
  const onClickTabItem = tab => setActiveTab(tab);

  let className = 'tab-content';
  if (children[0].props.label !== activeTab) className += ' tab-content-mask';

  return (
    <div className="tabs">
      <ul className="tab-list">
        {children.map(child => {
          return (
            <Tab
              key={child.props.label}
              activeTab={activeTab}
              label={child.props.label}
              onClick={onClickTabItem}
            />
          );
        })}
      </ul>
      <div className={className}>
        {children.map(child => {
          if (child.props.label !== activeTab) return undefined;
          return child.props.children;
        })}
      </div>
    </div>
  );
}

export function TabsItem({ children, label }) {
  return (
    <div data-label={label} id="test">
      { children }
    </div>
  )
}
