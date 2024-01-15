import { useState, useEffect } from 'react';

const MemeFactory = () => {
  const [memes, setMemes] = useState([]);
  const [selectedMeme, setSelectedMeme] = useState(null);

  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then(response => response.json())
      .then(data => setMemes(data.data.memes));
  }, []);

  const handleClick = (meme) => {
    setSelectedMeme(meme);
  };
};

export default meme;