import {Component} from "react";
import styled from 'styled-components';
// import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';

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
        <FeedbackOptions
         onGoodChange={this.onGoodChange} 
         onNeutralChange={this.onNeutralChange} 
         onBadChange={this.onBadChange} 
        />
      
         <div>Good: {good}</div>
         <div>Neutral:{neutral}</div>
         <div>Bad: {bad}</div>
          <span>Total:{total} </span>
          <div>Positive feedback: {this.countPositiveFeedbackPercentage(total, good)} %</div>
       </div>
     }
  }