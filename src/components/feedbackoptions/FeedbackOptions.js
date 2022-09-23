import {
    Options,
    Btn,
} from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {

    return (
        <Options>
            <Btn type="button" onClick={onLeaveFeedback}>Good</Btn>
            <Btn type="button" onClick={onLeaveFeedback}>Neutral</Btn>
            <Btn type="button" onClick={onLeaveFeedback}>Bad</Btn>
        </Options>
    )
};

export default FeedbackOptions;