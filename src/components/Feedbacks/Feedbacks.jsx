import React from 'react';
import PropTypes from 'prop-types';
import Btn from '../Button/Button';

const Feedbacks = ({ options, onLeaveFb }) =>
  options.map(btnName => (
    <Btn key={btnName} btnName={btnName} onLeaveFb={onLeaveFb} />
  ));

Feedbacks.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFb: PropTypes.func.isRequired,
};

export default Feedbacks;
