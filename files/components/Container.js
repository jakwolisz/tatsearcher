import React from "react";
import Items from "./Items";

const Container = ({ color, searchTerm }) => {
  return (
    <div>
      <h2>Obrazki {searchTerm}</h2>
      <Items color={color} searchTerm={searchTerm} />
    </div>
  );
};

export default Container;
