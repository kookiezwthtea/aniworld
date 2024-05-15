import React from 'react';

const GoBackButton = () => {
  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <button onClick={reloadPage} className='mt-4'>Go Back</button>
  );
};

export default GoBackButton;
