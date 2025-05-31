import React from 'react'
import { Pressable, Text } from 'react-native'
import { ITimerPillProps } from 'interface/timerInterface'
import { styles } from './styles'


const TimerPill: React.FC<ITimerPillProps> = ({ 
    displayString = "",
    time = 0,
    incrementalValue = 0,
    setSelectedTimerPillValue,
}) => {

    const handleGetValuesToParentCB = () => {
      setSelectedTimerPillValue({displayString, time, incrementalValue})
    }

  return (
    <>
      <Pressable style={styles.timerPillContainer} onPress={handleGetValuesToParentCB}>
        <Text style={styles.timerPillText}>{displayString}</Text>
      </Pressable>
    </>
  )
}

export default TimerPill