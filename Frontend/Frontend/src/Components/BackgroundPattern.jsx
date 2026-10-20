import React from "react";
import "./BackgroundPattern.css";

const BackgroundPattern = ({ children }) => {
  return <div className="pattern-wrapper">{children}</div>;
};

export default BackgroundPattern;