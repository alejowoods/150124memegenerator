import React from 'react';
import "./../styles/carousel.css";

const Carousel = ({ images, setImage, setIsImageSelected, setSearchTerm, setImageIndex, scrollCarousel }) => {
    return (
        <div className='carousel-container'>
            <button className='carousel-arrow carousel-arrow-left' onClick={() => scrollCarousel('left')}>&#9664;</button>
            <div className="carousel">
                {images.map((img, idx) => (
                    <img
                        key={idx}
                        src={img.url}
                        alt={img.name}
                        className="thumbnail"
                        onClick={() => {
                            setImage(img.url);
                            setIsImageSelected(true);
                            setSearchTerm('');
                            setImageIndex(idx);
                        }}
                    ></img>
                ))}
            </div>
            <button className='carousel-arrow carousel-arrow-right' onClick={() => scrollCarousel('right')}>&#9654;</button>
        </div>
    );
};

export default Carousel;