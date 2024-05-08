import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header" id="head">
      <div className="header-contents">
        <h2>Order your Favourite food here</h2>
        <p>
          “Good food is the foundation of genuine happiness.” – Auguste
          Escoffier. “The only thing I like better than talking about food is
          eating.”
        </p>
        <a href="#explore-menu">
          <button>View Menu</button>
        </a>
      </div>
    </div>
  );
};

export default Header;
