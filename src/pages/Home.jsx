import React, { useState } from 'react';
import Navbar from '../components/NavBar';
import CharacterSelection from './CharacterSelection';
import CharacterCustomization from './CharacterCustomization';
import FeedingInterface from './FeedingInterface';
import characters from '../charactersData';
import '../styles/CharacterSelection.css';

const Home = () => {
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [adoptedCharacter, setAdoptedCharacter] = useState(null);
  const [customizedCharacter, setCustomizedCharacter] = useState(null);

  const handleSelectCharacter = (character) => {
    setSelectedCharacter(character);
  };

  const handleFeedCharacter = (food) => {
    const updatedCharacter = { ...adoptedCharacter, hunger: 'full' };
    setAdoptedCharacter(updatedCharacter);
  };

  const handleCompleteCustomization = (customizedCharacter) => {
    setAdoptedCharacter(customizedCharacter);
    setCustomizedCharacter(null);
  };

  return (
    <div className="app">
      <img src='bg.jpg' width='100%' height='200px'></img>
      <Navbar />
      
      {adoptedCharacter ? (
        <div>
          <h2 className='m-4'>Congratulations! You've adopted {adoptedCharacter.name}!</h2>
          <FeedingInterface
            character={adoptedCharacter}
            accessoryImage={adoptedCharacter.accessoryImage}
            accessoryPosition={adoptedCharacter.position}
            onFeed={handleFeedCharacter}
          />
        </div>
      ) : customizedCharacter ? (
        <div>
          <h2 className='m-4 '>Congratulations! You can now customize {customizedCharacter.name}!</h2>
          <CharacterCustomization selectedCharacter={customizedCharacter} onCompleteCustomization={handleCompleteCustomization} />
        </div>
      ) : (
        <div>
          {selectedCharacter ? (
            <div className="character-selected container mt-4 p-3">
            <h2 className="text-center">You've selected {selectedCharacter.name}!</h2>
            <div className="row align-items-top">
              <div className="col-md-4 text-center">
                <img 
                  src={`/images/${selectedCharacter.image}`} 
                  alt={selectedCharacter.name} 
                  className="img-fluid rounded" 
                />
              </div>
              <div className="col-md-8">
                <div className="description-box p-3 mb-4">
                  <p className="lead mb-0">{selectedCharacter.description}</p>
                </div>
                <ul className="list-group mb-4">
                  <li className="list-group-item"><strong>Age:</strong> {selectedCharacter.age}</li>
                  <li className="list-group-item"><strong>Species:</strong> {selectedCharacter.species}</li>
                  <li className="list-group-item">
                    <strong>Abilities:</strong> {selectedCharacter.abilities ? selectedCharacter.abilities.join(', ') : ''}
                  </li>
                </ul>
                <div className="mb-4">
                  <strong>Strength:</strong>
                  <div className="progress">
                    <div 
                      className="progress-bar" 
                      role="progressbar" 
                      style={{ width: `${selectedCharacter.strength}%` }} 
                      aria-valuenow={selectedCharacter.strength} 
                      aria-valuemin="0" 
                      aria-valuemax="100"
                    >
                      {selectedCharacter.strength}%
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-start">
                  <button 
                    onClick={() => setAdoptedCharacter(selectedCharacter)} 
                    className=" m-2"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title={`Adopt ${selectedCharacter.name}`}
                  >
                    Adopt
                  </button>
                  <button 
                    onClick={() => setCustomizedCharacter(selectedCharacter)} 
                    className=" m-2"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title={`Customize ${selectedCharacter.name}`}
                  >
                    Customize
                  </button>
                </div>
              </div>
            </div>
          </div>          
          ) : (
            <div>
            <h2 className='mt-4 '>Welcome to the Virtual Character Adoption Center!</h2>
            <CharacterSelection characters={characters} onSelectCharacter={handleSelectCharacter} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
