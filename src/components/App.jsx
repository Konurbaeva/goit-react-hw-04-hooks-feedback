import { useState } from "react";
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOption/FeedbackOptions';
import Section from './Section';
import Notification from './Notification';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

const onLeaveFeedback = options => {
  switch (options) {
      case 'good':
          setGood(good + 1);
          break;
      case 'neutral':
          setNeutral(neutral + 1);
          break;
      case 'bad':
          setBad(bad + 1);
          break;

      default:
          break;
  }
};


  const countTotalFeedback = () => {
    let total = good + neutral + bad
    return total
  }

  const countPositiveFeedbackPercentage = (total, good) => {
   if(total){
    return good* 100 / total;
   }
  }
   
      const total = countTotalFeedback();
      const options = { good, neutral, bad };

      const converter= options => {
        return Object.keys(options);
    };

      return <div style={{
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 25,
        color: '#010101'
      }}>
        <Section title="Please leave Feedback">
        <FeedbackOptions
        options={converter(options)}
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