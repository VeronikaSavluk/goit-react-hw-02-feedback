import PropTypes from 'prop-types';

import {
    Options,
    Btn,
} from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    const buttons = Object.keys(options);

    return (
        <Options>
            {buttons.map(button => (
                <Btn type="button" onClick={onLeaveFeedback} key={button}>{button}</Btn>
            ))}
        </Options>
    )
};

FeedbackOptions.propTypes = {
    options: PropTypes.PropTypes.objectOf(PropTypes.number),
    buttons: PropTypes.PropTypes.arrayOf(
        PropTypes.exact({
            good: PropTypes.string.isRequired,
            neutral: PropTypes.string.isRequired,
            bad: PropTypes.string.isRequired,
  })),
    onLeaveFeedback: PropTypes.func.isRequired,
}

export default FeedbackOptions;