import React from 'react';
import { Link } from 'react-router-dom';
import BotCard from './BotCard';
import { useNavigate } from 'react-router-dom';
import SortBar from './SortBar';
import { useState } from 'react';

const BotCollection = ({ setBots, bots, setArmy, army }) => {
  console.log(bots)

  const [option, setOption] = useState("")
  const navigate = useNavigate()
  const criteria = useNavigate()
  const enlistBot = (bot) => {
    // Check if the bot is already enlisted
    const enlisted = army.find(enlistedBot => enlistedBot.id === bot.id) !== undefined;

    if (!enlisted) {
      setArmy([...army, bot]); // Enlist the bot into the army
    } else {
      alert('This bot is already enlisted!');
    }
  };

  const deleteBot = (botId) => {
    // Remove the bot from the frontend
    const updatedBots = bots.filter((bot) => bot.id !== botId);
    setBots(updatedBots);
    // Remove the bot from the backend
    fetch(`https://json-sever-bot-battlr.onrender.com/bots/${botId}`, {
      method: 'DELETE',
    }).then(() => {
      console.log('Bot successfully deleted');
    }).catch((error) => {
      console.error('Error discharging bot:', error);
    });
  };

  function sortBy(event) {

    setOption(event.target.value)
  }

  function handleSort(option) {
    if (option === "health") {
      return (a, b) => b.health - a.health
    } else if (option === "damage") {
      return (a, b) => b.damage - a.damage
    } else if (option === "armor") {
      return (a, b) => b.armor - a.armor
    } else {
      return () => 0
    }
  }



return (
  <div className="bot-collection">

    <button className="btn btn-sm btn-success" onClick={() => navigate("/Bot-Battlr/your-bot-army")}>View your bots</button>
    <SortBar option={option} sortBy={sortBy} />
    <select class="form-select" id="floatingSelect">
      <option onClick={() => option("/")}>Filter by class</option>
      <option value="1">Support</option>
      <option value="2">Medic</option>
      <option value="3">Assault</option>
      <option value="4">Defender</option>
      <option value="5">Captain</option>
      <option value="6">Witch</option>
    </select>

    <h2>All Bots</h2>
    <div className="bot-cards">
      {bots.sort(handleSort(option)).map((bot) => (
        <div key={bot.id} className="bot-card">
          <BotCard bot={bot} />
          <div className="bot-actions">
            <Link to={`/Bot-Battlr/bots/${bot.id}`}>View Details</Link>
            <button onClick={() => enlistBot(bot)}>Enlist</button>
            <button onClick={() => deleteBot(bot.id)}>Delete</button>


          </div>
        </div>
      ))}
    </div>
  </div>
);
};

export default BotCollection;


