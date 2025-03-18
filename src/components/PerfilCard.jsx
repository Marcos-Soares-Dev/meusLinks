

export default function PerfilCard({ imageUrl, specialistName, specialty, description, location, children }) {
  return (
    <div className='flex flex-col items-center justify-center gap-4 max-w-[350px] min-w-[280px] bg-gray-900 p-4 rounded-lg bg-opacity-70 hover:bg-opacity-100 transition duration-300'>
     <div className="relative w-[150px] h-[150px] bg-center bg-cover">
       {/* Background animado */}       
       <div className="absolute inset-0 rounded-full w-[153px] h-[153px] bg-gradient-to-br from-green-400 to-blue-600 animate-spinGradient"></div>
     
       {/* Imagem fixa */}
       <div className="relative w-full h-full rounded-full overflow-hidden">
         <img 
           className="w-full h-full object-cover" 
           src={imageUrl} 
           alt="foto de perfil" 
         />
       </div>
     </div>

      <div className="flex flex-col gap-2 text-center">
        <h1 className="text-3xl font-bold">{specialistName}</h1>
        <p className="text-xl font-bold bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent">{specialty}</p>
        <p className="text-gray-400 w-full">{description}</p>
        <p className="text-yellow-400 underline">{location}</p>
      </div>

      <div className="buttons flex flex-col gap-[.1rem] w-full text-center">
        {children}
      </div>
    </div>
  )
}
