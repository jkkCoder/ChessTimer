import { SvgProps } from 'react-native-svg';

export interface ITimerPillValue {
  displayString: string;
  time: number; 
  incrementalValue: number;
}

export interface ITimerPillProps {
    displayString: string;
    time: number;
    incrementalValue: number;
}

export interface ITimerControlsObj {
    title: string;
    Icon: React.FC<SvgProps>;
    data: {
        displayString: string;
        time: number;
        incremental: number;
    }[]
}