
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

    const fetchBots = async () => {
      try {
        const response = await fetch('http://localhost:3000/bots');
        const data = await response.json();
        setBots(data.bots);
      } catch (error) {
        console.error('Error fetching bots:', error);
      }
    };

    return (
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<BotCollection bots={bots} setArmy={setArmy} army={army} />} exact />
            <Route path="/your-bot-army" element={<YourBotArmy army={army} setArmy={setArmy} />} />
            <Route path="/bots/:botId" element={<BotSpecs bots={bots} army={army} setArmy={setArmy} />} />
          </Routes>
        </div>
      </Router>
    );
  };

  export default App;
