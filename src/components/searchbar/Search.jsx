import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./Search.scss";
import Spinner from "../spinner/Spinner";
// import { RotatingLines } from "react-loader-spinner";

const Search = ({ value, setValue }) => {
  const [loading, setLoading] = useState(false);
  const [inputDisabled, setInputDisabled] = useState(false);
  const [showButton, setShowButton] = useState(true);

  function handleSubmit() {
    setLoading(true);
    setInputDisabled(true);
    setShowButton(showButton);
  }

  // function disableInput() {
  //   setInputDisabled(false);
  // }

  return (
    <>
      <div className="search-bar">
        <SearchIcon className="icon" />
        <input
          type="url"
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
