import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./SlideDrawer.css";

const SlideDrawer = (props) => {
  return (
    <div className={classes.SlideDrawer}>
      <Logo />
      <nav>
        <NavigationItems />
      </nav>
    </div>
  );
};

export default SlideDrawer;
