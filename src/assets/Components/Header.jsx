import React from 'react';
import './../styles/header.css';

const Header = () => {
    return (
        <header className="header-container">
            <h1 className="header-title">AleMore: Meme Generator</h1>
            <h3 className="header-subtitle">Choose an image</h3>
        </header>
    );
};

export default Header;