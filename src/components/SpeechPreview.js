import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import '../styles/SpeechPreview.less';
//onClick тут не нужен!!!!
const SpeechPreview = ({ id, icon, description, onClick }) => (
    <li className='speech-preview-wrapper'>
        <Link
            className='speech-preview'
            to={`/listen/${id}`}
            onClick={onClick}
        >
            <img className='speech-preview__logo' src={icon} alt={description}/>
            <p className='speech-preview__description'>{description}</p>
        </Link>
    </li>
);

SpeechPreview.propTypes = {
    id: PropTypes.string.isRequired,
    iconSrc: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

export default SpeechPreview;
