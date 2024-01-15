import React, { useState, useEffect } from "react";

function Download() {
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

  if (allMemes.length === 0) return null;

  const currentMeme = allMemes[currentMemeIndex];

  return (
    <div>
      <a href={currentMeme.url} download>
        <button>Download</button>
      </a>
    </div>
  );
}

export default Download;