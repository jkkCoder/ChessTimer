import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

const parsePercent = (value:any) => {
  const num = parseFloat(value);
  return isNaN(num) ? 0 : num;
};

export const hp = (value: string | number) => (height * parsePercent(value)) / 100;
export const wp = (value: string | number) => (width * parsePercent(value)) / 100;