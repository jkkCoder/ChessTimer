import React, { useState } from 'react'
import { View, Text, Pressable, SectionList } from 'react-native'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { chessTimeControls } from '../../constants/timerPillConstants';
import { hp, wp } from '../../utils';
import { styles } from './styles'
import TimerPill from '../../components/timerPill';
import { ITimerPillValue } from 'interface/timerInterface';



const Timer: React.FC = () => {
  const navigation = useNavigation<NavigationProp<any>>()

  const [selectedTimerPillValue, setSelectedTimerPillValue] = useState<ITimerPillValue | {}>({});

  console.log({selectedTimerPillValue})

  const handleGoBackToHomeCB = () => {
    navigation.navigate('Home')
  }

  return (
    <View style={styles.timerScreenContainer}>
      <Pressable onPress={handleGoBackToHomeCB}>
        <Text>Go To Home</Text>
      </Pressable >
      <View style={styles.sectionTimerPillContainer}>
        <SectionList
          sections={chessTimeControls}
          keyExtractor={(item, index) => item?.displayString + index}
          renderSectionHeader={({ section: { title, Icon: IconComponent } }) => (
            <View style={styles.sectionTimerHeaderContainer}>
              <IconComponent width={wp(5)} height={hp(5)}/>
              <Text style={styles.sectionTimerHeaderText}>{title}</Text>
            </View>
          )}
          renderItem={({ item, index, section }) => {

            if (index % 3 !== 0) return null;

            const items = section.data;

            return (
              <View style={styles.sectionListTimerPillRowContainer}>
                {[0, 1, 2].map(internalIndex => {
                  const pill = items[index + internalIndex];
                  if (!pill) return null;
                  return (
                    <TimerPill
                      key={pill.displayString + (index + internalIndex)}
                      displayString={pill.displayString}
                      time={pill.time}
                      incrementalValue={pill.incremental}
                      setSelectedTimerPillValue={setSelectedTimerPillValue}
                    />
                  );
                })}
              </View>
            );
          }}
        />
      </View>
    </View>
  )
}

export default Timer