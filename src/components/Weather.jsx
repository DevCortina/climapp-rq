import DateTime from './DateTime'
import { FaLocationDot} from 'react-icons/fa6';

export const Weather =  ({weather}) => {
  
  const { main } = weather;

  
  return (
    <div className='h-full w-full'>      <div className='w-full flex pr-2'>
        <DateTime size={42} weight={200}/>      
      </div>
        <div className="flex flex-col w-full h-3/4 justify-center  items-center pt-10">
          <h1 className='text-5xl font-bold text-white flex flex-row items-center' >
            <i className='text-white-500 text-2xl mr-2'> <FaLocationDot /> </i>
            {weather.name}
          <sup className='rounded-full px-2 py-1 text-sm font-bold bg-white text-blue-300'>{weather.sys.country}</sup>
        </h1>
        <div className="flex flex-row w-full justify-center mt-5 items-center">
          <div className="flex flex-row flex-between items-center">
          <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} width={180} height={180} alt={weather.weather[0].description} />
          </div>
          <div className='flex flex-col'>
          <h2 className='lato text-6xl font-bold text-white'>{Math.round(weather.main.temp)}°C</h2>
          <p className='lato text-1xl font-bold text-white'>Sensación térmica: {Math.round(weather.main.feels_like)}°C</p>
          <p className='lato text-1xl font-bold text-white'>min: {Math.round(weather.main.temp_min)}°C &nbsp;/&nbsp; max: {Math.round(weather.main.temp_max)}°C</p>
          </div>
          </div>
          <div className="flex items-center">
          <p className='-mt-4 uppercase text-center text-white'>{weather.weather[0].description}</p>  
          </div>
          
      </div>
  </div>
  )
}
