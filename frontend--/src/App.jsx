import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [cards, setCards] = useState([]);
  const [numPlayers, setNumPlayers] = useState(3);
  const [age, setAge] = useState(4);
  const [baseMaterial, setBaseMaterial] = useState(1);
  const [manufacturedProducts, setManufacturedProducts] = useState(1);
  const [comercial, setCommercial] = useState(1);
  const [science, setScience] = useState(1);
  const [military, setMilitary] = useState(1);
  const [guild, setGuild] = useState(1);
  const [civil, setCivil] = useState(1);
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

  const handleNumPlayersChange = (e) => {
    setNumPlayers(e.target.value);
  };
  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };
  const handleBaseMaterialChange = (value) => {
    setBaseMaterial(value);
  };
  const handleManufacturedProductsChange = (value) => {
    setManufacturedProducts(value);
  };
  const handleComercialChange = (value) => {
    setCommercial(value);
  };
  const handledscienceChange = (value) => {
    setScience(value);
  };
  const handleMilitaryChange = (value) => {
    setMilitary(value);
  };
  const handleGuildChange = (value) => {
    setGuild(value);
  };

  const handleCivilChange = (value) => {
    setCivil(value);
  };

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
  const handlewoodChange = (e) => {
    setwood(e.target.value);
  };
  const handlestoneChange = (e) => {
    setstone(e.target.value);
  };
  const handleclayChange = (e) => {
    setclay(e.target.value);
  };
  const handleoreChange = (e) => {
    setore(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/data/search', {
        numPlayers,
        age,
        baseMaterial,
        manufacturedProducts,
        comercial,
        science,
        military,
        guild,
        civil,
        Gold,
        wool,
        glass,
        paper,
        wood,
        stone,
        clay,
        ore,
      });
      setCards(response.data);
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  return (
    <div>
      <h1>Card Data</h1>
      <form onSubmit={handleSubmit}>
        <h2>Filter Cards</h2>
      <div className="form-group">
        <div className="type">
          <strong>type:</strong>
          <label>
            base material
            <input
              type="checkbox"
              checked={baseMaterial === 1}
              onChange={(e) => handleBaseMaterialChange(e.target.checked ? 1 : 0)}
            />
          </label>
          <label>
            manufactured products
            <input
              type="checkbox"
              checked={manufacturedProducts === 1}
              onChange={(e) => handleManufacturedProductsChange(e.target.checked ? 1 : 0)}
            />
          </label>
          <label>
            Commercial Buildings
            <input
              type="checkbox"
              checked={comercial === 1}
              onChange={(e) => handleComercialChange(e.target.checked ? 1 : 0)}
            />
          </label>
          <label>
            science
            <input
              type="checkbox"
              checked={science === 1}
              onChange={(e) => handledscienceChange(e.target.checked ? 1 : 0)}
            />
          </label>
          <label>
            military buildings
            <input
              type="checkbox"
              checked={military === 1}
              onChange={(e) => handleMilitaryChange(e.target.checked ? 1 : 0)}
            />
          </label>
          <label>civil buildings
            <input
              type="checkbox"
              checked={civil === 1}
              onChange={(e) => handleCivilChange(e.target.checked ? 1 : 0)}
            />
          </label>


          <label>
            guilds
            <input
              type="checkbox"
              checked={guild === 1}
              onChange={(e) => handleGuildChange(e.target.checked ? 1 : 0)}
            />
          </label>
          </div>
        <div className="b-group">  
        <label><strong>Age:</strong>
          
          <select value={age} onChange={handleAgeChange}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">all</option>
          </select>
        </label>
        <label><strong>Number of Players:</strong>

          <select value={numPlayers} onChange={handleNumPlayersChange}>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="10">10</option>
          </select>
        </label>
        <label>Gold:
          <input type="checkbox" 
          checked={Gold === 1}
          onChange={(e) => handleGoldChange(e.target.checked ? 1 : 0)} />
        </label>
        <label>wool:
          <input type="checkbox" checked={wool === 1} onChange={(e) => handlewoolChange(e.target.checked ? 1 : 0)} />
        </label>
        <label>Glass:
          <input type="checkbox" checked={glass === 1} onChange={(e) => handleglassChange(e.target.checked ? 1 : 0)} />
        </label>
        <label> paper:
         
          <input type="checkbox" checked={paper === 1} onChange={(e) => handlepaperChange(e.target.checked ? 1 : 0)} />
        </label>
        </div>
        <div className="cost-group">
        <label> wood:
          <select value={wood} onChange={handlewoodChange}>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </label>
        <label>stone:
          <select value={stone} onChange={handlestoneChange}>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </label>
        <label>clay:
          <select value={clay} onChange={handleclayChange}>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </label>
        <label> ore:
          <select value={ore} onChange={handleoreChange}>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </label>
        
        
        <div className='submitbuttom'>
          <button type="submit">Submit</button>
        </div>
        </div>
      </div>  
      </form>
      
      <div>
        <h2>Cards</h2>
        <div className='cards-container'>
          {cards.map((card, index) => (
            <div className='card' key={index}>
              <strong>{card.name}</strong>
              <br />
              - Number of Players: {card.numPlayers}
              <br />
              - Age: {card.age}
              <br />
              - Type: {JSON.stringify(card.type)}
              <br />
              - Cost: {JSON.stringify(card.cost)}
              <br />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;