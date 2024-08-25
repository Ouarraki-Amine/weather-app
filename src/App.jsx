import './App.css'
import { UilClouds } from '@iconscout/react-unicons'
import TopButtons from './components/TopButtons'
import Inputs from './components/Inputs'
import TimeLocation from './components/TimeLocation'
import TemperatureDetail from './components/TemperatureDetail'
import Forecast from './components/Forecast'
import getFormattedWeatherData from './services/weatherServices';
import { useEffect, useState } from 'react'

function App() {
  const [city, setCity]=useState({q:'villeurbanne'});
  const [units, setUnits]=useState('metric');
  const [weather, setWeather]=useState(null);
  const updateCity=(val)=>{
    setCity({q:val});
  }
  useEffect(()=> {
      
    const fetchWeather = async () =>{
      try{
      const data = await getFormattedWeatherData({...city,units})
          setWeather(data)
      } catch(error){
        console.error("errrrrrrrrrr",error);
      }
    };
        fetchWeather();
    
  },[city,units]);
  
  const updateUnit=(val)=>{
    setUnits(val)
   
  }
  let colr="";
  if(weather){
    
    console.log(weather)
    const {details}=weather 
    console.log(details)
    if(details==="Rain"){
      colr="blue"
    }else{
      colr="yellow"
    }
  }
  else{console.log('gggg')}
  
  return (
    <>
 
    
      <div className={`mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-${colr}-700 to-yellow-700 h-fit shadow-xl shadow-gray-400`}>
        <TopButtons onChange={updateCity} />
        {!weather? (<UilClouds size={100} className="text-white justify-center items-center"/>) : 
        (<div>
       
            <Inputs onChange1={setCity} onChange={updateUnit}/>
            <TimeLocation weather={weather} />
            <TemperatureDetail weather={weather} />
            <Forecast titles="Hourly forecast" weather={weather.hourly}/>
            <Forecast titles="daily forecast" weather={weather.daily}/>
          </div>
       )}
      </div>

    </>
  )
}

export default App;

