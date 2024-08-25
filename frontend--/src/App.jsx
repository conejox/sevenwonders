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
  const getCardClass = (type) => {
    switch (type) {
      case 'materia prima':
        return 'card card-type-materia-prima';
      case 'bienes manufacturados':
        return 'card card-type-bienes-manufacturados';
      case 'estructura militar':
        return 'card card-type-estructura-militar';
      case 'estructura civil':
        return 'card card-type-estructura-civil';
      case 'estructura comercial':
        return 'card card-type-estructura-comercial';
      case 'ciencia':
        return 'card card-type-ciencia';
      case 'guild':
        return 'card card-type-guild';
      default:
        return 'card';
    }
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
      <div className='background'>

        <div className='allpage'>

          <div className='toolbox'>
            <div className='logo-container'>
              <img src='/images/sev-logo-gold-16128779869FV5n-large.png'className='logo' alt='logo 7 wonders' />
              <h1 className='card-filter'>Card Filter</h1>
            </div>{/* logo container */}
            

              <form onSubmit={handleSubmit}className="form-group">
                  <div className="form-agecost">
                    <label><strong>Age:</strong>
                        
                        <select value={age} onChange={handleAgeChange}>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">all</option>
                        </select>
                      </label>
                    <strong>Cost:</strong>  
                    <label className='cost'>
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
                    </label>{/* class cost */}
                  </div>{/* class agecost */}

                  <div className="form-playertype">

                    <label className='numberofplayers'><strong>Number of Players:</strong>
                    <select value={numPlayers} onChange={handleNumPlayersChange}>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="10">10</option>
                    </select>
                    </label>
                    <strong>type:</strong>
                    <div className="type">
                      
                      <label>base material
                        <input
                          type="checkbox"
                          checked={baseMaterial === 1}
                          onChange={(e) => handleBaseMaterialChange(e.target.checked ? 1 : 0)}
                        />
                      </label>
                      <label>manufactured products
                        <input
                          type="checkbox"
                          checked={manufacturedProducts === 1}
                          onChange={(e) => handleManufacturedProductsChange(e.target.checked ? 1 : 0)}
                        />
                      </label>
                      <label>Commercial Buildings
                        <input
                          type="checkbox"
                          checked={comercial === 1}
                          onChange={(e) => handleComercialChange(e.target.checked ? 1 : 0)}
                        />
                      </label>
                      <label>science
                        <input
                          type="checkbox"
                          checked={science === 1}
                          onChange={(e) => handledscienceChange(e.target.checked ? 1 : 0)}
                        />
                      </label>
                      <label>military buildings
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
                      <label>guilds
                        <input
                          type="checkbox"
                          checked={guild === 1}
                          onChange={(e) => handleGuildChange(e.target.checked ? 1 : 0)}
                        />
                      </label>
                      </div>{/* class type */}
                  
                  </div>{/*class form-playertype */}
                  <div className='submitbutton'>
                      <button type="submit">Submit</button>
                  </div>
              </form>{/*class form-group */}
            
          
          </div>{/*class toolbox */}
          
          <div className='cards-container'>
            <h2>Cards</h2>
            <div className='cards-display'>
              {cards.map((card, index) => (
                <div className={getCardClass(card.type)} key={index}>
                  <strong>{card.name}</strong>
                  <br />
                  
                  <br />
                  - Age: {card.age}
                  <br />
                  - Type: {JSON.stringify(card.type)}
                  <br />
                  - Cost: {JSON.stringify(card.cost)}
                  <br />
                </div>
              ))}
            </div>{/* class="cards-display" */}
          </div>{/* class="cards-container" */}
          
        </div>{/* class="allpage" */}
      </div>{/* class="background" */}
    </div>
  );
}

export default App;