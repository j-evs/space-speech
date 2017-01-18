import React, { PropTypes } from 'react';
import SpeechPreview from './SpeechPreview';
import '../styles/SpeechList.less';

const SpeechList = ({ speechesPreviewInfo, onSpeechClick }) => (

    <div className="speechlist">
        <h2 className="speechlist__header">Explore our library of famous public speeches</h2>
        <ul className="speechlist__speech-container">
            {
                speechesPreviewInfo.map( (speechPreviewInfo) => {
                    let { speechID, previewIcon, description} = speechPreviewInfo;
                    return (
                        <SpeechPreview
                            key={speechID}
                            id={speechID}
                            icon={previewIcon}
                            description={description}
                            onClick={() => onSpeechClick(speechID)}
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
