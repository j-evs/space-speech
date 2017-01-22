import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Isvg from 'react-inlinesvg';

import '../styles/SpeechPreview.less';

const SpeechPreview = ({ id, icon, description }) => (
    <li className='speech-preview-wrapper'>
        <Link
            className='speech-preview'
            to={`/listen/${id}`}
        >
            <Isvg className='speech-preview__logo'  src={icon} />
            <p className='speech-preview__description'>{description}</p>
        </Link>
    </li>
);

SpeechPreview.propTypes = {
    id: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

export default SpeechPreview;
