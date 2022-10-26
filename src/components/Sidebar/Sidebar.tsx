import React, { useState } from "react";
import { Link } from "react-router-dom";
import navigationConfig from "../../configs/NavigationConfig";
import classes from "./Sidebar.module.css";

const Sidebar: React.FC = () => {
  const [activeNav, setActiveNav] = useState(0);
  return (
    <div className={classes.container}>
      <h2 className={classes.menu}>Меню</h2>
      <div className={classes.sidebar}>
        {navigationConfig.map((navigation, index) => {
          return (
            <Link
              to={navigation.path}
              key={navigation.key}
              className={
                activeNav === index ? classes.blockActive : classes.block
              }
              onClick={() => setActiveNav(index)}
            >
              <div className={classes.navItem}>
                <img
                  src={navigation.icon}
                  alt="icon"
                  className={classes.icon}
                />
                <span className={classes.title}>{navigation.title}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
