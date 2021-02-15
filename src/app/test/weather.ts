import { Weather } from '../services/weather.service';

export const WEATHER: { [key: string]: Weather[] } = {
  today: [
    {
      time: 'afternoon',
      symbol: 'sun',
      temp: 20,
    },
    {
      time: 'evening',
      symbol: 'rain',
      temp: 12,
    },
  ],
  tomorrow: [
    {
      time: 'night',
      symbol: 'moon',
      temp: 6,
    },
    {
      time: 'morning',
      symbol: 'sun',
      temp: 8,
    },
    {
      time: 'afternoon',
      symbol: 'sun',
      temp: 14,
    },
    {
      time: 'evening',
      symbol: 'rain',
      temp: 11,
    },
  ],
  dayAfterTomorrow: [
    {
      time: 'night',
      symbol: 'moon',
      temp: 7,
    },
    {
      time: 'morning',
      symbol: 'rain',
      temp: 13,
    },
    {
      time: 'afternoon',
      symbol: 'rain',
      temp: 15,
    },
    {
      time: 'evening',
      symbol: 'sun',
      temp: 15,
    },
  ],
};
