import React from "react";
import classes from "./Header.module.scss";
const Header = () => {
  return (
    <div className={classes.Header}>
      <div className={classes.container}>
        <h2>Where is what?</h2>
      </div>
    </div>
  );
};

export default Header;
