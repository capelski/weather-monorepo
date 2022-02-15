export type Validation =
  | {
      valid: true;
    }
  | {
      valid: false;
      message: string;
    };

export type Weather = {
  icon: WeatherIcons;
  minTemperature: number;
  maxTemperature: number;
  temperature: number;
  windSpeed: number;
};

export enum WeatherIcons {
  clearSky = '01d',
  fewClouds = '02d',
  scatteredClouds = '03d',
  brokenClouds = '04d',
  showerRain = '09d',
  rain = '10d',
  thunderstorm = '11d',
  snow = '13d',
  mist = '50d'
}
