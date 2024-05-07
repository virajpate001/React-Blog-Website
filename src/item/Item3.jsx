import React, { useEffect, useRef } from 'react';

const Item3 = () => {
  const canvasRef = useRef(null);
  const textInputRef = useRef(null);
  const sectextInputRef = useRef(null);
  const fivetextInputRef = useRef(null);
  const dateInputRef = useRef(null);
  const venueInputRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let text = "Mr and Mrs Kumar";
    let secText = "Rahul";
    let fiveText = "Kajal";
    let dateText = "MAY 24 | 2030";
    let venueText = "Diveagar, Maharashtra, India";

    // Base64 encoded image
    const backgroundImage = new Image();

backgroundImage.src =


    // Once the image has loaded, draw it on the canvas
    backgroundImage.onload = function () {
      // Scale the image to fit the canvas
      ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
      drawText();
    };

    // Function to draw text on the canvas
    function drawText() {
      ctx.fillStyle = "#00284A";
      ctx.font = "600 75px Tangerine";
      ctx.textAlign = "center";
      ctx.fillText(text, 620, 460);

      ctx.font = "800 120px Mr Dafoe";
      ctx.fillText(secText, 620, 730);
      ctx.fillText(fiveText, 620, 1000);

      ctx.fillStyle = "#993501"
      ctx.fillText("&", 620, 850);

      ctx.font = "600 26px Arial";
      ctx.textAlign = "center";
      ctx.fillStyle = "#993501"
      ctx.fillText("REQUEST THE PLEASURE OF YOUR PRESENCE TO", 620, 530);
      ctx.fillText("GRACE THE WEDDING OF", 620, 570);

      ctx.font = "600 34px Arial";
      ctx.fillStyle = "#00284A"
      ctx.fillText("Venue:", 620, 1350);
      ctx.fillText(venueText, 620, 1400);

      ctx.font = "Bold 60px serif";
      ctx.fillStyle = "#00284A"
      ctx.fillText(dateText, 620, 1200);
    }

    // Event listener for text input changes
    const handleInputChange = () => {
      let textValue = textInputRef.current.value;
      let secTextValue = sectextInputRef.current.value;
      let fiveTextValue = fivetextInputRef.current.value;
      let dateTextValue = dateInputRef.current.value;
      let venueTextValue = venueInputRef.current.value;

      if (textInputRef.current) {
        text = textValue;
      }
      if (sectextInputRef.current) {
        secText = secTextValue;
      }
      if (fivetextInputRef.current) {
        fiveText = fiveTextValue;
      }
      if (dateInputRef.current) {
        dateText = dateTextValue;
      }
      if (venueInputRef.current) {
        venueText = venueTextValue;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
      drawText();
    };

    // Event listener for download button click
    const handleDownload = () => {
      const downloadLink = document.createElement("a");
      downloadLink.setAttribute("download", "invitation.png");
      downloadLink.setAttribute("href", canvas.toDataURL("image/png").replace("image/png", "image/octet-stream"));
      downloadLink.click();
    };

    [textInputRef, sectextInputRef, fivetextInputRef, dateInputRef, venueInputRef].forEach((inputRef) => {
      inputRef.current.addEventListener("input", handleInputChange);
    });

    const downloadBtn = document.getElementById("downloadBtn");
    downloadBtn.addEventListener("click", handleDownload);

    return () => {
      [textInputRef, sectextInputRef, fivetextInputRef, dateInputRef, venueInputRef].forEach((inputRef) => {
        inputRef.current.removeEventListener("input", handleInputChange);
      });
      downloadBtn.removeEventListener("click", handleDownload);
    };
  }, []);

  return (
    <div className="mainsec">
      <canvas ref={canvasRef} id="myCanvas" width="1200" height="1599"></canvas>
      <br />
      <label htmlFor="textInput" className="tan">First Enter Text:</label>
      <input ref={textInputRef} type="text" id="textInput" defaultValue="Mr and Mrs Kumar" />

      <label htmlFor="sectextInput" className="f2">Second Enter Text:</label>
      <input ref={sectextInputRef} type="text" id="sectextInput" defaultValue="Rahul" />

      <label htmlFor="fivetextInput">Five Enter Text:</label>
      <input ref={fivetextInputRef} type="text" id="fivetextInput" defaultValue="Kajal" />

      <label htmlFor="dateInput">Date Text:</label>
      <input ref={dateInputRef} type="text" id="dateInput" defaultValue="MAY 24 | 2030" />

      <label htmlFor="venueInput">Venue:</label>
      <input ref={venueInputRef} type="text" id="venueInput" defaultValue="Diveagar, Maharashtra, India" />

      <button id="downloadBtn">Download Image</button>
    </div>
  );
};

export default Item3;