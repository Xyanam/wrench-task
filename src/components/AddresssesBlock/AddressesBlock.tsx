import React from "react";
import { DaDataAddressSuggestion } from "react-dadata";
import classes from "./AddressesBlock.module.css";

type AddressesProps = {
  addresses: DaDataAddressSuggestion[];
};

const AddressesBlock: React.FC<AddressesProps> = ({ addresses }) => {
  return (
    <div className={classes.containerAddress}>
      {addresses.length <= 0 ? "" : <h2 style={{ margin: "20px" }}>Адреса</h2>}
      <div className={classes.blockAddress}>
        {addresses.map((address, index) => {
          return (
            <div className={classes.address} key={index}>
              <span>{address.value}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AddressesBlock;
