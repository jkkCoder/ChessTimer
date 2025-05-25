import React from 'react'
import { View, Text, Pressable } from 'react-native'
import { SvgProps } from 'react-native-svg';
import { styles } from './styles'

interface TimerPillProps {
    sectionHeaderValue?:"";
    minutesOrSeconds?: 'minutes' | 'seconds';
    timerPillValue?: number | { valueOne: number, valueTwo: number };
    selectedTimerPillValue?: {value : number | { valueOne: number, valueTwo: number }, unit : 'minutes' | 'seconds'};
    setSelectedTimerPillValue?: React.Dispatch<React.SetStateAction<{
    value: number | {
        valueOne: number;
        valueTwo: number;
    };
    unit: "minutes" | "seconds";
} | undefined>>;
    IconComponent?: React.FC<SvgProps>;
}

const TimerPill: React.FC<TimerPillProps> = ({ 
    sectionHeaderValue="",
    minutesOrSeconds = 'minutes',
    timerPillValue = 0,
    selectedTimerPillValue = 0,
    setSelectedTimerPillValue,
    IconComponent
}) => {

    const handleGetValuesToParentCB = () => {
        !!timerPillValue ? setSelectedTimerPillValue?.({value: timerPillValue, unit: minutesOrSeconds}) : "";    
    }


  return (
    <View style={styles.timerPillParentContainer}>
      <View style={styles.timerPillHeaderSection}>{IconComponent && <IconComponent />} {sectionHeaderValue ? sectionHeaderValue : "Header"}</View>
      <Pressable style={styles.timerPillContainer} onPress={handleGetValuesToParentCB}>
          {typeof timerPillValue === 'number' && (
              <Text style={styles.timerPillText}>{`${timerPillValue} ${minutesOrSeconds === 'minutes' ? 'mins' : minutesOrSeconds === 'seconds' ? 'sec' : ''}`}</Text>
          )}
          {typeof timerPillValue === 'object' && timerPillValue !== null && (
            <Text style={styles.timerPillText}>{`${timerPillValue.valueOne} | ${timerPillValue.valueTwo}`}</Text>
          )}
      </Pressable>
    </View>
  )
}

export default TimerPill