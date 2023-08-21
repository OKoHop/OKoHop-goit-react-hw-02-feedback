import React, { Component } from 'react';
import { Statistics } from '../Statistics/Statistics';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { NotificationMsg } from '../NotificationMsg/NotificationMsg';
import { Div } from './FeedbackPage.styled';
import { Section } from '../Section/Section';

class FeebbackPage extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    let total = this.state.bad + this.state.good + this.state.neutral;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const positivePecent = this.state.good / this.countTotalFeedback();
    return Math.round(positivePecent * 100);
  };

  updateStatistics = btnName => {
    this.setState(prevState => {
      return {
        [btnName]: prevState[btnName] + 1,
      };
    });
  };

  render() {
    return (
      <Div>
        <Section title="Please leave feadback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.updateStatistics}
          />
        </Section>
        <Section title="Statistics">
          {this.state.good > 0 ||
          this.state.neutral > 0 ||
          this.state.bad > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <NotificationMsg message="There is no feedback" />
          )}
        </Section>
      </Div>
    );
  }
}

export default FeebbackPage;
