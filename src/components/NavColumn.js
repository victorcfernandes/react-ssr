import React from "react";

import NavItem from "./NavItem";

const NavColumn = ({ data }) => (
  <ul className="navigation__column">
    {data.map(({ url_path, name, id }) => (
      <NavItem link={url_path} name={name} key={id} />
    ))}
  </ul>
);

export default NavColumn;
