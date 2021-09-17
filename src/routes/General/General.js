import React, { useContext } from "react";
import Header from "../../modules/Navigation/Header";
import Navbar from "../../modules/Navigation/Navbar";
import classes from "./../../style.module.scss";
import ContextData from "./../../contex/Data/ContextData";
import GeneralView from "../../Views/general/GeneralView";

const General = () => {
  const { stateData } = useContext(ContextData);
  console.log(stateData);
  return (
    <div className={classes.main}>
      <GeneralView />
    </div>
  );
};

export default General;
