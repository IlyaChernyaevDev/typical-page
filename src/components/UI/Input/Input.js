import React from 'react';

const Input = (props) => {
  return (
    <div
      className={`${props.control} ${
        props.isValid === false ? props.invalid : ''
      }`}
    >
      <label htmlFor={props.id}>{props.name}</label>
      <input
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
};

export default Input;
