import React, { useState, useEffect } from "react";

const Meme = () => {
  const [allMemes, setAllMemes] = useState([]);
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://api.imgflip.com");
      const data = await res.json();
      setAllMemes(data.data.memes);
    }
    fetchData();
  }, []);

  function getMemeImage() {
    if (allMemes.length === 0) return "";
    const meme = allMemes[Math.floor(Math.random() * allMemes.length)];
    return meme.url;
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Top Text"
        value={topText}
        onChange={(e) => setTopText(e.target.value)}
      />
      <input
        type="text"
        placeholder="Bottom Text"
        value={bottomText}
        onChange={(e) => setBottomText(e.target.value)}
      />
      <div style={{ position: "relative", textAlign: "center" }}>
        <img src={getMemeImage()} alt="Random Meme" />
        <h2 style={{ position: "absolute", top: "10px", width: "100%" }}>
          {topText}
        </h2>
        <h2 style={{ position: "absolute", bottom: "10px", width: "100%" }}>
          {bottomText}
        </h2>
      </div>
    </div>
  );
};

export default Meme;