import React, { PropTypes } from 'react';
import SpeechPreview from './SpeechPreview';
import '../styles/SpeechList.less';

const SpeechList = ({ speechesPreviewInfo }) => (
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
                        />
                    );
                })
            }
        </ul>
    </div>
);

SpeechList.propTypes = {
    speechesPreviewInfo: PropTypes.arrayOf(PropTypes.shape({
        description: PropTypes.string.isRequired,
        previewIcon: PropTypes.string.isRequired,
        speechID: PropTypes.string.isRequired
    }).isRequired).isRequired
}

export default SpeechList;
