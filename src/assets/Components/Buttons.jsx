import React, { useState, useEffect } from 'react';
import Meme from "./Meme";

const Buttons = () => {
  const [allMemes, setAllMemes] = useState([]);
  const [currentMemeIndex, setCurrentMemeIndex] = useState(0);

  const nextMeme = () => {
    setCurrentMemeIndex((prevIndex) => (prevIndex + 1) % allMemes.length);
  };

  const prevMeme = () => {
    setCurrentMemeIndex((prevIndex) =>
      prevIndex === 0 ? allMemes.length - 1 : prevIndex - 1
    );
  };

  if (allMemes.length === 0) return null;

  const currentMeme = allMemes[currentMemeIndex];

  return (
    <div>
      <Meme meme={currentMeme} />
      <button onClick={prevMeme}>Previous Meme</button>
      <button onClick={nextMeme}>MORE!</button>
    </div>
  );
};

export default Buttons;