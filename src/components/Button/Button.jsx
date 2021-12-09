import React from 'react';
import PropTypes from 'prop-types';
import s from './Button.module.css';

const Btn = ({ btnName, onLeaveFb }) => {
  return (
    <button
      className={s.button}
      onClick={() => onLeaveFb(btnName)}
      type="button"
    >
      {btnName}
    </button>
  );
};

Btn.propTypes = {
  btnName: PropTypes.string.isRequired,
  onLeaveFb: PropTypes.func.isRequired,
};

export default Btn;
