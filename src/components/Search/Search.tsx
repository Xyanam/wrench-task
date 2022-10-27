import React, { SyntheticEvent, useState } from "react";
import ic_findWhite from "../../assets/img/ic_findWhite.svg";
import classes from "./Search.module.css";
import { DaDataAddressSuggestion } from "react-dadata";
import Loader from "../Loader/Loader";
import AddressesBlock from "../AddresssesBlock/AddressesBlock";

const Search: React.FC = () => {
  const [addressValue, setAddressValue] = useState<string | number>("");
  const [addresses, setAddresses] = useState<DaDataAddressSuggestion[]>([]);
  const [loader, setLoader] = useState(false);

  const url =
    "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
  const token = "264896a41c696277697c75f11e8da7b6754ff2cf";

  const options = {
    method: "POST",
    mode: "cors" as RequestMode,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Token " + token,
    },
    body: JSON.stringify({ query: addressValue, count: 20 }),
  };

  const findAddress = (e: SyntheticEvent) => {
    e.preventDefault();
    if (addressValue < 3) {
      alert("Введите минимум 3 символа");
    } else {
      setLoader(true);
      fetch(url, options)
        .then((resp) => resp.json())
        .then((result) => {
          setAddresses(result.suggestions);
          setLoader(false);
        });
    }
  };

  return (
    <>
      <div className={classes.container}>
        <form className={classes.inputBlock}>
          <input
            type="text"
            className={classes.input}
            placeholder="Введите интересующий вас адрес"
            value={addressValue}
            onChange={(e) => setAddressValue(e.target.value)}
            min={3}
            required
          />
          <button className={classes.btn} onClick={findAddress} type="submit">
            <img src={ic_findWhite} alt="find" className={classes.icon} /> Поиск
          </button>
        </form>
      </div>
      {loader ? <Loader /> : <AddressesBlock addresses={addresses} />}
    </>
  );
};

export default Search;
