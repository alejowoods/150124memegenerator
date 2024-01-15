import { useState } from 'react'
import './App.css'
import UploadPic from './UploadPic'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h2>MustAlejo: Meme Generator</h2>    
         
    </div>
    <div className="meme-image">
      <img src="https://i.imgflip.com/1bij.jpg" alt="Meme" />
      <input type="text" className="meme-text" />
      <input type="text" className="meme-text-bottom" />
    </div> 
    <UploadPic />
    </>
  )
}

export default App
