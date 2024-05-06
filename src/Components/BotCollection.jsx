import React from 'react';
import { Link } from 'react-router-dom';
import BotCard from './BotCard';
import { useNavigate } from 'react-router-dom';

const BotCollection = ({ bots, setArmy, army }) => {
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

  const deleteBot = async (botId) => {
    try {
      // Remove the bot from the frontend
      const updatedArmy = army.filter((bot) => bot.id !== botId);
      setArmy(updatedArmy);

      // Remove the bot from the backend
      await fetch(`http://localhost:3000/bots/${botId}`, {
        method: 'DELETE',
      });
    } catch (error) {
      console.error('Error discharging bot:', error);
    }
  };

  return (
    <div className="bot-collection">
      <button className="btn btn-sm btn-success" onClick={() => navigate("/your-bot-army")}>View your bots</button>

      <select class="form-select">
        <option onClick={() => criteria("/")}>Sort your bots</option>
        <option value="1">Health</option>
        <option value="2">damage</option>
        <option value="3">armor</option>
      </select>

      <select class="form-select" id="floatingSelect">
        <option onClick={() => option("/")}>Filter your bots</option>
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
              <Link to={`/bots/${bot.id}`}>View Details</Link>
              <button onClick={() => enlistBot(bot)}>Enlist</button>
              <button onClick={() => deleteBot(bot)}>Delete</button>
              

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BotCollection;


