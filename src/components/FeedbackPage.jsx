import React, { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { NotificationMsg } from './NotificationMsg/NotificationMsg';
import { Div } from './FeedbackPage.styled';

class FeebbackPage extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
  };

  updateGoodStatistics = evt => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    }, this.countTotalFeedback);
  };

  updateNeutralStatistics = evt => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    }, this.countTotalFeedback);
  };

  updateBadStatistics = evt => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    }, this.countTotalFeedback);
  };

  countTotalFeedback = () => {
    this.setState(
      {
        total: this.state.good + this.state.neutral + this.state.bad,
      },
      this.countPositiveFeedbackPercentage
    );
  };

  countPositiveFeedbackPercentage = () => {
    this.setState({
      positivePercent: Math.round((this.state.good / this.state.total) * 100),
    });
  };

  render() {
    return (
      <Div>
        <h2>Please leave feedback</h2>
        <FeedbackOptions
          updateGoodStatistics={this.updateGoodStatistics}
          updateNeutralStatistics={this.updateNeutralStatistics}
          updateBadStatistics={this.updateBadStatistics}
        />
        <h2>Statistics</h2>
        {this.state.good > 0 || this.state.neutral > 0 || this.state.bad > 0 ? (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.state.total}
            positivePercentage={this.state.positivePercent}
          />
        ) : (
          <NotificationMsg message="There is no feedback" />
        )}
      </Div>
    );
  }
}

export default FeebbackPage;
