import React from 'react';
import { UilSearch , UilLocationPoint } from '@iconscout/react-unicons';


const Inputs = () => {
  return (
    <div className='flex flex-row justify-center my-6'>
        <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>

            <input 
                type="text" 
                placeholder='Search for city ...'
                className='text-md font-light ml-6 px-4 py-2 w-full shadow-xl rounded-lg focus:outline-none capitalize' 
            />
            <UilSearch 
                size={30} 
                className='text-white cursor-pointer transition ease-out hover:scale-125' 
            />
            <UilLocationPoint 
                size={30} 
                className='text-white cursor-pointer transition ease-out hover:scale-125' 
            />

        </div>

        <div className='flex flex-row w-1/4 items-center justify-center'>
            <button 
                name='metric' 
                className='text-xl text-white font-medium transition ease-out hover:scale-125'
            > °C </button>
            <p className='text-lg text-white mx-2 font-medium'>|</p>
            <button 
                name='imperial' 
                className='text-xl text-white font-medium transition ease-out hover:scale-125'
            > °F </button>
        </div>
    </div>
  )
}

export default Inputs