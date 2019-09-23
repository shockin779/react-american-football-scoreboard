//TODO: STEP 1 - Import the useState hook.
import {useState, useEffect} from 'react';
import React from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  const [quarter, setQuarter] = useState(1);
  const [quarterButtonText, setQuarterText] = useState('Next Quarter');
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [timerMinutes, setTimerMinutes] = useState(0);

  setTimeout(() => timer(), 1000)

  function resetGame() {
    setQuarter(1);
    setHomeScore(0);
    setAwayScore(0);
    setTimerSeconds(0);
    setTimerMinutes(0);
  }

  function timer() {
    if(timerSeconds >= 59) {
      setTimerMinutes(timerMinutes + 1);
      setTimerSeconds(0)
    } else {
      setTimerSeconds(timerSeconds + 1);
    }
  }

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">{timerMinutes}:{timerSeconds}</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow quarter={quarter} />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={() => setHomeScore(homeScore + 7)}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={() => setHomeScore(homeScore + 3)}>Home Field Goal</button>
        </div>
        <div>
          <button className='quarterButton' onClick={() => {
            if(quarter < 4) {
              setQuarter(quarter + 1);
            } else {
              resetGame();
            }
          }}>{quarterButtonText}</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={() => setAwayScore(awayScore + 7)}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={() => setAwayScore(awayScore + 3)}>Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
