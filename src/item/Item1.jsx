import React, { useState, useRef, useEffect } from "react";

const Item1 = () => {
    const [text, setText] = useState("Viraj");
    const canvasRef = useRef(null);
    const textInputRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        // Base64 encoded image
        const backgroundImage = new Image();

        backgroundImage.src =

        // Once the image has loaded, draw it on the canvas
        backgroundImage.onload = () => {
            // Scale the image to fit the canvas
            ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
            drawText();
        };

        // Function to draw text on the canvas
        const drawText = () => {
            ctx.fillStyle = "white";
            ctx.font = "48px Arial";
            ctx.textAlign = "center";
            ctx.fillText(text, canvas.width / 2, canvas.height / 2);
        };

        // Event listener for text input changes
        const handleInputChange = () => {
            setText(textInputRef.current.value);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
            drawText();
        };

        textInputRef.current.addEventListener("input", handleInputChange);

        
    }, [text]);

    const handleDownload = () => {
        const canvas = canvasRef.current;
        const downloadLink = document.createElement("a");
        downloadLink.setAttribute("download", "canvas_image.png");
        downloadLink.setAttribute(
            "href",
            canvas.toDataURL("image/png").replace("image/png", "image/octet-stream")
        );
        downloadLink.click();
    };

    return (
        <div>
            <canvas ref={canvasRef} width={1080} height={1920}></canvas>
            <br />
            <label htmlFor="textInput">Enter Text:</label>
            <input
                ref={textInputRef}
                type="text"
                id="textInput"
                defaultValue={text}
            />
            <button onClick={handleDownload}>Download Image</button>
        </div>
    );
};

export default Item1;