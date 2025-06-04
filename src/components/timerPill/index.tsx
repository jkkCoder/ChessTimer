import React from 'react'
import { Pressable, Text } from 'react-native'
import { ITimerPillProps } from 'interface/timerInterface'
import { styles } from './styles'
import { NavigationProp, useNavigation } from '@react-navigation/native'


const TimerPill: React.FC<ITimerPillProps> = ({ 
    displayString = "",
    time = 0,
    incrementalValue = 0,
}) => {

  const navigation = useNavigation<NavigationProp<any>>()

  // const handleGoBackToHomeCB = () => {
  //   navigation.navigate('Home')
  // }

    const handleGetValuesToParentCB = () => {
      navigation.navigate('Home',{
        displayString: displayString,
        time: time,
        incrementalValue: incrementalValue
      })
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