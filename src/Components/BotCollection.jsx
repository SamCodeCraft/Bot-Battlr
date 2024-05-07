import React from 'react';
import { Link } from 'react-router-dom';
import BotCard from './BotCard';
import { useNavigate } from 'react-router-dom';

const BotCollection = ({ setBots, bots, setArmy, army }) => {
  console.log(bots)

  const navigate = useNavigate()
  const option = useNavigate()
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
    fetch(`http://localhost:3000/bots/${botId}`, {
      method: 'DELETE',
    }).then(() => {
      console.log('Bot successfully deleted');
    }).catch((error) => {
      console.error('Error discharging bot:', error);
    });
  };


  return (
    <div className="bot-collection">

      <button className="btn btn-sm btn-success" onClick={() => navigate("/Bot-Battlr/your-bot-army")}>View your bots</button>

      <select class="form-select">
        <option onClick={() => criteria("/")}>Sort by</option>
        <option value="1">Health</option>
        <option value="2">damage</option>
        <option value="3">armor</option>
      </select>

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
        {bots.map((bot) => (
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


