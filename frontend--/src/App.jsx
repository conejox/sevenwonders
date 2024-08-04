import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() { // Define the state variables and the functions to update them
  const [cards, setCards] = useState([]);
  const [numPlayers, setNumPlayers] = useState(3);
  const [age, setAge] = useState(4);
  const [type, setType] = useState(["materia prima"]);//from here is /cost

  const fetchData = async () => {// Fetch the data from the backend,to display the search results
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
// Define the functions to handle the form input changes and the form submission
  const handleNumPlayersChange = (e) => {
    setNumPlayers(e.target.value);
  };
  const handleAgeChange = (e) => {
    setAge(e.target.value);
  }
  const handleTypeChange = (e) => {
    setType(e.target.value);
  }
//for type,age,numPlayers
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/data/numPlayers', { numPlayers, age });
      setCards(response.data); // Update the cards state with the filtered cards
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };
//for all cost
  const handleSubmitCost = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/data/cost', { type });
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

      <form onSubmit={handleSubmitCost}>
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
                
              </li>
          ))}
        </ul>
      </div>
          

     
  </div>
  );
}

export default App;
