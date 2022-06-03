import { useState } from "react";
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOption/FeedbackOptions';
import Section from './Section';
import Notification from './Notification';

export function App() {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  })

//   const onLeaveFeedback = option => {
//     return setState({ [option]: state[option] + 1 });
// };

const onLeaveFeedback = (option) => {
  return setState(prevState => ({ ...prevState, [option]: state[option] + 1 }));
};

  const countTotalFeedback = () => {
    const {good, neutral, bad} = state;
    console.log('good: ', good);
    console.log('neutral: ', neutral);
    console.log('bad: ', bad);

    let total = good + neutral + bad
    return total
  }

  const countPositiveFeedbackPercentage = (total, good) => {
   if(total){
    return good * 100 / total;
   }
  }
  

       const {good, neutral, bad} = state;
       const total = countTotalFeedback();
       const options = Object.keys(state)

  
      return <div style={{
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 25,
        color: '#010101'
      }}>
        <Section title="Please leave Feedback">
        <FeedbackOptions
        options={options}
        onLeaveFeedback={onLeaveFeedback}
        />
        </Section>

      <Section title="Statistics"> 
     {total ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={countPositiveFeedbackPercentage(total, good)}
            />
          ) : (
            <Notification message="There is no feedback"/>
          )}
         </Section>
        </div>
  }