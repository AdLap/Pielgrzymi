import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft, faArrowCircleRight, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

export const Modal = ({ pic }) => {
    return (
        <>
            <div className='movie__galllery__modal'>
                <div className='movie__gallery__modal__prev'><FontAwesomeIcon icon={faArrowCircleLeft} /></div>
                <div className='movie__gallery__modal__next'><FontAwesomeIcon icon={faArrowCircleRight} /></div>
                <div className='movie__gallery__modal__close'><FontAwesomeIcon icon={faTimesCircle} /></div>
                <img src={pic} alt='PBM picture' className='movie__gallery__modal__img'/>
            </div>
        </>
    );
}
