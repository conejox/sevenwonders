import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [cards, setCards] = useState([]);
  const [numPlayers, setNumPlayers] = useState(3);
  const [age, setAge] = useState(4);
  const [type, setType] = useState([]);
  const [Gold, setGold] = useState(false);
  const [wool, setwool] = useState(false);
  const [glass, setglass] = useState(false);
  const [paper, setpaper] = useState(false);
 

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
// handle the changes in the filters
  const handleNumPlayersChange = (e) => {
    setNumPlayers(e.target.value);
  };
  const handleAgeChange = (e) => {
    setAge(e.target.value);
  }
  const handleTypeChange = (e) => {
    setType(e.target.value);
  }
  const handleGoldChange = (e) => {
    setGold(e.target.checked);
  };
  const handlewoolChange = (e) => {
    setwool(e.target.checked);
  };
  const handleglassChange = (e) => {
    setglass(e.target.checked);
  };
  const handlepaperChange = (e) => {
    setpaper(e.target.checked);
  };

// take the filtered data and send it to the backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/data/numPlayers', 
        { numPlayers, age, type,Gold,wool,glass,paper });
      setCards(response.data); // Update the cards state with the filtered cards
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  return (      // Display the data
    <div>
       <h1>Card Data</h1>
      <form onSubmit={handleSubmit}>
        <h2>Filter Cards</h2>
        <label>
          type:
          <select value={type} onChange={handleTypeChange}>
            <option value="materia prima">base material</option>
            <option value="bienes manufacturados">manufactured products</option>
            <option value="estructura militar">military buildings</option>
            <option value="estructura comercial">comercial buildings</option>
            <option value="estructura civil">civil buildings</option>
            <option value="ciencia">science buildings</option>
            <option value="guild">guild</option>
            <option value="all">all</option>

          </select>
        </label>
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
        <label>
           Gold:
          <input type="checkbox" checked={Gold} onChange={handleGoldChange} />
        </label>
        <label>
           wool:
          <input type="checkbox" checked={wool} onChange={handlewoolChange} />
        </label>
        <label>
           Glass:
          <input type="checkbox" checked={glass} onChange={handleglassChange} />
        </label>
        <label>
           paper:
          <input type="checkbox" checked={paper} onChange={handlepaperChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
      

      <div>
        <h2>Cards</h2>
        <ul>
          {cards.map((card, index) => (
            <li key={index}>
              <strong>{card.name}</strong><br />
               - Number of Players: {card.numPlayers}<br />
                - Age: {card.age}<br />
                - Cost: {JSON.stringify(card.cost)}<br />
                
              </li>
          ))}
        </ul>
      </div>
          
  </div>
  );
}

export default App;
