import React, { useState } from "react";
import "./Readmore.css";

const Readmore = ({ text, maxLength }) => {
  const [isTruncated, setIsTruncated] = useState(true);

  const toggleTruncate = () => {
    setIsTruncated(!isTruncated);
  };

  return (
    <div className="read-more">
      <div className={`text ${isTruncated ? "truncated" : ""}`}>
        {isTruncated ? `${text.slice(0, maxLength)}...` : text}
      </div>
      <a href="#" className="toggle-btn" onClick={toggleTruncate}>
        {isTruncated ? "Read More" : "Read Less"}
      </a>
    </div>
  );
};

export default Readmore;
