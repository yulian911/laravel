import React, { useState } from "react";
import Button from "../../ui/Button/Button";
import Input from "../../ui/Input/Input";
import classes from "./general.module.scss";

const GeneralView = () => {
  const [value, setValue] = useState();
  const sendValue = () => {
    console.log(value);
  };
  return (
    <div className={classes.wrapper}>
      <div className={classes.wrapper__inner}>
        <div>Logowanie</div>
        <div>
          <Input type="text" value={value} setValue={setValue} name="login" />
          <Input
            type="password"
            value={value}
            setValue={setValue}
            name="password"
          />
        </div>
        <div>
          <Button text="wejdz" onClick={sendValue} />
        </div>
      </div>
    </div>
  );
};

export default GeneralView;
