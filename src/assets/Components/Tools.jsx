import React, { useState, useEffect, useRef } from 'react';
import './../styles/tools.css';
import html2canvas from 'html2canvas';

const Tools = ({ texts, setTexts }) => {
    const inputRefs = useRef([]);   
    
    const downloadMeme = () => {

        const memeContainer = document.querySelector('.meme-container');
        html2canvas(memeContainer, {useCORS: true}).then((canvas) => {
            const link = document.createElement('a');
            link.href = canvas.toDataURL('image/png');
            link.download = 'meme.png';
            link.click();
        })
    };

        const addText = () => {
            const newText = {
                id: Date.now(),
                x: 50,
                y: 50,
                text: 'Write something funny'
            };
            inputRefs.current[newText.id] = React.createRef();
            setTexts([...texts, newText])
            console.log("New text:", newText);
        };

        useEffect(() => {
            if (texts.length > 0) {
                const lastText = texts[texts.length - 1];
                if (inputRefs.current[lastText.id] && inputRefs.current[lastText.id].current) {
                    inputRefs.current[lastText.id].current.focus();
                }
            }
        }, [texts, inputRefs]);

        return (
        <div className='tools-container'>
            <div className='tools'>customize your meme.</div>
            <button onClick={addText}>Add text</button>
            <button onClick={downloadMeme}>Download Meme</button>
        </div>
        );

};

export default Tools;