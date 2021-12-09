import React from 'react';
import PropTypes from 'prop-types';
import s from './Section.module.css';

const Section = ({ title = 'Please, leave yours feedback', children }) => {
  return (
    <>
      <h1 className={s.mainTitle}>{title}</h1>
      {children}
    </>
  );
};

Section.propTypes = {
  title: PropTypes.string,
};

export default Section;
