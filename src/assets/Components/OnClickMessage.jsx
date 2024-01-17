import { useState } from "react";

const onClickMessage = ({ memeImage }) => {
    const [typeText, setTypeText] = useState(["", "", "", ""]);
    const [clickPositions, setClickPositions] = useState([]);
    

    const handleClick = (event) => {
        if (clickPositions.length < 4) {
            const rect = event.target.getBoundingClientRect();
            setClickPositions([...clickPositions, { 
                x: `${event.clientX - rect.left}px`, 
                y: `${event.clientY - rect.top}px` 
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
                <button onClick={() => setClickPositions([])}>Reset</button>
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

export default onClickMessage;