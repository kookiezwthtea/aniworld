import React from 'react';
import Navbar from '../components/NavBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmileBeam} from '@fortawesome/free-solid-svg-icons';

const MessagesPage = () => {

  const randomMessages = [
    'What would you call a French fan of anime?A Ouib!',
    'What’s a birds favourite anime film?Owls moving Castle!',
    'Why can’t Naruto watch scary movies?He’s too sensei-tive!',
    'What do you call an old Avatar?Boomer-Aang!',
    'How did the Avatar feel when he saw what happened to the Air Nomads?Aangry!',
    'What does toilet paper and the Avatar have in common?They disappear when the world needs them most!',
    'How many ‘Dragon Ball Z’ characters does it take to change a light bulb?One. But it will take 6 episodes!',
    'What is the best chocolate snack to eat while watching anime?My neighbours Toblerone!',
    'The weather in Digimon Adventure is…Snow Joke!',
    'Did you hear about the cow anime?It’s called Sailor Moo!',
  ];

  return (
    <>
    <img src='bg.jpg' width='100%' height='200px'></img>
    <Navbar />
    <div className='humor-bg-img'>
    <div className="container humor-page">
      <h1 className=" text-center mb-3 card rounded-3 shadow-sm humor-card p-4">Some Anime Related Jokes to Brighten Your Day ദ്ദി(˵ •̀ ᴗ - ˵ ) ✧</h1>
      {randomMessages.map((message, index) => (
        <div key={index} className="row mb-3">
          <div className="col">
            <div className="card rounded-3 shadow-sm humor-card">
              <div className="card-body d-flex justify-content-between align-items-center">
                <p className="card-text">{message}</p>
                <FontAwesomeIcon icon={faSmileBeam} className="text-purple" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
    </>
  );
};

export default MessagesPage;
