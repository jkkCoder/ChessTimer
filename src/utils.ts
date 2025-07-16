import moment from 'moment';
import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

const parsePercent = (value:any) => {
  const num = parseFloat(value);
  return isNaN(num) ? 0 : num;
};

export const hp = (value: string | number) => (height * parsePercent(value)) / 100;
export const wp = (value: string | number) => (width * parsePercent(value)) / 100;

// Format "seconds" to "Minute : Seconds" format :
export const formatDuration = (seconds: number | undefined | null): string => {

  if (typeof seconds !== 'number' || isNaN(seconds)) {
    return '00:00';
  }

  if (seconds <= 0) {
    return '00:00';
  }

  return moment.utc(seconds * 1000).format('mm:ss');
};