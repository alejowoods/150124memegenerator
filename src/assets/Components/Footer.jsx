import React, { useEffect } from 'react';
import './../styles/footer.css';


const Footer = () => {

    return (
        <div>
            <p>Made with love by Alejandro Moreno </p>
            <div className="social-links">
                <a href="https://github.com/alejowoods" target="_blank" rel="noopener noreferrer">
                    <img src='/githublogo.png' alt='GitHub Logo' className="social-icon" />
                </a>
                <a href="https://www.linkedin.com/in/lamorenos/" target="_blank" rel="noopener noreferrer">
                    <img src='/linkedinlogo.png' alt='LinkedIn Logo' className="social-icon" />
                </a>
            </div>        
        </div>
    );
};

export default Footer;