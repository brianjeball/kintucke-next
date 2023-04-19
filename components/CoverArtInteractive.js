import React from 'react';

import ellipses from '../public/assets/js/ellipses';

const CoverArtInteractive = () => {
    const handleStrokeClick = (e) => {
        e.target.classList.add('stroke');
        console.log('called')
    }

    return (
        <div className='circles-container'>
            <div className='circles-wrapper'>
                {
                    ellipses.map((el, index) => {
                        return (
                            <div
                                key={index}
                                className={`ellipse-row ellipses-row-${index + 1}`}
                                style={{ color: 'red', transform: `translateY(${el.offset * 2}px)` }}>
                                {
                                    el.ellipses.map((el, index) => {
                                        if (el.stroke) {
                                            el.addEventListener
                                        }
                                        return (
                                            <div
                                                key={index}
                                                onClick={el.stroke ? (e) => handleStrokeClick(e) : null}
                                                className={"circle"} // + (el.stroke ? "stroke" : "")
                                                style={{ color: 'red', transform: `translateX(${el.positionX}px)` }}>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CoverArtInteractive;