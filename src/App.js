import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react';
import TopButton from './components/TopButton';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TemperatureAndDetails from './components/TemperatureAndDetails';
import Forecast from './components/Forecast';
import getFormattedWeatherData from './services/weatherService';
import { useEffect, useState } from 'react';

function App() {

  const [query, setQuery] = useState({q: 'rome'})
  const [units, setUnits] = useState('metric')
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({...query, units}).then((data) => {
        setWeather(data);
      });
      
    };

    fetchWeather();
  }, [query, units])

  return (
    <div className="App">
      <div className='mx-auto max-w-screen-md mt-4 pb-10 pt-5 px-32 bg-gradient-to-br from-indigo-500 from-20% via-purple-500 via-40% to-pink-500 t0-70% h-fit shadow-xl shadow-gray-400 rounded-2xl'>
        <TopButton />
        <Inputs />

        {weather && (
          <div>
            <TimeAndLocation weather={weather} />
            <TemperatureAndDetails weather={weather} />

            <Forecast title="hourly forecast" items={weather.hourly} />
            <Forecast title="daily forecast" items={weather.daily} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
