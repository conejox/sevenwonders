import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';


function App() {
  const [cards, setCards] = useState([]);
  const [numPlayers, setNumPlayers] = useState(3);
  const [age1, setAge1] = useState(1);
  const [age2, setAge2] = useState(1);
  const [age3, setAge3] = useState(1);
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
  const [zero, setZero] = useState(1);

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
  const handleAge1Change =(value) => {
    setAge1(value);
  };
  const handleAge2Change = (value) => {
    setAge2(value);
  };
  const handleAge3Change = (value) => {
    setAge3(value);
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
  const handlewoodChange = (value) => {
    setwood(value);
  };
  const handlestoneChange = (value) => {
    setstone(value);
  };
  const handleclayChange = (value) => {
    setclay(value);
  };
  const handleoreChange = (value) => {
    setore(value);
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

  const handleZeroChange = (value) => {
    setZero(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/data/search', {
        numPlayers,
        age1,
        age2,
        age3,
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
        zero,
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
            <div className='form-wonders'>
              <div className='ephesos' >
                <div className='ephesos_day'>
                <img src='/images/paper.png'
                      className={`costicon${paper}`}
                      onClick={() => handlepaperChange(!(e.target.checked ? 1 : 0))}
                      alt='paper' />
                
                <div className='eph_stages'>
                <div className='eph_01'>
                <input type="checkbox" onClick={() => handleclayChange(2)}/>
                </div>
                <div className='eph_02'>
                <input type="checkbox"onClick={() => handlewoodChange(2)} />
                </div>
                <div className='eph_03'>
                <input type="checkbox" onClick={(e) => {
                                  handleoreChange(2);
                                  handleglassChange(e.target.checked ? 1 : 0);
                                }} />
                </div>
                </div>{/*class eph_stages */}
                </div>{/*class day */}
                <div className='ephesos_nigth'>
                  <img src='/images/paper.png'
                        className={`costicon${paper}`}
                        onClick={() => handlepaperChange(!(e.target.checked ? 1 : 0))}
                        alt='paper' />
               <div className='eph_stages'>
                <div className='eph_04'>
                <input type="checkbox"onClick={() => handlestoneChange(2)} />
                </div>
                <div className='eph_05'>
                <input type="checkbox"onClick={() => handlewoodChange(2) }/>
                </div>
                <div className='eph_06'>
                <input type="checkbox"onClick={(e) => {
                                  handleoreChange(2);
                                  handlewoolChange(e.target.checked ? 1 : 0);
                                }} />
                </div>
                </div>{/*class eph_stages */}
                </div>{/*class nigth */}
              </div>{/*class ephesos */}

            </div>{/*class form-wonders */}
            

              <form onSubmit={handleSubmit}className="form-group">
                  <div className="form-agecost">
                    <label><strong>Age:</strong>
                    <label >
                      <img 
                      src='/images/I.png' 
                      alt='age1' className={`ageopalence${age1}`} 
                      onClick={() => handleAge1Change(!(e.target.checked ? 1 : 0))}
                      id='age1'/>{}
                      
                    <input 
                          type="checkbox"
                          className='agecheckbox' 
                          id='cb1'
                          checked={age1 === 1}
                          onChange={(e) => handleAge1Change(e.target.checked ? 1 : 0)}
                          
                          
                        />
                    </label> 
                    <label>
                      <img src='/images/II.png'
                       alt='age2' className={`ageopalence${age2}`} 
                        id='age2'/>
                   
                    <input 
                          type="checkbox"className='agecheckbox' id='cb2'
                          checked={age2 === 1}
                          onChange={(e) => handleAge2Change(e.target.checked ? 1 : 0)}
                        />
                        </label>
                    <label>
                      <img src='/images/III.png'
                       alt='age3' 
                       className={`ageopalence${age3}`}  
                       id='age3'/>
                    <input 
                          type="checkbox"
                          className='agecheckbox' 
                          id='cb3'
                          checked={age3 === 1}
                          onChange={(e) => handleAge3Change(e.target.checked ? 1 : 0)}
                        />
                       </label>  

                        
                      
                      </label>
                    <strong>Cost:</strong>  
                    <label className='cost'>
                    <label> wood:
                      <input type='range' min="0" max="4"
                        value={wood} onChange={(e) => handlewoodChange(Number(e.target.value))}/>

                      <span>{wood}</span> 
                      
                    </label>
                    <label>Stone:
                      <input type="range" min="0" max="4"
                        value={stone} onChange={(e) => handlestoneChange(Number(e.target.value))}
                      />
                      <span>{stone}</span>
                    </label>

                    <label>clay:
                      <input type="range" min="0" max="4"
                        value={clay} onChange={(e) => handleclayChange(Number(e.target.value))}
                      />
                      <span>{clay}</span>
                    </label>
                    <label> ore:
                      <input type="range" min="0" max="4"
                        value={ore} onChange={(e) => handleoreChange(Number(e.target.value))}
                      />
                      <span>{ore}</span>
                    </label>
                    <div className='costmanf'> 
                    <label>
                      <img src='/images/gold.png'
                      className={`costicon${Gold}`}
                      onClick={() => handleGoldChange(!(e.target.checked ? 1 : 0))} 
                      alt='Gold' />
                    <input 
                    type="checkbox"
                    className='costcheckbox' 
                    checked={Gold === 1}
                    onChange={(e) => handleGoldChange(e.target.checked ? 1 : 0)} />
                    </label>
                    <label>
                      <img src='/images/wool.png'
                      className={`costicon${wool}`}
                      onClick={() => handlewoolChange(!(e.target.checked ? 1 : 0))}
                      alt='wool' />
                      <input 
                      type="checkbox"
                      className='costcheckbox' 
                      checked={wool === 1} onChange={(e) => handlewoolChange(e.target.checked ? 1 : 0)} />
                    </label>
                    <label>
                      <img src='/images/glass.png'
                      className={`costicon${glass}`}
                      onClick={() => handleglassChange(!(e.target.checked ? 1 : 0))}
                      alt='glass' />
                      <input 
                      type="checkbox"
                      className='costcheckbox' 
                      checked={glass === 1} onChange={(e) => handleglassChange(e.target.checked ? 1 : 0)} />
                    </label>
                    <label>
                      <img src='/images/paper.png'
                      className={`costicon${paper}`}
                      onClick={() => handlepaperChange(!(e.target.checked ? 1 : 0))}
                      alt='paper' />
                    
                      <input 
                      type="checkbox"
                      className='costcheckbox' 
                      checked={paper === 1} onChange={(e) => handlepaperChange(e.target.checked ? 1 : 0)} />
                    </label>
                    <label>
                      <img src='/images/zero.png'
                      className={`costicon${zero}`}
                      onClick={() => handleZeroChange(!(e.target.checked ? 1 : 0))}
                      alt='zero' />
                    
                      <input 
                      type="checkbox"
                      className='costcheckbox' 
                      checked={zero === 1} onChange={(e) => handleZeroChange(e.target.checked ? 1 : 0)} />
                    </label>


                    </div>{/* class costmanf */}
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
            
            <div className='cards-display'>
              {cards.map((card, index) => (
                
                <div className={getCardClass(card.type)} key={index}>
                  <p className='card-name'>{card.name}</p>
                  
                  <img src={card.image} alt={card.name} />          
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