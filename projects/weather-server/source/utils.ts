import { WeatherIcons } from '../../weather-common';

export const randomFloat = (min: number, max: number, decimals = 2) => {
  const randomNumber = Math.random() * (max - min + 1) + min;
  const roundFactor = Math.pow(10, decimals);
  return Math.round(randomNumber * roundFactor) / roundFactor;
};

export const randomWeatherIcon = () => {
  const icons = Object.values(WeatherIcons) as WeatherIcons[];
  return icons[Math.floor(Math.random() * icons.length)];
};
