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

  const formatBackground = () => {
    if (!weather) return "from-indigo-500 from-20% via-sky-500 via-40% to-emerald-500 t0-70%";
    const threshold = units === "metric" ? 20 : 60;
    if (weather.temp <= threshold) return "from-indigo-500 from-20% via-sky-500 via-40% to-emerald-500 t0-70%"; 
    return "from-violet-500 from-20% via-fuchsia-500 via-40% to-rose-500 t0-70%";
  }

  return (
    <div className="App">
      <div className={`mx-auto max-w-screen-md mt-4 pb-10 pt-5 px-32 bg-gradient-to-br h-fit shadow-xl shadow-gray-400 rounded-2xl ${formatBackground()}`}>
        <TopButton setQuery={setQuery} />
        <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />

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
