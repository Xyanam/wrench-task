import React from "react";
import Search from "../../components/Search/Search";
import classes from "./Address.module.css";

const Address: React.FC = () => {
  return (
    <div className={classes.container}>
      <div className={classes.titleBlock}>
        <h1 className={classes.title}>Поиск адресов</h1>
        <p className={classes.description}>Введите интересующий вас адрес</p>
      </div>
      <Search />
    </div>
  );
};

export default Address;
