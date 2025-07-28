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
  const mm = Math.floor(seconds / 60).toString().padStart(2, '0');
  const ss = (seconds % 60).toString().padStart(2, '0');
  return `${mm}:${ss}`;
};