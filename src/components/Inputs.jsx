import { UilSearch, UilLocationPoint  } from '@iconscout/react-unicons'
import { useState } from 'react';

const Inputs = ({onChange,onChange1}) => {

    const [citys ,setCitys]=useState(null)

const handlSubmit=(e)=>{
    e.preventDefault();
    onChange1({q:citys})
}
const handlLoc=()=>{
if ("geolocation" in navigator) {
    // Demander la position de l'utilisateur
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
  
        console.log(`Latitude : ${latitude}`);
        console.log(`Longitude : ${longitude}`);
        onChange1({lat:latitude,lon:longitude})
  
        // Vous pouvez maintenant utiliser les coordonnées pour afficher la position sur une carte, par exemple.
      },)}
    }
    return ( 
        <>
            <div className='flex flex-row justify-center my-6'>
                <form onSubmit={handlSubmit}   className='flex flex-row w-3/4 items-center justify-center space-x-4'>
                    <input 
                        onChange={(e)=>{setCitys(e.target.value)}}
                        type="text"
                        placeholder='Search...'
                        
                        className='text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase' 
                    />
                    <UilSearch onClick={handlSubmit} size={25} className='text-white cursor-pointer transition ease-out hover:scale-125' />
                    
                </form>
                <UilLocationPoint onClick={handlLoc} size={25} className='text-white cursor-pointer transition ease-out hover:scale-125' />
                <div className='flex flex-row w-1/4 items-center justify-center'>
                    <button name='metric' onClick={(e)=>{onChange(e.target.name)}} className='text-xl text-white font-light hover:scale-125'>°C</button>
                    <p className='text-xl text-white mx-1'>|</p>
                    <button name='imperial' onClick={(e)=>{onChange(e.target.name)}}  className='text-xl text-white font-light hover:scale-125'>°F</button>
                </div>
            </div>
        </>
     );
}
 
export default Inputs;