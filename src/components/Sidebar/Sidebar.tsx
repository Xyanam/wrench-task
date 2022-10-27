import React, { useState } from "react";
import { Link } from "react-router-dom";
import navigationConfig from "../../configs/NavigationConfig";
import classes from "./Sidebar.module.css";
import arrow from "../../assets/img/arrow.svg";

const Sidebar: React.FC = () => {
  const [activeNav, setActiveNav] = useState(0);
  const [activeArrow, setActiveArrow] = useState(true);
  return (
    <div className={classes.container}>
      <div className={classes.sidebar}>
        <h2 className={classes.menu}>Меню</h2>
        {navigationConfig.map((navigation, index) => {
          return (
            <div key={navigation.key}>
              <Link
                to={navigation.path}
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
                <div>
                  {navigation.submenu.length > 0 && (
                    <img
                      src={arrow}
                      onClick={() => setActiveArrow(!activeArrow)}
                      className={
                        activeArrow ? classes.arrowActive : classes.arrow
                      }
                      alt="arrow"
                    />
                  )}
                </div>
              </Link>
              {activeArrow &&
                navigation.submenu?.map((sub) => {
                  return (
                    <Link to={sub.path} className={classes.block} key={sub.key}>
                      <div className={classes.navSubItem}>
                        <img
                          src={sub.icon}
                          alt="icon"
                          className={classes.icon}
                        />
                        <span className={classes.title}>{sub.title}</span>
                      </div>
                    </Link>
                  );
                })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
