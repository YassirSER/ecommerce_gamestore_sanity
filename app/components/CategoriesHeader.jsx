import React from "react";

const CategoriesHeader = () => {
  return (
    <div className="categories-container">
      <div className="category">
        <a href="/products/xboxgame">Xbox games</a>
      </div>
      <div className="category">
        <a href="/products/steamgame">Steam games</a>
      </div>
      <div className="category">
        <a href="/products/psgame"> PS games </a>
      </div>
      <div className="category">
        <a href="/products/software">Software</a>
      </div>
    </div>
  );
};

export default CategoriesHeader;
