import styled from 'styled-components';

function FeedbackOptions({ onGoodChange, onNeutralChange, onBadChange }) {
    return (
        <>Please leave feedback
            <Button type="button" value="good" name="good"
                onClick={onGoodChange}>Good</Button>
            <Button type="button" value="neutral" name="neutral" onClick={onNeutralChange}>Neutral</Button>
            <Button type="button" value="bad" name="bad" onClick={onBadChange}>Bad</Button>
        </>
    );
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


export default FeedbackOptions;