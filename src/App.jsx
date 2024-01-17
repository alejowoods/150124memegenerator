import './App.css'
import UploadPic from './UploadPic'
import Meme from './assets/Components/Meme';  
import Download from './assets/Components/Download';

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
      <div>
        <Download />
      </div>
    </>
  )
}

export default App
