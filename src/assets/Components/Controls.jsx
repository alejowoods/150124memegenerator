import React, { useState } from 'react';
import './../styles/header.css';

const Controls = ({ changeImage, handleFileChange, filename, handleFileRemove, searchTerm, setSearchTerm }) => {
    return (
<div className="controls-container">
            <button onClick={() => changeImage('left')}>Next meme to the left</button>
            <button onClick={() => changeImage('right')}>Next meme to the Right</button>
            <div>
                <button onClick={() => document.getElementById('fileInput').click()}>
                    {filename ? "Change image" : "Upload image"}
                </button>
                <input 
                    id='fileInput'
                    type='file' 
                    accept='image/*' 
                    onChange={handleFileChange}
                    style={{display: 'none'}}
                ></input>
                {filename && (
                    <div className='file-info'>
                        <p>{filename}</p>
                        <button onClick={handleFileRemove}>Delete</button>
                    </div>
                )}
            </div>
            <input 
                type='text' 
                placeholder='Look up for your meme with a word' 
                value={searchTerm} 
                onChange={(event) => setSearchTerm(event.target.value)}>
            </input>
        </div>
    )
};

export default Controls;