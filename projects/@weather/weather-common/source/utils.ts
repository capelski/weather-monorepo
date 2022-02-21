import { Validation } from './types';

export const validateCityName = (cityName: string | undefined): Validation => {
  return !cityName ? { valid: false, message: 'Missing city name' } : { valid: true };
  /* Demo purposes: uncomment following code to trigger hot reloading */
  // return !cityName
  //   ? { valid: false, message: 'Missing city name' }
  //   : cityName.length < 3
  //   ? { valid: false, message: 'City name must have at least three characters' }
  //   : { valid: true };
};
