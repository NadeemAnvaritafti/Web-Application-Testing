import React, {useState} from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Display from './components/Display';

function App() {

  const [hit, setHit] = useState(0);
  const [strike, setStrike] = useState(0);
  const [ball, setBall] = useState(0);


  function changeHit() {
    return (setHit(hit + 1) & setStrike(0) & setBall(0));
  }

  function changeFouls() {
    if (strike === 2) {
      return setStrike(2);
    } else {
      return setStrike(strike + 1);
    }
  }

  function changeStrikes() {
    if (strike === 2) {
      return (setStrike(0) & setBall(0))
    } else {
      return setStrike(strike + 1);
    }
  }

  function changeBalls() {
    if (ball === 3) {
      return (setStrike(0) & setBall(0));
    } else {
      return setBall(ball + 1);
    }
  }

  return (
    <div className="App">
      <div>
        <h1>Baseball Scoreboard At-Bats</h1>
        <Display hit={hit} strike={strike} ball={ball}/>
        <Dashboard changeHit={changeHit} changeFouls={changeFouls} changeStrikes={changeStrikes} changeBalls={changeBalls} hit={hit} strike={strike} ball={ball} setHit={setHit} setStrike={setStrike} setBall={setBall}/>
      </div>
    </div>
  );
}

export default App;
