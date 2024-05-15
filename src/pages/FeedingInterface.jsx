import React, { useState } from 'react';
import '../styles/FeedingInterface.css';
import GoBackButton from '../components/GoBackButton';

const FeedingInterface = ({ character, accessoryImage, accessoryPosition, onFeed }) => {
  const [selectedFood, setSelectedFood] = useState('');
  const [isFeeding, setIsFeeding] = useState(false);
  const [isHappy, setIsHappy] = useState(false);
  const [randomFact, setRandomFact] = useState('');

  const handleFeed = () => {
    if (!selectedFood) {
      alert('Please select a food item to feed your character.');
      return;
    }

    // Randomly select a fact about the character
    const facts = character.facts;
    const randomIndex = Math.floor(Math.random() * facts.length);
    setRandomFact(facts[randomIndex]);

    setIsHappy(true);
    setIsFeeding(true);
    setTimeout(() => {
      onFeed(selectedFood);
      setSelectedFood('');
      setIsFeeding(false);
      setIsHappy(false);
    }, 1500);
  };

  return (
    <>
      <div className="feeding-interface description-card">
        <h3 className='mb-5 text-uppercase'>Feed Your Character</h3>
        <div className="character-info">
          <div className="character-container">
            <div className="character-with-accessory">
              <img src={`/images/${character.image}`} alt={character.name} height='300rem' />
              {accessoryImage && (
                <img
                  style={{
                    position: 'absolute',
                    left: accessoryPosition.x + 'px',
                    top: accessoryPosition.y + 'px',
                    transform: 'translate(-50%, -50%)',
                  }}
                  className='character-accessory'
                  src={accessoryImage}
                  alt="Accessory"
                  width='100rem'
                />
              )}
            </div>
            {isHappy && (
              <div className="happiness-effect">
                <div className="heart"></div>
              </div>
            )}
          </div>
          <h3>{character.name}</h3>

          {randomFact && <p className="random-fact">{randomFact}</p>}
          
          {isFeeding && <div className="feeding-animation">Feeding...</div>}
        </div>

        <select value={selectedFood} onChange={(e) => setSelectedFood(e.target.value)} style={{ 'padding': '1em', 'marginRight': '1em' }}>
          <option value="">Select Food</option>
          <option value="ramen">Bowl of Ramen</option>
          <option value="dorayaki">Dorayaki</option>
          <option value="katsudon">Katsudon</option>
          <option value="mochi">Sakura Mochi</option>
          <option value="sushi">Sushi</option>
          <option value="onigiri">Onigiri</option>
        </select>
        <button onClick={handleFeed} disabled={isFeeding}>
          {isFeeding ? 'Feeding...' : 'Feed'}
        </button>
        <div>
          <GoBackButton to="/">Go Back</GoBackButton>
        </div>
      </div>
    </>
  );
};

export default FeedingInterface;
