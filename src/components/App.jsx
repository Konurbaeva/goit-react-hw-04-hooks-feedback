import { Component } from 'react';
import styled from 'styled-components';
// import Statistics from './Statistics';
// import FeedbackType from './FeedbackType';

export class App extends Component{

  state = {
    good: 10,
    neutral: 20,
    bad: 5,
  }

  onChange = (e, type) => {
    this.setState(prevState => {
     console.log(prevState);
     return { type: prevState[type] + 1 };
   });
  }

  render() {
    const {good, neutral, bad} = this.state
  
   return <div style={{
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 40,
    color: '#010101'
  }}>

    <div>Please, leave feedback</div>
    <Button type="button"  value="good" name="good" 
    onClick={this.onChange}>Good</Button>
    <Button type="button"  value="neutral" name="neutral" onClick={this.onChange}>Neutral</Button>
    <Button type="button"  value="bad"  name="bad" onClick={this.onChange}>Bad</Button>
     <div>Good: {good}</div>
     <div>Neutral:{neutral}</div>
     <div>Bad: {bad}</div>
      {/* <span>Total: {this.countTotalFeedback} </span> */}
      <div>Positive feedback:  %</div>
   </div>
  }
}


const Button = styled.button`
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;
