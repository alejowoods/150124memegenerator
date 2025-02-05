import React, { useEffect } from 'react';
import UploadPic from './UploadPic';

const Start = () => {
    const [showUploadPic, setShowUploadPic] = React.useState(false);

    const handleSelectImage = () => {
        setShowUploadPic(true)
    }
    return (
        <div>
            <h1>Choose an image</h1>
            <button onClick={handleSelectImage}>Select image</button>
            {showUploadPic && <UploadPic />}
        </div>
    );
};

export default Start;