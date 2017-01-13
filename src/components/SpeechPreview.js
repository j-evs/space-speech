import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const SpeechPreview = ({ id, iconSrc, description, onClick }) => (
    <li>
        <Link
            to={`/listen/${id}`}
            onClick={onClick}
        >
            <img src={iconSrc} alt={description}/>
            <p>{description}</p>
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
