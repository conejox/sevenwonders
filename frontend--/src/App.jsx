import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [cards, setCards] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/data');
      setCards(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Card Data</h1>
      <div className="card-list">
        {cards.map((card, index) => (
          <div key={index} className="card">
            <strong>Name: </strong><strong>{card.name}</strong> <br />
            <strong>Type:</strong> {card.type}<br />
            <strong>Cost:</strong> {JSON.stringify(card.cost)}<br />
            <strong>Number of Players:</strong> {card.numPlayers}<br />
           
           
            <strong>Age:</strong> {card.age}<br />
            <strong>Quantity:</strong> {card.quantity}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
