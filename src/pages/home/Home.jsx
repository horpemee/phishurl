import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Search from "../../components/searchbar/Search";
// import Progress from "../../components/progressbar/Progress";
// import Spinner from "../../components/spinner/Spinner";

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
