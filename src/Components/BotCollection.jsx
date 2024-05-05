import React from 'react';
import { Link } from 'react-router-dom';
import BotCard from './BotCard';

const BotCollection = ({ bots, setArmy, army }) => {
  const enlistBot = (bot) => {
    // Check if the bot is already enlisted
    const enlisted = army.find(enlistedBot => enlistedBot.id === bot.id) !== undefined;

    if (!enlisted) {
      setArmy([...army, bot]); // Enlist the bot into the army
    } else {
      alert('This bot is already enlisted!');
    }
  };

  return (
    <div className="bot-collection">
      <h2>All Bots</h2>
      <div className="bot-cards">
        {bots.map((bot) => (
          <div key={bot.id} className="bot-card">
            <BotCard bot={bot} />
            <div className="bot-actions">
              <Link to={`/bots/${bot.id}`}>View Details</Link>
              <button onClick={() => enlistBot(bot)}>Enlist</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BotCollection;

