import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./progress.scss";

const Progress = ({ value, isPhish }) => {
  return (
    <div className="progress-bar">
      <CircularProgressbar
        value={value}
        strokeWidth={5}
        text={`${value}%`}
        className={`${
          isPhish === false ? "progress-green" : "progress-red"
        }`}
      />
    </div>
  );
};

export default Progress;
