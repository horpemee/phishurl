import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./progress.scss";

const Progress = ({ value }) => {
  return (
    <div className="progress-bar">
      <CircularProgressbar
        value={value}
        strokeWidth={5}
        text={`${value}%`}
        className={`${
          value <= 30
            ? "progress-red"
            : value <= 69
            ? "progress-yellow"
            : value >= 70 && "progress-green"
        }`}
      />
    </div>
  );
};

export default Progress;
