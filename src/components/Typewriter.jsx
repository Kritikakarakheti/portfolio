import React, { useState, useEffect } from 'react';

const Typewriter = ({ textArray, speed, textColor, backgroundColor }) => {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');

    useEffect(() => {
        const currentTextString = textArray[currentTextIndex];
        let currentIndex = 0;

        const typing = setInterval(() => {
            if (currentIndex < currentTextString.length) {
                setCurrentText(currentTextString.slice(0, currentIndex + 1));
                currentIndex++;
            } else {
                // Wait a bit before erasing the text
                setTimeout(() => {
                    eraseText();
                }, 500); // Adjust the delay here
            }
        }, speed); // Adjust the speed here

        const eraseText = () => {
            clearInterval(typing);
            const erasing = setInterval(() => {
                if (currentIndex > 0) {
                    setCurrentText(currentTextString.slice(0, currentIndex - 1));
                    currentIndex--;
                } else {
                    // Move to the next text
                    clearInterval(erasing);
                    setCurrentTextIndex((currentTextIndex + 1) % textArray.length);
                }
            }, speed); // Adjust the speed here
        };

        return () => clearInterval(typing);
    }, [textArray, currentTextIndex, speed]);

    return (
        <div className='h-[30px] mt-2 mb-6' style={{ color: textColor, backgroundColor }}>
            <h2 className='w-full text-2xl'>
                {currentText}
            </h2>
        </div>
    );
};

export default Typewriter;
