import React from "react";

const NavItem = ({ link, name }) => (
  <li>
    <a href={link} className="navigation__item">
      {name}
    </a>
  </li>
);

export default NavItem;
