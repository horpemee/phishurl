import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./Search.scss";
import Spinner from "../spinner/Spinner";
// import { RotatingLines } from "react-loader-spinner";

const Search = ({ value, setValue }) => {
  const [loading, setLoading] = useState(false);
  const [inputDisabled, setInputDisabled] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const [valid, setValid] = useState(true);
  // const [errorMessage, setErrorMessage] = useState("");

  // function validate(value) {
  //   const urlRegex =
  //     /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i;

  //   if (urlRegex.test(value)) {
  //     setValid(true);
  //   } else {
  //     setValid(false);
  //   }
  // }

  function handleSubmit(event) {
    setInputDisabled(true);
    setLoading(true);

    setShowButton(showButton);
    // validate(event.target.value);
    setValue(event.target.value);

    // if (!event.target.value) {
    //   setErrorMessage("Input field is required!") && setLoading(false);
    // } else {
    // }
  }

  return (
    <>
      <div className="search-bar">
        <SearchIcon className="icon" />

        <input
          type="url"
          pattern="
          https://.+"
          required
          title="Requires https://"
          placeholder="Type a URL"
          className="search"
          disabled={inputDisabled}
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />

        <div className="submit">
          {loading && <Spinner />}
          {showButton && (
            <button type="submit" className="submit" onClick={handleSubmit}>
              Submit
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Search;
