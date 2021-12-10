import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({ statistics, total, positivePercentage }) => {
  return (
    <>
      <h2 className={s.statisticsTitle}>Statistics</h2>
      <ul>
        {statistics.map(([key, value]) => (
          <li>
            {key}: {value}
          </li>
        ))}
        <li>Total: {total}</li>
        <li>Positive feedbacks: {positivePercentage}%</li>
      </ul>
    </>
  );
};

Statistics.propTypes = {
  statistics: '',
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
