import React from "react";
import classes from "./Header.module.css";
import wrench from "../../assets/img/ic_wrench.svg";
import ic_person from "../../assets/img/ic_person.svg";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.navigation}>
        <div className={classes.logo}>
          <img src={wrench} alt="logo" className={classes.wrenchImg} />
          <h2 className={classes.title}>Wrench CRM</h2>
        </div>
        <div className={classes.userInfo}>
          <img src={ic_person} alt="avatar" className={classes.personImg} />
          <p className={classes.user}>Имя Фамилия</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
