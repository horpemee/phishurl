import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./Search.scss";
// import Home from "../../pages/home/Home";
import Spinner from "../spinner/Spinner";
import validator from "validator";
// import Progress from "../progressbar/Progress";
// import Modal from "react-modal";
import Progress from "../progressbar/Progress";

const Search = ({ value, setValue, isClicked, setIsClicked }) => {
  const [loading, setLoading] = useState(false);
  const [inputDisabled, setInputDisabled] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  // const [progress, setProgress] = useState(false);
  const [showModal, setShowModal] = useState(false);
  // const [modalContent, setModalContent] = useState("");

  function handleSubmit(event) {
    if (validator.isURL(value)) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        // setIsClicked(true);
        setShowModal(true);
      //   setModalContent(`${value} is a phishing URL`);
      }, 4000);
      // window.location.href = value;
    } else {
      setErrorMessage("Invalid URL!!");
      setLoading(false);
    }

    setShowButton(showButton);

    // event.preventDefault();
  }

  return (
    <div className={"search-container"}>
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
          {errorMessage && <div className="error-msg">{errorMessage}</div>}

          {showButton && (
            <button type="submit" className="submit" onClick={handleSubmit}>
              Submit
            </button>
          )}
          {showModal && (
            <div className="modal">
              <div className="modal-content">
                <h1>Confidence Rating</h1>
                <Progress value={4} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
