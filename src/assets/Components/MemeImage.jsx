import React from 'react';
import './../styles/memeImage.css';


const MemeImage = ({image, 
                    texts, 
                    handleDragOver, 
                    handleDrop, 
                    handleDragStart, 
                    handleTextChange, 
                    deleteText, 
                    hoveredTextId, 
                    setHoveredTextId, 
                    inputRefs 
                }) => {
                    return (
        <div className='meme-container' 
            style={{position: "relative"}}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
        >
            {image && <img src={image} alt="meme" className="meme-image" />}

            {texts.map((text) => (
                <div key={text.id} 
                    className='text-container'
                    style={{                
                        left: text.x,
                        top: text.y,
                    }}
                    onMouseEnter={() => setHoveredTextId(text.id)}
                    onMouseLeave={() => setHoveredTextId(null)}
                    draggable
                    onDragStart={(event) => handleDragStart(event, text.id)}    
                >
                    <input
                        className="draggable-text"
                        ref={inputRefs.current[text.id]}
                        type='text'
                        value={text.text}
                        onChange={(event) => handleTextChange(text.id, event.target.value)}
                        style={{ width: `${text.text.length + 1}ch` }}
                    ></input>
                    {hoveredTextId === text.id && (
                        <button className="delete-text" onClick={() => deleteText(text.id)}>Del</button>
                    )}
                </div>
            ))}
        </div>
                    );
};

export default MemeImage;