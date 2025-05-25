import React, { useState } from 'react'
import { View, Text, Pressable, SectionList } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { allTimerSections, timeDuration } from '../../constants/timerPillConstants';
import { styles } from './styles'
import TimerSectionList from './components/TimerSectionList';



const Timer: React.FC = () => {
  const navigation = useNavigation<any>()

  const [selectedTimerPillValue, setSelectedTimerPillValue] = useState<{ value: number | { valueOne: number, valueTwo: number }, unit: timeDuration }>();

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
        {allTimerSections?.map(({ key, data, icon }) => (
          <TimerSectionList
            key={key}
            sections={data}
            selectedTimerPillValue={selectedTimerPillValue}
            setSelectedTimerPillValue={setSelectedTimerPillValue}
            Icon={icon}
          />
        ))}
      </View>
    </View>
  )
}

export default Timer