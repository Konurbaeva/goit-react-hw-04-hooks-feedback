function FeedbackOptions({ options }) {
    return (
        <>Please leave feedback
            <button>Good: {options.good}</button>
            <button>Neutral: {options.neutral}</button>
            <button>Bad: {options.bad}</button>
        </>
    );
}

export default FeedbackOptions;