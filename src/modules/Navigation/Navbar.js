import React from "react";
import { Link } from "react-router-dom";
import classes from "./navigation.module.scss";

const Navbar = () => {
  return (
    <div className={classes.navigation}>
      <div>
        <Link to="/courses">Courses</Link>
      </div>
      <div>
        <Link to="/shop">Shop</Link>
      </div>
      <div>
        <Link to="/news">News</Link>
      </div>
      <div>
        <Link to="/video">Video</Link>
      </div>
    </div>
  );
};

export default Navbar;
