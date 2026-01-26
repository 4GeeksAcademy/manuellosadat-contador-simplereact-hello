import React from "react";

const SecondsCounter = ({ seconds }) => {
  const secondsString = seconds.toString().padStart(6, "0");

  return (
    <div className="container-contador">
      <div className="contador">
        <div className="icon">
          <span className="material-symbols-outlined">
            schedule
          </span>
        </div>

        {secondsString.split("").map((digit, index) => (
          <div className="num" key={index}>
            <p>{digit}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecondsCounter;
 