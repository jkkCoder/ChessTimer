import React from 'react'
import { View, Text, Pressable } from 'react-native'
import { SvgProps } from 'react-native-svg';
import { styles } from './styles'
import { timeDuration } from '../../constants/timerPillConstants';

interface TimerPillProps {
    timeDuration?: timeDuration;
    timerPillValue?: number | { valueOne: number, valueTwo: number };
    selectedTimerPillValue?: {value : number | { valueOne: number, valueTwo: number }, unit : timeDuration};
    setSelectedTimerPillValue?: React.Dispatch<React.SetStateAction<{
    value: number | {
        valueOne: number;
        valueTwo: number;
    };
    unit: timeDuration;
} | undefined>>;
    IconComponent?: React.FC<SvgProps>;
}

const TimerPill: React.FC<TimerPillProps> = ({ 
    timeDuration = 'minutes',
    timerPillValue = 0,
    selectedTimerPillValue = 0,
    setSelectedTimerPillValue,
    IconComponent
}) => {

    const handleGetValuesToParentCB = () => {
        !!timerPillValue ? setSelectedTimerPillValue?.({value: timerPillValue, unit: timeDuration}) : "";    
    }

    const getTimeDurationString = (duration: timeDuration) => {
        switch(duration){
            case "minutes":
                return "mins"
            case "seconds":
                return "secs";
            case "days":
                return "days";
            case "months":
                return "months";
            case "years":
                return "years";
        }
    }


  return (
    <>
      <Pressable style={styles.timerPillContainer} onPress={handleGetValuesToParentCB}>
          {typeof timerPillValue === 'number' && (
              <Text style={styles.timerPillText}>{`${timerPillValue} ${(getTimeDurationString(timeDuration))}`}</Text>
          )}
          {typeof timerPillValue === 'object' && timerPillValue !== null && (
            <Text style={styles.timerPillText}>{`${timerPillValue.valueOne} | ${timerPillValue.valueTwo}`}</Text>
          )}
      </Pressable>
    </>
  )
}

export default TimerPill