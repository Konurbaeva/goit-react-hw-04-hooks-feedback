function Statistics({ good, neutral, bad, total, positivePercentage }) {
    return (
        <>
            <span>Total:{total}</span>
            <div>Statistics</div>
            <div>Good: {good}</div>
            <div>Neutral:{neutral}</div>
            <div>Bad: {bad} </div>
            <div>Positive feedback: {positivePercentage}</div>
        </>
    );
}

export default Statistics;