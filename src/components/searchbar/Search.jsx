import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./Search.scss";
import Spinner from "../spinner/Spinner";
import validator from "validator";
import Progress from "../progressbar/Progress";
import CloseIcon from "@mui/icons-material/Close";

const Search = () => {

  const [url, setUrl] = useState("")
  const [data, setData] = useState(null);

  const [loading, setLoading] = useState(false);
  const [inputDisabled, setInputDisabled] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  // const [progress, setProgress] = useState(false);
  const [showModal, setShowModal] = useState(false);


  const fetchUrl = async () => {

    setLoading(true);
    try{
      const response  = await fetch(`http://127.0.0.1:5000/detect?url=${url}`);

      setLoading(false)

      if(response.status === 400){
        setErrorMessage("Invalid url, check and try again!")
        setUrl("")

      }else{

        const data  =  await response.json();
        console.log(data);
        setData(data);
        setShowModal(true)
      
      }
     

      
    } catch (error){
       console.error('Error:', error)
       setErrorMessage("Invalid url, check and try again!")
       setLoading(false)
    }
   
    

    


  };


  // const [modalContent, setModalContent] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

      fetchUrl();
   
    // setValue("");
    setShowButton(showButton);
  }

  function handleCloseModal() {
    setShowModal(false);
    setUrl("");
  }

  return (
    <div className={"search-container"}>
      <form className="search-bar" onSubmit={handleSubmit}>
        <SearchIcon className="icon" />
        <input
          type="text"
          placeholder="Type a URL"
          className="search"
          disabled={inputDisabled}
          value={url}

          onChange={(e) => {
            setUrl(e.target.value);
            setErrorMessage("");
          }}
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
              <div className="modal-content ">
                <h2>Confidence Rating</h2>
                <Progress value={data?.probability_phishing > data?.probability_non_phishing ? data?.probability_phishing : data?.probability_non_phishing } isPhish={data?.probability_phishing > data?.probability_non_phishing} /><br/>
                <h2>Phishing: {data?.probability_phishing}%</h2>
                <h2>Non-phishing: {data?.probability_non_phishing}%</h2>


                <CloseIcon className="absolute" onClick={handleCloseModal} />
              </div>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default Search;
