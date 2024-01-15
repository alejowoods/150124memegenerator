import React, { useState } from "react";
    
const [allMemes, setAllMemes] = useState([]);

    React.useEffect(() => {
        async function fetchData() {
          const res = await fetch("https://api.imgflip.com/");
          const data = await res.json();
          setAllMemes(data.data.memes);
        }
        fetchData();
      }, []);

      function getMemeImage() {
        var meme1 = allMemes;
        meme1 = meme1[Math.floor(Math.random() * meme1.length)];
        meme1 = meme1.url;
        return meme1;

      }
    
      const [memeImage, setmemeImage] = useState({
        topText: "",
        bottomText: "",
        image: "http://i.imgflip.com/1bij.jpg",
      });

      function getMemeImage() {
        var meme1 = allMemes;
        meme1 = meme1[Math.floor(Math.random() * meme1.length)];
        meme1 = meme1.url;
        return meme1;
      }

export default meme;