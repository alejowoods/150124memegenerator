import React, { useState, useEffect } from "react";
import OnclickMessage from './OnClickMessage';

const Meme = () => {
  const [allMemes, setAllMemes] = useState([]);
  const [memeImage, setMemeImage] = useState("");
  const [error, setError] = useState(null); 

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("https://api.imgflip.com/get_memes");
        if(!res.ok) {
          throw Error(res.statusText); // statusText is a property of the response object that contains the error message corresponding to the status code.
        }
        const data = await res.json();
        console.log(data); 
        setAllMemes(data.data.memes);
      } catch (error) {
        setError(error.message) // error.message is a property of the error object that contains the error message corresponding to the error code.
      }

    }
    fetchData();
  }, []);

  useEffect(() => {
    if (allMemes.length > 0) {
      const meme = allMemes[Math.floor(Math.random() * allMemes.length)];
      setMemeImage(meme.url);
    }
  }, [allMemes]);

  if (error) {
    return <div>Error: {error}</div> // it calls the variable error from the useEffect hook, which contains the error message corresponding to the error code.

  }

  return (
    <div>

      <OnclickMessage memeImage={memeImage} />

    </div>
  );
};

export default Meme;