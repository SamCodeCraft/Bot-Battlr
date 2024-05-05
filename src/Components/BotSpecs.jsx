import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BotCard from './BotCard';

const BotSpecs = ({ bots, army, setArmy }) => {
  const { botId } = useParams();
  const history = useNavigate();
 
  // Find the bot with the given ID
  const bot = bots.find((bot) => bot.id === botId);
  console.log(botId)
  const enlistBot = () => {
    // Check if the bot is already enlisted
    const isEnlisted = army.some((enlistedBot) => enlistedBot.id === bot.id);

    if (!isEnlisted) {
      setArmy([...army, bot]); // Enlist the bot into the army
      history('/'); // Redirect back to the bot collection
    } else {
      alert('This bot is already enlisted!');
    }
  };

  const goBack = () => {
    history("/"); // Navigate back to the previous page
  };

  return (
    <div className="bot-specs">
      {bot ? (
        <>
          <h2>Bot Details</h2>
          <BotCard bot={bot} />
          <div className="bot-actions">
            <button onClick={goBack}>Go Back</button>
            <button onClick={enlistBot}>Enlist</button>
          </div>
        </>
      ) : (
        <p>Bot not found!</p>
      )}
    </div>
  );
};

export default BotSpecs;
