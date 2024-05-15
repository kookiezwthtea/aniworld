import React, { useState, useEffect } from 'react';
import '../styles/CharacterSelection.css';

const CharacterSelection = ({ characters, onSelectCharacter }) => {


  if (!characters) {
    return <div>Loading...</div>;
  }
  return (
    <div className='mt-2'>
      <h4 className='mt-2 text-center'>Select Your Favorite Anime Character</h4>
      <div className="character-selection-container mt-5">
        {characters.map(character => (
          <div key={character.id} className="character-card">
             <img src={`/images/${character.image}`} alt={character.name} height='300em'/>
            <h4 className='m-2' >{character.name}</h4>
            <button className='m-2' onClick={() => onSelectCharacter(character)}>Select</button>
          </div>
        ))}
      </div>
    </div>
  );
};


export default CharacterSelection;
