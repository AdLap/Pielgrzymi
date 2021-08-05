import React from 'react';

export const Modal = ({ pic }) => {
    const styleModal = {
        width: '90vw',
        height: '90vh',
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        overflow: 'hidden'
    };

    const stylePic = {
        width: '100%',
        height: 'auto',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    }

    return (
        <>
            <div className='movie__galllery__modal' style={styleModal}>
                <div className='movie__gallery__modal__prev'></div>
                <div className='movie__gallery__modal__next'></div>
                <img src={pic} alt='PBM picture' className='movie__gallery__modal__img' style={stylePic}/>
            </div>
        </>
    );
}
