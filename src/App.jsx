import React from 'react';
import Header from './assets/Components/Header';
import Meme from './assets/Components/Meme'; 
import './App.css'
import Footer from './assets/Components/Footer';




function App() {

  
  return (
    <div id="root">
        <Header />
      <div className="main-content">
        <Meme />
      </div>
      <Footer />
    </div>
  )
}

export default App
