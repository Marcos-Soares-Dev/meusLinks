import React from 'react'
import Button from './Button'

export default function PerfilCard({ imageUrl, specialistName, specialty, location, children }) {
  return (
    <div className='flex flex-col items-center justify-center gap-2 w-[280px] max-w-[300px] min-w-[250px] bg-gray-900  p-4 rounded-lg opacity-80 hover:opacity-100 transition duration-300'>
      <div className="relative flex items-center justify-center z-1 bg-gradient-to-br from-green-400 to-blue-600 
          rounded-full w-[160px] h-[160px] ">
        <img 
          className='absolute z-2 w-[150px] h-[150px] object-cover rounded-full block mx-auto flex-shrink-0' 
          src={imageUrl} 
          alt="foto de perfil" 
        />
      </div>

      <div className="personInfo text-center">
        <h1 className="text-2xl font-bold">{specialistName}</h1>
        <p className="text-gray-400">{specialty}</p>
        <p className="text-yellow-400">{location}</p>
      </div>

      <div className="buttons flex flex-col gap-1">
        {children}
      </div>
    </div>
  )
}
