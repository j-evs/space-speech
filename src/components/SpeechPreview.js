import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Isvg from 'react-inlinesvg';

import '../styles/SpeechPreview.less';
//onClick тут не нужен!!!!

// <img className='speech-preview__logo' src={icon} alt={description}/>
const SpeechPreview = ({ id, icon, description, onClick }) => (
    <li className='speech-preview-wrapper'>
        <Link
            className='speech-preview'
            to={`/listen/${id}`}
            onClick={onClick}
        >
            <Isvg className='speech-preview__logo'  src={icon} />
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
