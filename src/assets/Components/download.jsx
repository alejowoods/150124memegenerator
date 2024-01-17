/* import { useState, useRef } from "react";
import html2canvas from "html2canvas";

function Download() {
  const [allMemes, setAllMemes] = useState([]);
  const [currentMemeIndex, setCurrentMemeIndex] = useState(0);
  const memeRef = useRef();

  if (allMemes.length === 0) return null;

  const currentMeme = allMemes[currentMemeIndex];

  const downloadMeme = () => {
    html2canvas(memeRef.current).then((canvas) => {
      const link = document.createElement("a");
      link.download = "meme.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    });
  };  

  return (
    <div>
      <div ref={memeRef}>
        <img src={currentMeme.url} alt="Current Meme" />
      </div>
      <button onClick={downloadMeme}>Download Meme</button>
    </div>
  );
  
}

export default Download; */