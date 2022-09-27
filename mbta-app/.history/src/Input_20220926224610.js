import "./index.css";
import Axios from "axios";
import React from "react";
import { useEffect, useState } from "react";

/*

  My name is Victor Nite. Thank you for allowing me the opportunity to build this app.
  Although i was required to just complete the steps on the instruction, I went ahead to implement 
  some additional functionalities to enhance the the user experience of the app. Here is what i added.

  1. ** Validation Checks ** 
  Since the name of the stops returned from the API are case sensitive and a user might not know that, I
  implemented validation check to inform the user that the first letter of each word must be case sensitive.
  I also implemented another validation to the check if the stations are not entered correctly.
  
  2. ** List the stations ** 
  I also thought a first time user might not know what to search for or how to combine
  the right stations to find a train. So i displayed a list of the stations to aide first time users.

  3. ** Interactive UI **
  I implemented an interactive UI with the official MBTA logo and their style guidelines. I also displayed 
  instructions on how to use the app on the UI


  ** ISSUES I HAD **
  I was able to attempt all the steps however, i couldn't make progess with Step 2 simply because all the objects
  with the MBTA trains all returned 2 stops so there was nothing to compare them with.


  I added some comment alongside some of the code for better understanding on my thought process.
  
*/

function Input() {
  const [responseData, setResponseData] = useState([]);
  const [start, setStart] = useState("");
  const [destination, setDestination] = useState("");
  const [foundTrains, setFoundTrains] = useState("");
  const [errorText, setErrorText] = useState("");
  const [notFound, setNotFound] = useState("");

  //Makes the API call for Step 1 whenever the page loads.
  useEffect(() => {
    getData();
  }, []);

  //Checks on when there is no input.
  useEffect(() => {
    if (start === "" && destination === "") {
      setNotFound("");
      setErrorText("");
      setFoundTrains("");
    }
  }, [start, destination]);

  //Checks for inputs with the wrong answer.
  useEffect(() => {
    if (notFound !== "") {
      setFoundTrains("");
    }else if (foundTrains !){

    }

  }, [notFound]);

  const handleStartChange = (event) => {
    const word = event.target.value;

    //Checks for validation to make sure first letter is uppercase. (New Feature)
    if (word.charAt(0) === word.charAt(0).toLowerCase()) {
      setErrorText(
        "*First letter must be Uppercase! Please delete and type again"
      );
    } else if (word.charAt(0) === word.charAt(0).toUpperCase()) {
      setErrorText("");
    }
    setStart(word);
  };

  const handleDestinationChange = (event) => {
    const word = event.target.value;

    //Checks for validation to make sure first letter is uppercase. (New Feature)
    if (word.charAt(0) === word.charAt(0).toLowerCase()) {
      setErrorText(
        "*First letter must be Uppercase! Please delete and type again"
      );
    } else if (word.charAt(0) === word.charAt(0).toUpperCase()) {
      setErrorText("");
    }
    setDestination(word);
  };

  const FindTrains = () => {
    const findTrains = responseData.filter((train) => {
      return (
        train.attributes.direction_destinations.includes(start) &&
        train.attributes.direction_destinations.includes(destination)
      );
    });

    //Checks for when the search returns no data, updates the state to display a message.
    if (findTrains.length > 0) {
      const found = findTrains
        .map((train) => train.attributes.long_name)
        .join("line, ");
      setFoundTrains(found);
    } else {
      setNotFound(
        "*No train was found! Please clear all inputs and search again."
      );
    }
  };

  const getData = () => {
    /*
        Fetch the API. Using the second API link because it returns a more 
        filtered list unlike the first one.
    */
    Axios.get("https://api-v3.mbta.com/routes?filter[type]=0,1").then(
      (response) => {
        //Put response in a variable
        const res = response.data;
        //console.log(res.data);

        //Map through the res variable to log to the name of trains to the console as required for Step 1.
        res.data.map((val) => console.log(val.attributes.long_name));

        //Set response to the state
        setResponseData(res.data);
      }
    );
  };

  return (
    <div className="">
      <div className="mbta-input-container">
        <h4 className="label-title">Enter start station</h4>
        <input
          className="input-bar"
          type="text"
          value={start}
          placeholder="Start"
          onChange={(e) => handleStartChange(e)}
        />
        <h4 className="label-title">Enter destination station</h4>
        <input
          className="input-bar"
          type="text"
          value={destination}
          placeholder="Destination"
          onChange={(e) => handleDestinationChange(e)}
        />
        <h4 className="label-title train-title">Train name:</h4>
        <h2 id="train-name">{foundTrains}</h2>
        <p id="train-name-not-found">{notFound}</p>

        <button onClick={FindTrains} className="find-train-button">
          <h3 className="button-text">Find Trains</h3>
        </button>

        <span id="error-message">{errorText}</span>
      </div>
    </div>
  );
}

export default Input;
