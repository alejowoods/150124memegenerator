import React, { useState } from "react";

const OnClickMessage = ({ memeImage }) => {
    const [typeText, setTypeText] = useState(["", "", "", ""]);
    const [clickPositions, setClickPositions] = useState([]);
    const [fontColor, setFontColor] = useState("black");
    

    const handleClick = (event) => {
        if (clickPositions.length < 4) {
            const rect = event.target.getBoundingClientRect(); // getBoundingClientRect() es un método que devuelve el tamaño de un elemento y su posición relativa respecto a la ventana gráfica.
            let x = event.clientX - rect.left; 
            let y = event.clientY - rect.top;
            if (x + 200 > rect.width) x = rect.width - 200;   
            if (y + 20 > rect.height) y = rect.height - 20;
            setClickPositions([...clickPositions, { 
                x: `${x}px`, 
                y: `${y}px` 
            }]);
        }
    };


    const handleChange = (index, event) => {
        const newTypeText = [...typeText];
        newTypeText[index] = event.target.value;
        setTypeText(newTypeText);
    };

    return (
        <>
            <div>
                <button onClick={() => {setClickPositions([]); setTypeText([]);}}>Reset</button>
            </div>
            <div className="memeContainer" onClick={handleClick}>
                <img src={memeImage} alt="Meme" />
                {clickPositions.map((pos, index) => (
                    <input key={index} type="text"
                        className="text-field"
                        style={{ top: pos.y, left: pos.x }}
                        value={typeText[index]}
                        onChange={(event) => handleChange(index, event)}
                        autoFocus
                    />
                ))}
            </div>
        </>
    );
};

export default OnClickMessage;