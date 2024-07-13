import React from 'react';


const HorseCard = ({ horse }) => {
  return (
    <div className="horse-card">
      <img src={horse.image} alt={horse.name} />
      <h2>{horse.name}</h2>
    </div>
  );
};

export default HorseCard;