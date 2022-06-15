import React, { useState, useEffect } from 'react';
import World from './components/World';
import "./App.css";

const App = () => {
  const [worlds, changeWorlds] = useState({});

  useEffect(() => {
    const getGoldData = async () => {
      const request = await fetch("http://localhost:9000/gold");
      const data = await request.json();
      return changeWorlds(data);
    }
    getGoldData();
  }, []);

  return (
    <React.Fragment>
      <h1>Stan złota na poszczególnych światach:</h1>
      <div id="container">
        {
          Object.entries(worlds).map(([worldname, { amountOfGold, lastUpdate }]) => {
            return <World key={worldname} worldname={worldname} gold={amountOfGold} time={lastUpdate} />
          })
        }
      </div>
    </React.Fragment>
  );
}

export default App;
