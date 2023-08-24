import { useQuery } from '@tanstack/react-query';
import axios from "axios";

export const useWeather = (location) => {
    
    const URL = 'https://api.openweathermap.org/data/2.5/weather';
    const API_KEY = 'f33a484cf794d08d0148764789aaba32';
    
    const fetchWeather = async (place) => {
        const { data } = await axios.get(URL,{
            params: {
              q:location,
              units: 'metric',
              lang: 'es',
              APPID: API_KEY,
    
            }
        });
        return data;
    } 
    const query = useQuery(['weather', location], () =>  
    fetchWeather(location), {
        enabled: Boolean(location), 
    });
    return query;
}