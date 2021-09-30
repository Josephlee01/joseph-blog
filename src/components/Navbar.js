import React from "react";
import { Link, useHistory } from "react-router-dom";

const Navbar = ({ isLoggedIn, userInfo }) => {
  const history = useHistory();
  const onTitleClick = () => {
    history.push("/");
  };
  return (
    <nav className="navbar">
        <h1 onClick={onTitleClick}>The Dojo Blog</h1>

      <div className="links">
      <Link to="/profile">Hello, {userInfo.displayName}</Link>
        <Link
          to={isLoggedIn ? "/create" : "/auth"}
          style={{
            color: "white",
            backgroundColor: "#f1356d",
            borderRadius: "8px",
          }}
        >
          New Blog
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
