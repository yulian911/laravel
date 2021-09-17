import React from "react";

const Input = ({ value, setValue, name, type }) => {
  return (
    <div>
      <input
        name={name}
        type={type}
        value={value[name]}
        onChange={(e) => {
          setValue({
            ...value,
            [name]: e.target.value,
          });
        }}
      />
    </div>
  );
};

export default Input;
