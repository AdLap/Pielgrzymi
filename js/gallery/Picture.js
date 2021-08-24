import React from 'react'

export const Picture = ({ pic, onShowPic }) => {
    return (
        <img
            src={pic}
            alt='PBM picture'
            className="movie__gallery__img"
            onClick={() => onShowPic(pic)}
        />
    )
}
