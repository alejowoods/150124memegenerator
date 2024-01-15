import { useState, useEffect } from 'react';

const meme = () => {
  const [memes, setMemes] = useState([]);
  const [currentMeme, setCurrentMeme] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then(response => response.json())
      .then(data => {
        setMemes(data.data.memes);
        setCurrentMeme(data.data.memes[0]);
      })
      .catch(error => setError(error.toString()));
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {currentMeme && (
        <div>
          <h2>{currentMeme.name}</h2>
          <img src={currentMeme.url} alt={currentMeme.name} />
        </div>
      )}
    </div>
  );
};

export default meme;