import React from 'react';
import BotCard from './BotCard';

const YourBotArmy = ({ army, setArmy }) => {
  const releaseBot = (botId) => {
    const updatedArmy = army.filter((bot) => bot.id !== botId);
    setArmy(updatedArmy); // Remove the bot from the army
  };

  return (
    <div className="your-bot-army">
      <h2>Your Bot Army</h2>
      <div className="bot-cards">
        {army.map((bot) => (
          <div key={bot.id} className="bot-card">
            <BotCard bot={bot} />
            <div className="bot-actions">
              <button onClick={() => releaseBot(bot.id)}>Release</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YourBotArmy;
