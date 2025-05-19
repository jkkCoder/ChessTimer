import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './styles'

interface TimerPillProps {
    isSingleOrDouble?: 'single' | 'double';
    minutesOrSeconds?: 'minutes' | 'seconds';
    timerPillValue?: number | { valueOne: number, valueTwo: number };
}

const TimerPill: React.FC<TimerPillProps> = ({ 
        isSingleOrDouble='',
        minutesOrSeconds='',
        timerPillValue,
    }) => {
  return (
      <View style={styles.timerPillContainer}>
          {isSingleOrDouble === 'single' && (
              <Text style={styles.timerPillText}>{`${timerPillValue} ${minutesOrSeconds === 'minutes' ? 'mins' : minutesOrSeconds === 'seconds' ? 'sec' : ''}`}</Text>
          )}
          {isSingleOrDouble === 'double' && (
            <Text style={styles.timerPillText}>{`${timerPillValue?.valueOne} | ${timerPillValue?.valueTwo}`}</Text>
          )}
      </View>
  )
}

export default TimerPill