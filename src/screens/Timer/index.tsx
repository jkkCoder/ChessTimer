import React from 'react'
import { View, Text, Pressable } from 'react-native'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native'
import TimerPill from '../../components/timePill'

const MockForTimerPill = [
  { isSingleOrDouble:'single', timerPillValue: 5, minutesOrSeconds: 'minutes' },
  { isSingleOrDouble:'double', timerPillValue: { valueOne: 5, valueTwo: 10 }},
  { isSingleOrDouble:'double', timerPillValue: { valueOne: 10, valueTwo: 5 }},
]

const Timer = () => {
  const navigation = useNavigation<any>()
  return (
    <View style={styles.timerContainer}>
      <Pressable onPress={() => navigation.navigate('Home')}>
        <Text>Go To Home</Text>
      </Pressable >
      {
        MockForTimerPill?.map((dataToBeMapped: any, index:  number) => {
          return (
            <View key={index} style={styles.timerPillContainerParent}>
              <TimerPill
                isSingleOrDouble={dataToBeMapped?.isSingleOrDouble}
                timerPillValue={dataToBeMapped?.timerPillValue}
                minutesOrSeconds={dataToBeMapped?.minutesOrSeconds}
              />
            </View>
          )
        })
      }
    </View>
  )
}

export default Timer