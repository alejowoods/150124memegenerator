import { useState, useEffect } from "react";

function Meme() {
  const [allMemes, setAllMemes] = useState([]);
  const [currentMemeIndex, setCurrentMemeIndex] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();
      setAllMemes(data.data.memes);
    }
    fetchData();
  }, []);

  const prevMeme = () => {
    setCurrentMemeIndex((oldIndex) => (oldIndex > 0 ? oldIndex - 1 : oldIndex));
  };

  const nextMeme = () => {
    setCurrentMemeIndex((oldIndex) => oldIndex + 1);
  };

  if (allMemes.length === 0) return null;

  const currentMeme = allMemes[currentMemeIndex];

  return (
    <div>
      <img src={currentMeme.url} alt="Current Meme" />
      <button onClick={prevMeme}>Previous Meme</button>
      <button onClick={nextMeme}>Next Meme</button>
    </div>
  );
}

export default Meme;