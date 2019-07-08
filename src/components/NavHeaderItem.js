import React, { useState } from "react";

import NavChildren from "./NavChildren";

const NavHeaderItem = ({ link, name, children }) => {
  const [active, setActive] = useState(false);
  const modifier = active ? "navigation__header-item--active" : "";

  return (
    <li
      className={`navigation__header-item ${modifier}`}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}>
      <a href={link} className="nav-header">
        {name}
      </a>
      <NavChildren data={children} />
    </li>
  );
};

export default NavHeaderItem;
