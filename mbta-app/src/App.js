//import logo from './logo.svg';
import logo from './logo.png';
import './index.css';

function App() {
  return (
    <div className="App">
      <div className="input-div">
        <div className="input-container">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
              <h3 className="header-title">
                Train Finder
              </h3>
            <p className="header-subtitle">Select a route to find the right train</p> 
          </header>
        </div>
        </div>
        <div className="bottom-container">
          <div className="bottom-center-div">
            <h3 className="bottom-section-title-1">How to use:</h3>

              <p className="bottom-section-paragraph-1">
                  Enter a start and destination station to find the name of the train operating
                  on that route. Both inputs must start with an uppercase letter and must also 
                  match with the information on our database in order to find the right train.
                  <p>
                    List of routes that could be searched are displayed below from start to destination.
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
