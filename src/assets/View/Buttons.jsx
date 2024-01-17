import { useState , useEffect } from "react";

function Buttons() {
  const [currentMemeIndex, setCurrentMemeIndex] = useState(0);

  const prevMeme = () => {
    setCurrentMemeIndex((oldIndex) => (oldIndex > 0 ? oldIndex - 1 : oldIndex));
  };

  const nextMeme = () => {
    setCurrentMemeIndex((oldIndex) => oldIndex + 1);
  };

  return (
    <div>
      <button onClick={prevMeme}>Previous Meme</button>
      <button onClick={nextMeme}>Next Meme</button>
    </div>
  );
}

export default Buttons;