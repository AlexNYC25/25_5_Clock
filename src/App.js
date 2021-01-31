
import './App.css';
import react, { useEffect } from 'react';

let formatTime = (timeInSec) => {
  return new Date(timeInSec * 1000).toISOString().substr(14, 5)

};



function App() {
  // set default time values in state variables
  const [workTimer, setWorkTimer] = react.useState(25*60);
  const [breakTime, setBreakTime] = react.useState(5*60);
  // timers running
  const [workTimerRunning, setWorkTimerRunning] = react.useState(true)
  const [breakTimerRunning, setBreakTimerRunning] = react.useState(true)
  const [timerTimeOut, setTimerTimeOut] = react.useState(null)
  

  useEffect(() => {
    if(workTimerRunning && workTimer > 0){
      setTimerTimeOut(setTimeout(() => {
        setWorkTimer(workTimer - 1)
      }, 1000))
    }
  
    if(breakTimerRunning && breakTime > 0 ){
      setTimeout(() => {
        setBreakTime(breakTime - 1)
      }, 1000);
    }
  })

  

  return (
    <div className="App">
      <div id="title">
        <p className="h1">
          25+5 Clock
        </p>        
      </div>
      <div id="timers" className="row justify-content-md-center">
        <div id="session-timer " className="col-5">
          <p 
            id="session-label"
            className="h2"
          >Session Timer</p>
          <div
            className="row justify-content-md-center"
          >
            <div 
              id="session-decrement" 
              className="col-3"
              onClick={() => {
                if(!workTimerRunning){setWorkTimer(workTimer - 60)}
                else{
                  clearTimeout(timerTimeOut);
                  setWorkTimer(workTimer - 60)
                }
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="currentColor" className="bi bi-arrow-down-circle" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
              </svg>
            </div>
            <div id="break-length" className="col-4">
              <p
                className="h3"
              >
                {formatTime(workTimer)}
              </p>
            </div>
            <div id="session-increment" className="col-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="currentColor" className="bi bi-arrow-up-circle" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
              </svg>
            </div>
          </div>
        </div>

        <div id="break-timer" className="col-5">
          <p 
            id="break-label"
            className="h2"
          >Break Timer</p>
          <div
            className="row justify-content-md-center"
          >
            <div id="break-decrement" className="col-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="currentColor" className="bi bi-arrow-down-circle" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
              </svg>
            </div>
            <div id="time-left" className="col-4">
              <p
                className="h3"
              >
                {formatTime(breakTime)}
              </p>
            </div>
            <div id="break-increment" className="col-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="currentColor" className="bi bi-arrow-up-circle" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
              </svg>
            </div>
          </div>
        </div>

      </div >

      <div id="controls" className="row mt-4 justify-content-md-center">
        <div id="start_stop" className="col-3">
        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="currentColor" className="bi bi-play-circle" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
          <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
        </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="currentColor" className="bi bi-stop-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            <path d="M5 6.5A1.5 1.5 0 0 1 6.5 5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5v-3z"/>
          </svg>
        </div>
        <div id="reset" className="col-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="currentColor" className="bi bi-arrow-repeat" viewBox="0 0 16 16">
            <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"/>
            <path fillRule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"/>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default App;
