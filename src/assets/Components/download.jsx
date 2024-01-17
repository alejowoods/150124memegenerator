import { useRef } from "react";
import html2canvas from "html2canvas";

import PropTypes from "prop-types";

function Download({ memeRef }) {
  const downloadRef = useRef();

  const handleDownload = async (event) => {
    event.preventDefault();
    const canvas = await html2canvas(memeRef.current);
    const imgURL = canvas.toDataURL("image/png");
    downloadRef.current.href = imgURL;
    downloadRef.current.download = "meme.png";
    downloadRef.current.click();
  };

  return (
    <>
      <a ref={downloadRef} download="meme.png">
        <button onClick={handleDownload}>Download Meme</button>
      </a>
    </>
  );
}

Download.propTypes = {
  memeRef: PropTypes.object.isRequired,
};

export default Download;
