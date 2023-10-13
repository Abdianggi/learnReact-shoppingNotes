import React from "react";
import { NavLink } from "react-router-dom";

 const Header = () => {
  return (
    <header>
      <h1>Book Management App</h1>
      <hr />
      <div className="links">
        <NavLink to="/" className="text-teal-600" activeClassName="active" exact>
          Books List
        </NavLink>
        <NavLink to="/add" className="text-teal-600" activeClassName="active">
          Add Book
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
