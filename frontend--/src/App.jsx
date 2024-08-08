import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [cards, setCards] = useState([]);
  const [numPlayers, setNumPlayers] = useState(3);
  const [age, setAge] = useState(4);
  const [type, setType] = useState('all');
  const [wood, setwood] = useState(0);
  const [stone, setstone] = useState(0);
  const [clay, setclay] = useState(0);
  const [ore, setore] = useState(0);
  const [Gold, setGold] = useState(0);
  const [wool, setwool] = useState(0);
  const [glass, setglass] = useState(0);
  const [paper, setpaper] = useState(0);
 

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
  const handlewoodChange = (e) => {
    setwood(e.target.value);
  }
  const handlestoneChange = (e) => {
    setstone(e.target.value);
  }
  const handleclayChange = (e) => {
    setclay(e.target.value);
  }
  const handleoreChange = (e) => {
    setore(e.target.value);
  }

  const handleGoldChange = (value) => {
    setGold(value);
  };
  const handlewoolChange = (value) => {
    setwool(value);
  };

  const handleglassChange = (value) => {
    setglass(value);
  };

  const handlepaperChange = (value) => {
    setpaper(value);
  };


// take the filtered data and send it to the backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/data/search', 
        { numPlayers, age, type,Gold,wool,glass,paper,wood,stone,clay,ore });
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
           <input type="checkbox" checked={Gold === 1} onChange={(e) => handleGoldChange(e.target.checked ? 1 : 0)} />
        </label>
        <label>
           wool:
           <input type="checkbox" checked={wool === 1} onChange={(e) => handlewoolChange(e.target.checked ? 1 : 0)} />
        </label>
        <label>
           Glass:
            <input type="checkbox" checked={glass === 1} onChange={(e) => handleglassChange(e.target.checked ? 1 : 0)} />
        </label>
        <label>
           paper:
            <input type="checkbox" checked={paper === 1} onChange={(e) => handlepaperChange(e.target.checked ? 1 : 0)} />
        </label>
        <label>
          wood:
          <select value={wood} onChange={handlewoodChange}>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </label>
        <label>
          stone:
          <select value={stone} onChange={handlestoneChange}>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </label>
        <label>
          clay:
          <select value={clay} onChange={handleclayChange}>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </label>
        <label>
          ore:
          <select value={ore} onChange={handleoreChange}>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
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
