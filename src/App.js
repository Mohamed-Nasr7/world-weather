import React, {useState} from 'react';
import './App.css';

function App() {

  const [query, setQuery] = useState('')
  const [temperature, setTemperature] = useState({});

  const api = {
    key: "02fb28458ed00ab88f68b06695b72173",
    baseUrl: "https://api.openweathermap.org/data/2.5/"
  }

  const search = (e) => {
    if(e.key === 'Enter'){

      fetch(`${api.baseUrl}/weather?q=${query}&appid=${api.key}`)
        .then(res => res.json())
        .then(res =>{ 
          setTemperature(res);
          setQuery('');
        });
    }

  }
  
  const calcCelisus = (kelvinTemp) => {
    return Math.round(kelvinTemp - 273.15);
  }


  return (
    <div className={temperature.main == undefined ? 'app' :  calcCelisus(temperature.main.temp) > 20 ? 'app warm' : 'app cold'}>
      <main>
        
        <div className="search-box">
          <input 
            type="text" 
            className="search-bar" 
            placeholder="Search City..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            onKeyPress={search}
          />
        </div>


        {temperature.main == undefined ? '' : (
          <div>
            <div className="location-box">
              <div className="location">{temperature.name} , {temperature.sys.country}</div>
              <div className="date">
                {String(new Date()).slice(0, 16)}
              </div>
              
            </div>
            
            <div className="weather-box">
              <div className="temp">{calcCelisus(temperature.main.temp)}°C</div>
              <div> <img src={`https://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`} /> </div>
              <div className="weather"> {temperature.weather[0].main} </div>
            </div>
            
          </div>
        )}
        
      </main>
    </div>
  );
}

export default App;
