import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./Search.scss";
import Spinner from "../spinner/Spinner";
import validator from "validator";
import Progress from "../progressbar/Progress";

const Search = ({ value, setValue }) => {
  const [loading, setLoading] = useState(false);
  const [inputDisabled, setInputDisabled] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [progress, setProgress] = useState(false);

  function handleSubmit(event) {
    if (validator.isURL(value)) {
      setLoading(true);
      setTimeout(() => {
        setProgress(true);
      }, 3000);
      // window.location.href = value;
    } else {
      setErrorMessage("Invalid URL!!");
      setLoading(false);
    }

    setInputDisabled(true);

    setShowButton(showButton);
    setValue(event.target.value);
  }

  return (
    <div className="search-container">
      <div className="search-bar">
        <SearchIcon className="icon" />
        <input
          type="text"
          placeholder="Type a URL"
          className="search"
          disabled={inputDisabled}
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <div className="submit">
          {loading && <Spinner />}
          {progress && <Progress />}
          {errorMessage && <div className="error-msg">{errorMessage}</div>}
          {showButton && (
            <button type="submit" className="submit" onClick={handleSubmit}>
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
