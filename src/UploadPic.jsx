import React, { useState } from 'react';

function UploadPic () {
    const [image, setImage] = useState(null);

    const handleUploadImage = (event) => {
        setImage(event.target.files[0]);
    }
    
    return (
        <div>
        <input type="file" aceept="image/*" onChange={() => handleUploadImage}/>
        {image && <img src={image} alt="Uploaded" />}

    </div>
    );

}
export default UploadPic;
