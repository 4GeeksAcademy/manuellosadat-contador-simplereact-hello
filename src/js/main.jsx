import React from "react";
import ReactDOM from "react-dom/client";

// estilos globales
import "../styles/index.css";

// componente
import SecondsCounter from "./components/SecondsCounter";

let seconds = 0;

const root = ReactDOM.createRoot(document.getElementById("root"));

setInterval(() => {
  seconds++;

  root.render(<SecondsCounter seconds={seconds} />);
}, 1000);
