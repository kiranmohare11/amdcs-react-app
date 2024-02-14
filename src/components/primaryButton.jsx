import React from 'react';

const PrimaryButton = ({label, onClickHandler}) => {
  return (
    <div>
      <button onClick={onClickHandler}>{label}</button>
    </div>
  );
};

export default PrimaryButton;
