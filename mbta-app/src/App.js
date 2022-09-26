import logo from "./logo.png";
import "./index.css";
import Input from "./Input";

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

function App() {
  return (
    <div className="App">
      <div className="input-div">
        <div className="input-container">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h3 className="header-title">Train Finder</h3>
            <p className="header-subtitle">
              Welcome to the MBTA train finder. Select a route to find the right train. <br></br>
              For more infomation on how to use, see instructions below.
            </p>
          </header>

          <Input />
        </div>
      </div>
      <div className="bottom-container">
        <div className="bottom-center-div">
          <h3 className="bottom-section-title-1">How to use:</h3>

          <p className="bottom-section-paragraph-1">
            Enter a start and destination station to find the name of the train
            operating on that route. Both inputs must start with an uppercase
            letter and must also match with the information on our database in
            order to find the right train.
            <p>
              List of routes that could be searched are displayed below from
              start to destination.
            </p>
          </p>

          <h3 className="bottom-section-title-2">Routes:</h3>

          <p className="bottom-section-paragraph-2">
            Ashmont/Braintree - Alewife <br></br>
            Mattapan - Ashmont <br></br>
            Forest Hills - Oak Groove <br></br>
            Boston College - Government Center <br></br>
            Cleveland Circle - Government Center <br></br>
            Riverside - Union Square <br></br>
            Heath Street - Lechmere <br></br>
            Bodwoin - Wonderland <br></br>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
