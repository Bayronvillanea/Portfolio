import React, { useState, useEffect } from 'react'
import '../Estilos/Main.css'

export default function Main() {

const [currentColorIndex, setCurrentColorIndex] = useState(0);
const colors = ["#FF4C4C", "#45A7D5", "#31DC03", "#8B14F4", "#FF7E19", "#A25B01"];
const h2Style = {
transition: "color 0.9s ease",
color: colors[currentColorIndex]
};

useEffect(() => {
const intervalId = setInterval(() => {
setCurrentColorIndex(currentColorIndex => (currentColorIndex + 1) % colors.length);
}, 1000);
return () => clearInterval(intervalId);
}, [colors.length]);

return (
<div>
<h1 className="main-h1">BAYRON VILLANEA</h1>
<h2 className="main-h2" style={h2Style}>FRONT-END</h2>
</div>
)
}