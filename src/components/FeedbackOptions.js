function FeedbackOptions(props) {

    // const { options } = this.props;

    console.log('================================props: ' + JSON.stringify(props));
    console.log('================================OPTIONS: ' + JSON.stringify(props.options))
    return (
        <>Please leave feedback
            <div>
                {props.options.map(({ good, neutral, bad }) => (
                    <><button type="button">Good: {good}</button>
                        <button type="button">Neutral: {neutral}</button>
                        <button type="button">Bad: {bad}</button></>
                ))}
            </div>
        </>
    );
}

export default FeedbackOptions;