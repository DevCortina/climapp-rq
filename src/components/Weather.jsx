import DateTime from './DateTime'
import { FaLocationDot} from 'react-icons/fa6';

export const Weather =  ({weather}) => {
  
  const { main } = weather;

  
  return (
    <div className='h-full w-full'>      <div className='w-full flex pr-2'>
        <DateTime size={42} weight={200}/>      
      </div>
        <div className="flex flex-col w-full justify-center items-center pt-10">
          <h1 className='text-5xl font-bold text-white flex flex-row items-center' >
            <i className='text-white-500 text-2xl mr-2'> <FaLocationDot /> </i>
            {weather.name}
          <sup className='rounded-full px-2 py-1 text-sm font-bold bg-white text-blue-300'>{weather.sys.country}</sup>
        </h1>
        <div className="flex flex-row mt-5 items-center">
          <div className="flex flex-row flex-between items-center">
          <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} width={160} height={160} alt={weather.weather[0].description} />
          <h2 h1 className='lato text-4xl font-bold text-white'>{Math.round(weather.main.temp).toString()}°C</h2>
          </div>
          </div>
          <p className='-mt-4 uppercase text-center text-white'>{weather.weather[0].description}</p>  
      </div>
  </div>
  )
}
