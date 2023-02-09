import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Search from "../../components/searchbar/Search";

const Home = () => {
  const [value, setValue] = useState("");

  return (
    <div className="wrapper">
      <Navbar />
      <Search value={value} setValue={setValue} />
      {/*<Progress value={value} />*/}
    </div>
  );
};

export default Home;
