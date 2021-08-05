import React, { useState } from 'react';
import { Modal } from './Modal';
import { Picture } from './Picture';

const imgs = [
    '../../images/1.png',
    '../../images/2.png',
    '../../images/3.png',
    '../../images/4.png',
    '../../images/5.png',
    '../../images/6.png'
]

export const Gallery = () => {
    const [pics, setPics] = useState(imgs);
    const [currPic, setCurrPic] = useState(null);

    const showPic = pic => {
        setCurrPic(pic);
    }

    return (
        <>
          {pics.map((img, idx) => <Picture pic={img} key={idx} onShowPic={showPic} />)}
          {currPic && <Modal pic={currPic}/>}
        </>
    )
}
