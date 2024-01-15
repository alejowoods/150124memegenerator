import React, { useState, useEffect } from "react";

const Meme = () => {
  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();
      setAllMemes(data.data.memes);
    }
    fetchData();
  }, []);

  function getMemeImage() {
    if (allMemes.length === 0) return ""; // return early if no memes have been fetched
    const meme = allMemes[Math.floor(Math.random() * allMemes.length)];
    return meme.url;
  }

  return (
    <div>
      <img src={getMemeImage()} alt="Random Meme" />
    </div>
  );
};

export default Meme;