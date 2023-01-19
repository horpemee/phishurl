import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./Search.scss";
import { RotatingLines } from "react-loader-spinner";

const Search = ({ value, setValue }) => {
  return (
    <>
      <div className="search-wrapper">
        <div className="search-bar">
          <SearchIcon className="icon" />
          <input
            type="url"
            placeholder="Type a URL"
            className="search"
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
          <button
            className="submit"
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              RotatingLines.toggle("show");
            }}
          >
            Submit
          </button>
        </div>
      </div>
      <div className="loader">
        <RotatingLines
          strokeColor="grey"
          strokeWidth="3"
          animationDuration="0.75"
          width=""
          visible={false}
        />
      </div>
    </>
  );
};

export default Search;
