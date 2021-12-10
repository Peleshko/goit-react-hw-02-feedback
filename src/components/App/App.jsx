import React, { Component } from 'react';
import Feedbacks from '../Feedbacks';
import Statistics from '../Statistics';
import Notification from '../Notification';
import s from './App.module.css';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback() {
    return Object.values(this.state).reduce((acc, stat) => acc + stat, 0);
  }

  countPositiveFeedbackPercentage() {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  }

  handleClickBtn = btnName => {
    this.setState({ [btnName]: this.state[btnName] + 1 });
  };

  render() {
    const options = Object.keys(this.state);
    const total = this.countTotalFeedback();
    const percent = this.countPositiveFeedbackPercentage();
    const statistics = Object.entries(this.state);

    return (
      <div className={s.container}>
        <h1 className={s.title}>Please, leave yours feedback</h1>
        <Feedbacks options={options} onLeaveFb={this.handleClickBtn} />
        {total > 0 && (
          <Statistics
            statistics={statistics}
            total={total}
            positivePercentage={percent}
          />
        )}
        {!total > 0 && <Notification message="There is no feedback" />}
      </div>
    );
  }
}
