import React, { useState, useEffect } from 'react';
import Start from './assets/Components/start';
import UploadPic from './assets/Components/UploadPic';
import Meme from './assets/Components/Meme'; 
import './App.css'


function App() {
  const [uploadedImage, setUploadedImage] = useState(null);
  
  return (
    <>
      <div>
        <h2>AleMore: Meme Generator</h2>    
      </div>
      <div>
          <Start />
          <Meme />
      </div>
      <div>
        <UploadPic />
      </div>
    </>
  )
}

export default App
