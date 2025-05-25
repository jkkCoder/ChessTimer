import React, { useState } from 'react'
import { View, Text, Pressable } from 'react-native'
import { SvgProps } from 'react-native-svg';
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native'
import TimerPill from '../../components/timePill'
import { mockTimerPills } from '../../constants/constants';



const Timer: React.FC = () => {
  const navigation = useNavigation<any>()

  const [selectedTimerPillValue, setSelectedTimerPillValue] = useState<{value : number | { valueOne: number, valueTwo: number }, unit : 'minutes' | 'seconds'}>();

  const handleGoBackToHomeCB = () => {
    navigation.navigate('Home')
  }

  console.log("selectedTimerPillValue", selectedTimerPillValue)
  return (
    <View style={styles.timerContainer}>
      <Pressable onPress={handleGoBackToHomeCB}>
        <Text>Go To Home</Text>
      </Pressable >
      <View style={styles.timerPillContainerParent}>
        {
          mockTimerPills?.map((dataToBeMapped: any, index: number) => {
            return (
              <TimerPill
                sectionHeaderValue={dataToBeMapped?.sectionHeaderValue}
                minutesOrSeconds={dataToBeMapped?.minutesOrSeconds as 'minutes' | 'seconds'}
                timerPillValue={dataToBeMapped?.timerPillValue}
                selectedTimerPillValue={selectedTimerPillValue}
                setSelectedTimerPillValue={setSelectedTimerPillValue}
                IconComponent={dataToBeMapped?.IconComponent}
              />
            )
          })
        }
      </View>
    </View>
  )
}

export default Timer