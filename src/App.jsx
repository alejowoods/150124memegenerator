import './App.css'
import UploadPic from './UploadPic'
import Meme from './assets/Components/meme'; 


function App() {
  
  return (
    <>
      <div>
        <h2>MustAlejo: Meme Generator</h2>    
        </div>
        <div className="meme-image">
      </div> 
      <div>
          <Meme />
      </div>
      <div>
        <UploadPic />
      </div>
    </>
  )
}

export default App
