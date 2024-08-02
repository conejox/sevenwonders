import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [cards, setCards] = useState([]);
  const [numPlayers, setNumPlayers] = useState(3);

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

  const handleNumPlayersChange = (e) => {
    setNumPlayers(e.target.value);
  };

  const handleNumPlayersSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/data/numPlayers', { numPlayers: numPlayers });
      setCards(response.data); // Update the cards state with the filtered cards
    } catch (error) {
      console.error('Error submitting number of players:', error);
    }
  };

  


  return (      // Display the data
    <div>
      <h1>Card Data</h1>
      {/*<form>
              <select>
                <option>basic materials</option>
                <option>manufactured products</option>
                <option>civil buildings</option>
                <option>comercial buildings</option>
                <option>military buildings</option>
                <option>science buildings</option>
                <option>guilds</option>
                </select>      </form>*/}

<form onSubmit={handleNumPlayersSubmit}>
        <label>
          Number of Players:
          <select value={numPlayers} onChange={handleNumPlayersChange}>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="10">10</option>
          </select>
        </label>
        <button type="submit">Submit</button>
      </form>

      <div>
        <h2>Cards</h2>
        <ul>
          {cards.map((card, index) => (
            <li key={index}>
              {card.name} - Number of Players: {card.numPlayers}
              </li>
          ))}
        </ul>
      </div>
          

      {/*<div className="card-list">
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
      </div>*/}
  </div>
  );
}

export default App;
