/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';

const ProflightLogos = (props) => {

    const [selectedIndex, setSelectedIndex] = useState(0);


    const logos = [
        {
            id: 1,
            src: '../assets/Logo.png',
            alt: 'Logo 1'
        },
        {
            id: 2,
            src: '../assets/Logo.png',
            alt: 'Logo 2'
        },
        {
            id: 3,
            src: '../assets/Logo.png',
            alt: 'Logo 3'
        },
        {
            id: 4,
            src: '../assets/Logo.png',
            alt: 'Logo 4'
        },

    ];

    const handleNext = (event) => {
        event.preventDefault();
        let nextIndex = selectedIndex + 1;
        if (nextIndex === logos.length) {
            nextIndex = 0;
        }
        setSelectedIndex(nextIndex);
    }


    const handlePrevious = (event) => {
        event.preventDefault();
        let prevIndex = selectedIndex - 1;
        if (prevIndex < 0) {
            prevIndex = logos.length - 1;
        }
        setSelectedIndex(prevIndex);
    }

    return (
        <div className="carousel-container">
        <div className="previous-arrow-container">
            <input type='image' src="../assets/Arrow.png" onClick={handlePrevious}/>
        </div>
        <div className="next-arrow-container">
            <input type='image' src="../assets/ArrowN.png" onClick={handleNext}/>
        </div>
        <div className="carousel-content">
            {logos.map((logo, index,) => (
                <img key={logo.id} src={logo.src} alt={logo.alt} className={index === selectedIndex ? 'selected' : 'fade-out'} />
            ))}
        </div>
    </div>

    );
}

export default ProflightLogos;
