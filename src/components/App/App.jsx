import React, { Component } from 'react';
import Feedbacks from '../Feedbacks';
import Section from '../Section';
import Statistics from '../Statistics';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback() {
    return Object.values(this.state).reduce((acc, stat) => {
      acc += stat;
      return acc;
    }, 0);
  }

  countPositiveFeedbackPercentage() {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  }

  handleClickBtn = btnName => {
    this.setState({ [btnName]: this.state[btnName] + 1 });
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <Section title="Please, leave yours feedback">
        <Feedbacks
          options={Object.keys(this.state)}
          onLeaveFb={this.handleClickBtn}
        />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </Section>
    );
  }
}
