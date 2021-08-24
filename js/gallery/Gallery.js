import React, { useState } from 'react';
import { Modal } from './Modal';
import { Picture } from './Picture';
import imgs from './imgs';

export const Gallery = () => {
    const [pics, setPics] = useState(imgs);
    const [currPic, setCurrPic] = useState(null);

    const showPic = pic => {
        setCurrPic(pic);
    }

    const closeModal = todo => {
        setCurrPic(todo);
    }

    const prevPic = prev => {
        const idx = pics.indexOf(prev);
        if (idx === 0) {
            setCurrPic(pics[pics.length - 1])
        } else {
            setCurrPic(pics[idx - 1]);
        }
    }

    const nextPic = next => {
        const idx = pics.indexOf(next);
        if (idx === pics.length - 1) {
            setCurrPic(pics[0])
        } else {
            setCurrPic(pics[idx + 1]);
        }
    }

    return (
        <>
            {
                pics.map((img, idx) => <Picture
                    pic={img}
                    key={idx}
                    onShowPic={showPic}
                />)
            }
            {
                currPic && <Modal
                    pic={currPic}
                    onClose={closeModal}
                    onPrev={prevPic}
                    onNext={nextPic}
                />
            }
        </>
    )
}
