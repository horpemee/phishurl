import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Search from "../../components/searchbar/Search";

const Home = () => {
  const [value, setValue] = useState("");
  const [progress, setProgress] = useState(false);
  return (
    <div className={`wrapper ${progress ? "backdrop-blur" : ""}`}>
      <Navbar />
      <Search value={value} setValue={setValue} />
      {/*<Progress value={value} />*/}
    </div>
  );
};

export default Home;
