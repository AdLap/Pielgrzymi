import React from 'react';
import LazyLoad from 'react-lazyload';

export const Picture = ({ pic, onShowPic }) => {
    return (
        <LazyLoad once>
            <img
                src={pic}
                alt='PBM picture'
                className="movie__gallery__img"
                onClick={() => onShowPic(pic)}
            />
        </LazyLoad>
    )
}
