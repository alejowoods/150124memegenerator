import React, { useState } from 'react';

function UploadPic({ onImageUpload }) {
    const [image, setImage] = useState('');

    const handleUploadImage = (event) => {
        const imageUrl = URL.createObjectURL(event.target.files[0]); // URL.createObjectURL() creates a DOMString containing a URL representing the object given in the parameter
        console.log(imageUrl); 
        setImage(imageUrl);
        onImageUpload(imageUrl);
    }

    return (
        <div>
            <div>
                <input type="file" accept="image/*" onChange={handleUploadImage}/>
            </div>
        </div>
    )
};

export default UploadPic;