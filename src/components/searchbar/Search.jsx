import React, { useState, useEffect  } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./Search.scss";
// import axios from "axios";
import Spinner from "../spinner/Spinner";
import validator from "validator";
 
import Progress from "../progressbar/Progress";
import CloseIcon from '@mui/icons-material/Close';

const Search = ({ value, setValue  }) => {

  const [inputUrl, setInputUrl] = useState([]);

  const fetchUrl = async () => {
    const response = await fetch("https://opemi.herokuapp.com/detect?url=https://example.com");
    const data = await response.json();
    console.log(data);
    setInputUrl(data);
  }

  useEffect(() => {
    fetchUrl();
  }, []);



  const [loading, setLoading] = useState(false);
  const [inputDisabled, setInputDisabled] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  // const [progress, setProgress] = useState(false);
  const [showModal, setShowModal] = useState(false);

  

 
  // const [modalContent, setModalContent] = useState("");

function handleSubmit(event) {

  event.preventDefault();
    

    if (validator.isURL(value)) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        // setIsClicked(true);
        setShowModal(true);
        // setValue('');

        // window.location.reload();

      //   setModalContent(`${value} is a phishing URL`);
      }, 2000);

     
    } else {
      setErrorMessage("Invalid URL!!");
      setTimeout(() =>{
        setErrorMessage("");
        setValue('');
      }, 2000)
      setLoading(false);

    }

    // setValue("");
    setShowButton(showButton);
 

  }

  function handleCloseModal(){
    setShowModal(false);
    setValue('');
  }

  // function handleClick(){
  //   handleCloseModal();
  //   fetchUrl();
  // }

  
  return (
    <div className={"search-container"}>
      <form className="search-bar" onSubmit={handleSubmit}    >
        <SearchIcon className="icon" />
        <input
          type="text"
          placeholder="Type a URL"
          className="search"
          disabled={inputDisabled}
          onChange={(e) => {
            setValue(e.target.value);
            setErrorMessage('');
            }}
          value={value}
        />
        <div className="submit">
          {loading && <Spinner />}
          {errorMessage && <div className="error-msg">{errorMessage}</div>}

          {showButton && (
            <button type="submit" className="submit" onClick={fetchUrl}  >
              Submit
            </button>

          ) }

          {showModal && (
            <div className="modal">
              <div className="modal-content ">
                <h2>Confidence Rating</h2>
                <Progress value={4} />
                <h3>Probability-non-phishing:{inputUrl.title}</h3>
                <h3>Probabilityphishing:{inputUrl.probability_phishing}</h3>
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
