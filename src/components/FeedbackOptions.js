function FeedbackOptions({ options }) {

    // const { options } = this.props;
    console.log('================================OPTIONS: ' + options)
    return (
        <>Please leave feedback
            {this.props.options.map(({ good, neutral, bad }) =>
                (<button type="button">Good: {good}</button>))}
        </>
    );
}

export default FeedbackOptions;