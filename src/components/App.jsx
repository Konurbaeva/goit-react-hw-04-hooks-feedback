import {Component} from "react";
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOption/FeedbackOptions';
import Section from './Section';
import Notification from './Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  onLeaveFeedback = option => {
    return this.setState({ [option]: this.state[option] + 1 });
};

  countTotalFeedback = () => {
    const {good, neutral, bad} = this.state;
    let total = good + neutral + bad
    return total
  }

  countPositiveFeedbackPercentage = (total, good) => {
   if(total){
    return good * 100 / total;
   }
  }
  
     render() {
       const {good, neutral, bad} = this.state;
       const total = this.countTotalFeedback();
       const options = Object.keys(this.state)

  
      return <div style={{
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 25,
        color: '#010101'
      }}>
        <Section title="Statistics">
        <FeedbackOptions
        options={options}
        onLeaveFeedback={this.onLeaveFeedback}
        />
     {total ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={this.countPositiveFeedbackPercentage(total, good)}
            />
          ) : (
            <Notification message="There is no feedback"/>
          )}
         </Section>
        </div>
     }
  }