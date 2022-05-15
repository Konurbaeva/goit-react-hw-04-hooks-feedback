function Statistics({ good, neutral, bad, total, positivePercentage }) {
    return (
        <>
            {/* <div>Good: {good}</div>
         <div>Neutral:{neutral}</div>
         <div>Bad: {bad}</div>
          <span>Total:{total} </span>
          <div>Positive feedback: {this.countPositiveFeedbackPercentage(total, good)} %</div> */}
            <div>Statistics</div>
            <div>Good: {good}</div>
            <div>Neutral:{neutral}</div>
            <div>Bad: {bad}</div>
            <span>Total:{total} </span>
            <div>Positive feedback: {positivePercentage} %</div>
        </>
    );
}

export default Statistics;