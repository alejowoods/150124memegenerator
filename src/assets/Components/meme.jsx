import React, { useState, useEffect } from 'react';

const Meme = () => {
    const [image, setImage] = useState('');

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
            setImage(reader.result);
        };
        reader.readAsDataURL(file);
    };

    useEffect(() => {
        const loadImage = async () => {
            try {
                const response = await fetch('https://api.imgflip.com/get_memes');
                const data = await response.json();
                setImage(data.data.memes[0].url);
                console.log(data.data.memes[0].url);
            } catch (error) {
                console.log(error)
            } finally {
                console.log('promised ended') // add setLoading(false);
            }
        };
        loadImage();
    }, []);

    return (
        <>
        <div>
            <input type='file' accept='image/*' onChange={handleFileChange}></input>
            {image && <img src={image} alt="meme" />}
        </div>
        </>
    );
};

export default Meme;