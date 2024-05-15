import React from 'react';
import Navbar from '../components/NavBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';

const MessagesPage = () => {

  const randomMessages = [
    'Hello there! Welcome to the virtual character adoption center.',
    'Your anime character is feeling hungry. Time to treat it to some virtual ramen!',
    'Your favourite anime character is here to be loved by you :)',
    'Breaking news! Your anime character just unlocked a new power level. Prepare for epic battles! JK, they are here to chill, not to battle.',
    'Remember to feed your virtual pets.',
    'Your anime character is feeling lonely. Send it some virtual hugs!',
    'Fun fact: Anime characters have the power of friendship on their side. It\'s unbeatable!',
    'Congrats! Your anime character just won the "Most Kawaii Character" award. It`s a true honor!',
    'Coding tip of the day: Debugging anime characters is as challenging as mastering a new jutsu!',
    'Oops! Your anime character is trying to learn a new move. Wish it luck!',
  ];

  return (
    <>
    <img src='bg.jpg' width='100%' height='200px'></img>
    <Navbar />
    <div className="container messages-page">
      <h1 className="page-title text-center mb-4">Messages</h1>
      {randomMessages.map((message, index) => (
        <div key={index} className="row mb-3">
          <div className="col">
            <div className="card rounded-3 shadow-sm">
              <div className="card-body d-flex justify-content-between align-items-center">
                <p className="card-text">{message}</p>
                <FontAwesomeIcon icon={faComment} className="text-purple" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default MessagesPage;
