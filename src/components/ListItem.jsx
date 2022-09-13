import React from "react";

const ListItem = ({ children, title }) => {
  return (
    <li className="p-[5px] cursor-pointer items-center flex rounded-[10px] hover:bg-[rgb(228,228,250)]">
      {children}
      <span>{title}</span>
    </li>
  );
};

export default ListItem;
