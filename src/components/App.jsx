import { Component } from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';

export class App extends Component {
  state = {
    good: 10,
    neutral: 0,
    bad: 0,
  }

  countTotalFeedback = e => {
   console.log('countTotalFeedback ')
   let total = this.state.good + this.state.neutral + this.state.bad
   return total;
   }

   // {this.countTotalFeedback()}

   countPositiveFeedbackPercentage = e => {
    console.log('countPositiveFeedbackPercentage ')

    let positivePercentage = (this.state.good+ this.state.neutral+ this.state.bad)/2
    return positivePercentage
    }


  render() {

   const {good, neutral, bad} = this.state
  
   return <div  style={{
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 40,
    color: '#010101'
  }}>
     <FeedbackOptions options={good} 
    // onLeaveFeedback={}
     ></FeedbackOptions>
     <Statistics good={good} neutral={neutral} bad={bad} total={this.total} positivePercentage={this.positivePercentage}/>
      <span>Total: {this.countTotalFeedback} </span>
   </div>;
  }
}


