import React, { useState, useEffect, useRef } from 'react';
import Controls from './Controls';
import Tools from './Tools';
import MemeImage from './MemeImage';
import Carousel from './Carousel';
import './../styles/meme.css';


const Meme = () => {
    const [image, setImage] = useState('');
    const [imageIndex, setImageIndex] = useState(0);
    const [images, setImages] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [isImageSelected, setIsImageSelected] = useState(false);
    const [filename, setFileName] = useState('');
    const [texts, setTexts] = useState([]);
    const [hoveredTextId, setHoveredTextId] = useState(null);
    const inputRefs = useRef([]);



    const handleFileChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
            setImage(reader.result);
            setIsImageSelected(true);
            setFileName(file.name);
            console.log(setFileName);
        };
        reader.readAsDataURL(file);
    };

    const handleFileRemove = () => {
        setImage('');
        setIsImageSelected(false);
        setFileName('');
    };

    useEffect(() => {
        const loadImages = async () => {
            try {
                const response = await fetch('https://api.imgflip.com/get_memes');
                const data = await response.json();
                let filteredImages = data.data.memes;
                
                if (searchTerm) {
                    filteredImages = filteredImages.filter((img) =>
                        img.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
                    );
                }
                setImages(filteredImages);

                if (!isImageSelected && filteredImages.length > 0) {
                    const randomIndex = Math.floor(Math.random() * filteredImages.length);
                    setImage(filteredImages[randomIndex].url || '');
                    setImageIndex(randomIndex);
                } 
            } catch (error) {
                console.log(error)
            } finally {
                console.log('promised ended') 
            }
        };

        loadImages();   
        
    }, [searchTerm]);
    
    const changeImage =  (direction) => {
        setImageIndex((prevIndex) => {
            const newIndex = 
                direction === 'left'
                        ?  (prevIndex -1 + images.length) % images.length
                        :  (prevIndex +1) % images.length;

            setImage(images[newIndex]?.url || '');
            return newIndex;
        })
    };

    const scrollCarousel = (direction) => {
        const carousel = document.querySelector('.carousel');
        if(carousel) {
            const scrollAmount = 200;
            carousel.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            })
        };
    };



    const handleDragStart = (event, id) => {
        event.dataTransfer.setData("text/plain", id.toString());
        console.log("Draggin by id", id);
    };

    const handleDrop = (event) => {
        event.preventDefault(); 
        const id = event.dataTransfer.getData("text/plain");
        if (!id) return; 

        const memeContainer = event.currentTarget.getBoundingClientRect(); 
        let newX = event.clientX - memeContainer.left; 
        let newY = event.clientY - memeContainer.top;

        newX = Math.max(0, Math.min(newX, memeContainer.width - 50)); 
        newY = Math.max(0, Math.min(newY, memeContainer.height - 20));
        
        setTexts((prevTexts) => 
            prevTexts.map((t) =>
                t.id === Number(id) ? {...t, x: newX, y: newY} : t 
            )
        );
        
        console.log(`Text ${id} moved to x: ${newX}, y: ${newY}`);
    };

    const handleTextChange = (id, newText) => { 
        setTexts((prevTexts) => 
            prevTexts.map((t) => (t.id === id ? {...t, text: newText} : t))
        );        
    };

    const handleDragOver = (event) => {
        event.preventDefault(); 
    };
    

    const deleteText = (id) => {
        setTexts((prevTexts) => prevTexts.filter((text) => text.id !== id));
    };
    
    return (
        <>
        <div className='content-container'>
            <Controls changeImage={changeImage}
                handleFileChange={handleFileChange}
                filename={filename}
                handleFileRemove={handleFileRemove}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
            />
            <Tools 
                texts={texts}
                setTexts={setTexts}
            />
            <MemeImage 
                image={image}
                texts={texts}
                handleDragOver={handleDragOver}
                handleDrop={handleDrop}
                handleDragStart={handleDragStart}
                handleTextChange={handleTextChange}
                deleteText={deleteText}
                hoveredTextId={hoveredTextId}
                setHoveredTextId={setHoveredTextId}
                inputRefs={inputRefs}
            />
            < Carousel 
                images={images}
                setImage={setImage}
                setIsImageSelected={setIsImageSelected}
                setSearchTerm={setSearchTerm}
                setImageIndex={setImageIndex}
                scrollCarousel={scrollCarousel}
            />
            </div>
        </>
    );
};

export default Meme;