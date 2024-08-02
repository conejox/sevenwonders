import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [cards, setCards] = useState([]);
  const [numPlayers, setNumPlayers] = useState(3);
  const [age, setAge] = useState(4);

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
  const handleAgeChange = (e) => {
    setAge(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/data/numPlayers', { numPlayers, age });
      setCards(response.data); // Update the cards state with the filtered cards
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  return (      // Display the data
    <div>
       <h1>Card Data</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Age:
          <select value={age} onChange={handleAgeChange}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">all</option>
          </select>
        </label>
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
      <div></div>

      <div>
        <h2>Cards</h2>
        <ul>
          {cards.map((card, index) => (
            <li key={index}>
              <strong>{card.name}</strong><br />
               - Number of Players: {card.numPlayers}<br />
                - Age: {card.age}<br />
                
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
