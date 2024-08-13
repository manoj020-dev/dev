import { useEffect, useState } from "react";

function Qrgen() {
  const [text, setText] = useState("");  // Use a more descriptive name
  const [qrCodeUrl, setQrCodeUrl] = useState("");
  const size = 400;
  const backgroundColor = "ffffffff";   // Use a constant for clarity

  useEffect(() => {
    if (text.trim() !== "") { // Only update QR code if text is not empty
      const url = `http://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(text)}!&size=${size}x${size}&bgcolor=${backgroundColor}`;
      setQrCodeUrl(url);
    } else {
      setQrCodeUrl(""); // Clear QR code if text is empty
    }
  }, [text]); // Dependency array includes only `text`

  const handleClick = () => {
    setText(text.trim()); // Ensure only trimmed text is used
  };

  return (
    <div className="App">
      <h1>QR Code Generator</h1>
      <div className="gen">
        <input
          type="text"
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text to encode"
        />
        <button className="button" onClick={handleClick}>
          Generate
        </button>
        <br />
      </div>
      <div className="output-box">
        {qrCodeUrl && ( // Conditionally render the QR code image
          <img src={qrCodeUrl} alt="QR Code" />
        )}
        {qrCodeUrl && ( // Conditionally render the download link
          <a href={qrCodeUrl} download="Qrcode.png">
            <button type="button">Download</button>
          </a>
        )}
      </div>
    </div>
  );
}

export default Qrgen;
