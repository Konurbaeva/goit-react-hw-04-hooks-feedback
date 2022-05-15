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

  onGoodChange = e => {
    this.setState(prevState => {
     console.log(prevState);
     return { good: prevState.good + 1 };
   });
  }

   onNeutralChange = e => {
    this.setState(prevState => {
     console.log(prevState);
     return { neutral: prevState.neutral + 1 };
   });
  }

   onBadChange = e => {
    this.setState(prevState => {
     console.log(prevState);
     return { bad: prevState.bad + 1 };
   });
  }

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

      return <div style={{
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}>
        <Section title="Statistics">
        <FeedbackOptions
         onGoodChange={this.onGoodChange} 
         onNeutralChange={this.onNeutralChange} 
         onBadChange={this.onBadChange} 
        />
        <Statistics good={good} neutral={neutral} bad={bad} total={total}
         positivePercentage={this.countPositiveFeedbackPercentage(total, good)}/>
         <Notification message="There is no feedback"></Notification>
         </Section>
        </div>
     }
  }