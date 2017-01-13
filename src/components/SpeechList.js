import React, { PropTypes } from 'react';
import SpeechPreview from './SpeechPreview';

const SpeechList = ({ speeches, onSpeechClick }) => (
    <ul>
        {
            speeches.map( (speech, i) => {
                let { id, iconSrc, description} = speech;
                return (
                    <SpeechPreview
                        key={id}
                        id={id}
                        iconSrc={iconSrc}
                        description={description}
                        onClick={() => onSpeechClick(i)}
                    />
                );
            })
        }
    </ul>
);

SpeechList.propTypes = {
    speeches: PropTypes.arrayOf(PropTypes.shape({
        audioSrc: PropTypes.string.isRequired,
        pictures: PropTypes.array.isRequired,
        info: PropTypes.array.isRequired,
        iconSrc: PropTypes.string.isRequired
    }).isRequired).isRequired,
    onSpeechClick: PropTypes.func.isRequired
}

export default SpeechList;
