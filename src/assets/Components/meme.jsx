import React, { useState, useEffect } from "react";
import OnClickMessage from './OnClickMessage';
import UploadPic from './UploadPic';
import '../Styles/meme.css'; 


const Meme = () => {
  const [allMemes, setAllMemes] = useState([]);
  const [memeImage, setMemeImage] = useState("");
  const [error, setError] = useState(null); 
  const [uploadedImage, setUploadedImage] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("https://api.imgflip.com/get_memes");
        if(!res.ok) {
          throw Error(res.statusText); 
        }
        const data = await res.json();
        console.log(data); 
        setAllMemes(data.data.memes);
      } catch (error) {
        setError(error.message) 
      } finally {
        console.log("Petttion finished");
      }

    }
    fetchData(); 
  }, []); 

  useEffect(() => { 
    if (Array.isArray(allMemes) && allMemes.length > 0 && !uploadedImage) {
      const meme = allMemes[Math.floor(Math.random() * allMemes.length)];
      setMemeImage(meme.url); 
    }
  }, [allMemes, uploadedImage]); // necesitamos las dos dependencias para que se ejecute el useEffect cuando cambie allMemes o uploadedImage

  if (error) {
    return <div>Error: {error}</div> 

  }

  return (

    <div>
      {error && <p>{error}</p>}
      {uploadedImage ? (
        <div className="meme-image">
          <img src={uploadedImage} alt="Uploaded Meme" />
          <OnClickMessage memeImage={uploadedImage} />
        </div>
      ) : (
        Array.isArray(allMemes) && allMemes.length > 0 && (
          <div className="meme-image" >
            <OnClickMessage memeImage={memeImage} />
          </div>
        )
      )}
    </div>

  );
};

export default Meme;