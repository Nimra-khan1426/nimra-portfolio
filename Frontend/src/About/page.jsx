import React from "react";
import ReactDOM from "react-dom/client";
import About from "./src/About/About"; // tumhara About component ka path
import Certificates from "./Certificates";

const Page = () => {
  return (
    <div>
      <About />
      <Certificates />
    </div>
  );
};

// React 18 style render
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Page />
  </React.StrictMode>
);