import React from 'react';

const InputField = ({type, name, id, placeholder, onChangeHandler, defaultValue}) => {
  return (
    <div>
      <textarea
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        value={defaultValue}
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default InputField;
