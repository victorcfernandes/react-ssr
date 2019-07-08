import React from "react";

import NavColumn from "./NavColumn";

const NavChildren = ({ data }) => {
  const firstColumn = data.filter(
    item => !item.include_in_menu_column2 && !item.include_in_menu_column3
  );
  const secondColumn = data.filter(item => item.include_in_menu_column2);
  const thirdColumn = data.filter(item => item.include_in_menu_column3);

  return (
    <div className="navigation__children">
      {firstColumn.length > 0 && <NavColumn data={firstColumn} />}
      {secondColumn.length > 0 && <NavColumn data={secondColumn} />}
      {thirdColumn.length > 0 && <NavColumn data={thirdColumn} />}
    </div>
  );
};

export default NavChildren;
