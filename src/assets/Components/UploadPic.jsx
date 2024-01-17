import { useState } from 'react';

function UploadPic() {
    const [image, setImage] = useState(null);

    const handleUploadImage = (event) => {
        const imageUrl = URL.createObjectURL(event.target.files[0]); // URL.createObjectURL() creates a DOMString containing a URL representing the object given in the parameter
        console.log(imageUrl); 
        setImage(imageUrl);
    }

    return (
        <div>
            <div>
                <input type="file" accept="image/*" onChange={handleUploadImage}/> {/* // image/* means that the input accepts all image types */}
            </div>
            <div>
            {image && <img src={image} alt="Uploaded" style={{marginTop: '20px'}}/>}
            </div>
        </div>
    )
}

export default UploadPic;