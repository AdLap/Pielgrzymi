import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft, faArrowCircleRight, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

export const Modal = ({ pic, onClose, onPrev, onNext }) => {
    const [hoverClose, setHoverClose] = useState(false);
    const [hoverNext, setHoverNext] = useState(false);
    const [hoverPrev, setHoverPrev] = useState(false);

    const styleModal = {
        width: '90vw',
        height: '90vh',
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        overflow: 'hidden'
    }

    const stylePrev = {
        position: 'absolute',
        top: '50%',
        left: '0',
        transform: 'translateY(-50%)',
        fontSize: '24px',
        color: 'rgba(121, 121, 121,1)',
        cursor: 'pointer',
        zIndex: '5'
    }

    const styleNext = {
        position: 'absolute',
        top: '50%',
        right: '0',
        transform: 'translateY(-50%)',
        fontSize: '24px',
        color: 'rgba(121, 121, 121,1)',
        cursor: 'pointer',
        zIndex: '5'
    }

    const styleClose = {
        position: 'absolute',
        top: '0',
        right: '0',
        fontSize: '24px',
        color: 'rgba(121, 121, 121,1)',
        cursor: 'pointer',
        zIndex: '5'
    }

    const styleImg = {
        width: '100%',
        height: 'auto',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: '4'
    }

    const hovClose = todo => {
        setHoverClose(todo);
    }

    const hovPrev = todo => {
        setHoverPrev(todo);
    }

    const hovNext = todo => {
        setHoverNext(todo);
    }

    return (
        <div className='movie__galllery__modal' style={styleModal}>
            <div className='movie__gallery__modal__prev'
                style={stylePrev}
                onMouseEnter={() => hovPrev(true)}
                onMouseLeave={() => hovPrev(false)}
                onClick={() => onPrev(pic)}
            >
                <FontAwesomeIcon icon={faArrowCircleLeft}
                    style={{ transition: '.3s', color: hoverPrev ? '#7b932a' : 'rgba(121, 121, 121, 1)' }}
                />
            </div>
            <div className='movie__gallery__modal__next'
                style={styleNext}
                onMouseEnter={() => hovNext(true)}
                onMouseLeave={() => hovNext(false)}
                onClick={() => onNext(pic)}
            >
                <FontAwesomeIcon icon={faArrowCircleRight}
                    style={{ transition: '.3s', color: hoverNext ? '#7b932a' : 'rgba(121, 121, 121, 1)' }}
                />
            </div>
            <div className='movie__gallery__modal__close'
                style={styleClose}
                onMouseEnter={() => hovClose(true)}
                onMouseLeave={() => hovClose(false)}
                onClick={() => onClose(null)}
            >
                <FontAwesomeIcon icon={faTimesCircle}
                    style={{ transition: '.3s', color: hoverClose ? '#7b932a' : 'rgba(121, 121, 121, 1)' }}
                />
            </div>
            <img src={pic} alt='PBM picture' className='movie__gallery__modal__img' style={styleImg} />
        </div>
    );
}

