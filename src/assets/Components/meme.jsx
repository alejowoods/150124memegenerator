import { useState, useEffect } from "react";

function Meme() {
  const [allMemes, setAllMemes] = useState([]);
  const [currentMemeIndex, setCurrentMemeIndex] = useState(0);
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');

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

  const handleTopTextChange = (event) => {
    setTopText(event.target.value);
  };

  const handleBottomTextChange = (event) => {
    setBottomText(event.target.value);
  };

  if (allMemes.length === 0) return null;

  const currentMeme = allMemes[currentMemeIndex];

  return (
    <div>
    <div>
  <input 
    type="text" 
    value={topText} 
    onChange={handleTopTextChange} 
    placeholder="TOP TEXT YOUR MEME HERE!" 
    style={{
      margin: '10px 0',
      padding: '10px',
      fontSize: '16px',
      width: '100%',
    }}
  />
  <input 
    type="text" 
    value={bottomText} 
    onChange={handleBottomTextChange} 
    placeholder="BOTTOM TEXT YOUR MEME HERE!" 
    style={{
      margin: '10px 0',
      padding: '10px',
      fontSize: '16px',
      width: '100%',
    }}
  />
</div>
      <div style={{ position: 'relative' }}>
        <img src={currentMeme.url} alt="Current Meme" />
        <h2 style={{
          position: 'absolute', 
          top: '10%', 
          width: '100%', 
          textAlign: 'center',
          color: 'white',
          textTransform: 'uppercase',
          fontWeight: 'bold',
          textShadow: '2px 2px 4px black'
        }}>{topText}</h2>
        <h2 style={{
          position: 'absolute', 
          bottom: '10%', 
          width: '100%', 
          textAlign: 'center',
          color: 'white',
          textTransform: 'uppercase',
          fontWeight: 'bold',
          textShadow: '2px 2px 4px black'
        }}>{bottomText}</h2>
      </div>
      <div>
  <button style={{ marginRight: '30px' }} onClick={prevMeme}>Previous Meme</button>
  <button style={{ marginRight: '30px' }} onClick={nextMeme}>Next Meme</button>
</div>
    </div>
  );
}

export default Meme;
