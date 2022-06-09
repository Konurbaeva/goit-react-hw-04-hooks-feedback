import { useState } from "react";
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOption/FeedbackOptions';
import Section from './Section';
import Notification from './Notification';

export function App() {

const [goodFeedback, setGoodFeedback] = useState(0);
const [neutralFeedback, setNeutralFeedback] = useState(0);
const [badFeedback, setBadFeedback] = useState(0);

// const onLeaveFeedback = (option) => {
//   return setState(prevState => ({ ...prevState, [option]: state[option] + 1 }));
// };


const onLeaveFeedback = (option) => {
  setGoodFeedback(prevState => ({ ...prevState, goodFeedback: goodFeedback + 1 }))
  setNeutralFeedback(prevState => ({ ...prevState, neutralFeedback: neutralFeedback + 1 }))
  setBadFeedback(prevState => ({ ...prevState, neutralFeedback: badFeedback + 1 }))
};


  // const countTotalFeedback = () => {
  //   const {good, neutral, bad} = state;

  //   let total = good + neutral + bad
  //   return total
  // }

  const countTotalFeedback = () => {

    let total = goodFeedback + neutralFeedback + badFeedback
    return total
  }

  const countPositiveFeedbackPercentage = (total, good) => {
   if(total){
    return good * 100 / total;
   }
  }
      //  const {good, neutral, bad} = state;
      //  const total = countTotalFeedback();
      //  const options = Object.keys(state)

      const total = countTotalFeedback();
      const options = Object.keys({ goodFeedback, neutralFeedback, badFeedback });

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
              good={goodFeedback}
              neutral={neutralFeedback}
              bad={badFeedback}
              total={total}
              positivePercentage={countPositiveFeedbackPercentage(total, goodFeedback)}
            />
          ) : (
            <Notification message="There is no feedback"/>
          )}
         </Section>
        </div>
  }