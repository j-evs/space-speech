import React, { PropTypes } from 'react';
import SpeechPreview from './SpeechPreview';
import '../styles/SpeechList.less';

const SpeechList = ({ speeches, onSpeechClick }) => (
    <div className="speechlist">
        <h2 className="speechlist__header">Explore our library of famous public speeches</h2>
        <ul className="speechlist__speech-container">
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
    </div>
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
