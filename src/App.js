
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BotCollection from './Components/BotCollection';
import YourBotArmy from './Components/YourBotArmy';
import BotSpecs from './Components/BotSpecs';


const App = () => {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    fetchBots();
  }, []);

  function fetchBots() {
    fetch('https://json-sever-bot-battlr.onrender.com/bots')
      .then(response => response.json())
      .then(data => {
        setBots(data);
      })
      .catch(error => {
        console.error('Error fetching bots:', error);
      });
  }

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/Bot-Battlr" element={<BotCollection setBots={setBots} bots={bots} setArmy={setArmy} army={army} />} exact />
          <Route path="/Bot-Battlr/your-bot-army" element={<YourBotArmy army={army} setArmy={setArmy} />} />
          <Route path="/Bot-Battlr/bots/:botId" element={<BotSpecs bots={bots} army={army} setArmy={setArmy} />} />
          
        </Routes>
      </div>
    </Router>
  );
};

export default App;

