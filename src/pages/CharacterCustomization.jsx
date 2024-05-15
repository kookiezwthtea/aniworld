import React, { useState } from 'react';
import FeedingInterface from './FeedingInterface';
const CharacterCustomization = ({ selectedCharacter, onCompleteCustomization }) => {


  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [accessoryImage, setAccessoryImage] = useState(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

// In FeedingInterface component
console.log("Accessory image in FeedingInterface:", accessoryImage);


  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleAccessoryChange = (event) => {
    const selectedAccessory = event.target.value;
    const imageUrl = `/images/accessories/${selectedAccessory}.png`;
    setAccessoryImage(imageUrl);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const containerRect = event.target.getBoundingClientRect();
    const offsetX = Math.max(0, Math.min(containerRect.width, event.clientX - containerRect.left));
    const offsetY = Math.max(0, Math.min(containerRect.height, event.clientY - containerRect.top));
    setPosition({ x: offsetX, y: offsetY });
  };

  const handleComplete = () => {
    if (name.trim() === '' || gender.trim() === '') {
      alert('Please enter a name and select a gender for your character.');
      return;
    }

    if (!accessoryImage) {
      alert('Please select an accessory for your character.');
      return;
    }

    onCompleteCustomization({ ...selectedCharacter, name, gender, accessoryImage, position });
  };

  return (
    <div className='description-card'>
      <h3 className='mb-4 text-uppercase'>Customize Your Adopted Character</h3>
      <div className="character-with-accessory" onDrop={handleDrop} onDragOver={(e) => e.preventDefault()}>
        <img src={`/images/${selectedCharacter.image}`} alt={selectedCharacter.name} height='300rem' />
        {accessoryImage && (
          <img
            style={{ position: 'absolute', left: position.x + 'px', top: position.y + 'px', transform: 'translate(-50%, -50%)' }}
            draggable="true"
            className='character-accessory'
            src={accessoryImage}
            alt="Accessory"
            width='100rem'
          />
        )}
      </div>
      <h3 className='mt-4 mb-4'>{selectedCharacter.name}</h3>
      <label>Name:</label>
      <input type="text" value={name} onChange={handleNameChange} className='m-2' />
      <label>Gender:</label>
      <select value={gender} onChange={handleGenderChange} className='m-2'>
        <option value="">Select</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <label>Accessory:</label>
      <select onChange={handleAccessoryChange}>
        <option value="">None</option>
        <option value="strawhat">Straw Hat</option>
        <option value="Christmashat">Christmas Hat</option>
        <option value="Chefhat">Chef Hat</option>
      </select>
      <button onClick={handleComplete}>Complete Customization</button>
    </div>
  );
};

export default CharacterCustomization;
