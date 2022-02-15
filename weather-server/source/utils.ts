import { Validation, WeatherIcons } from './types';

export const randomFloat = (min: number, max: number, decimals = 2) => {
  const randomNumber = Math.random() * (max - min + 1) + min;
  const roundFactor = Math.pow(10, decimals);
  return Math.round(randomNumber * roundFactor) / roundFactor;
};

export const randomWeatherIcon = () => {
  const icons = Object.values(WeatherIcons) as WeatherIcons[];
  return icons[Math.floor(Math.random() * icons.length)];
};

export const validateCityName = (cityName: string | undefined): Validation => {
  return !cityName ? { valid: false, message: 'Missing city name' } : { valid: true };
  /* Demo purposes: uncomment following code to trigger hot reloading */
  // return !cityName
  //   ? { valid: false, message: 'Missing city name' }
  //   : cityName.length < 3
  //   ? { valid: false, message: 'City name must have at least three characters' }
  //   : { valid: true };
};
