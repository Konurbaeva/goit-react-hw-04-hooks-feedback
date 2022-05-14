import { Component } from 'react';
import styled from 'styled-components';
// import Statistics from './Statistics';
// import FeedbackType from './FeedbackType';

export class App extends Component{
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  state = {
    good: 10,
    neutral: 20,
    bad: 5,
    message:""
  }

  // onChange = e => {
  //   console.log('was clicked')
  // }

  onChange= (e) => {
    //  console.log(`Button ${e.currentTarget.value} clicked`)
    // this.setState({ 
    //   [e.target.name]: e.currentTarget.value
    // });
    // this.setState((prevState) => ({
    //   [e.target.value]: prevState.value + 1
    // }));
    this.setState({value: this.state.value+1});
  }

   // {this.countTotalFeedback()}
  countTotalFeedback = e => {
    //   this.setState({
    //   message: `Button ${e.currentTarget.value} clicked`
    // });
    console.log(`Button ${e.target.value.length} clicked`)
   }

   countPositiveFeedbackPercentage = e => {
    console.log('countPositiveFeedbackPercentage ')

    let positivePercentage = (this.state.good+ this.state.neutral+ this.state.bad)/2
    return positivePercentage
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
    <Button type="button"  value="good" name="good" onClick={this.onChange}>Good</Button>
    <Button type="button"  value="neutral" name="neutral" onClick={this.onChange}>Neutral</Button>
    <Button type="button"  value="bad"  name="bad" onClick={this.onChange}>Bad</Button>
     <div>Good: {good}</div>
     <div>Neutral:{neutral}</div>
     <div>Bad: {bad}</div>
      {/* <span>Total: {this.countTotalFeedback} </span> */}
      <div>Positive feedback: {this.countTotalFeedback} %</div>
   </div>;
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
