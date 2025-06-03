import React, {useState} from 'react';
import {View, Text, Pressable, SectionList} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {chessTimeControls} from '../../constants/timerPillConstants';
import {hp, wp} from '../../utils';
import {styles} from './styles';
import TimerPill from '../../components/timerPill';
import {ITimerPillValue} from 'interface/timerInterface';
import Slider from '@react-native-community/slider';

const Timer: React.FC = () => {
  const navigation = useNavigation<NavigationProp<any>>();

  const [selectedTimerPillValue, setSelectedTimerPillValue] = useState<
    ITimerPillValue | {}
  >({});
  const [initialTime, setSInitialTime] = useState(0);
  const [bonusTime, setBonusTime] = useState(0);

  const handleGoBackToHomeCB = () => {
    navigation.navigate('Home');
  };

  //For Custom timer
  const handleGetValuesToParentCB = () => {
    setSelectedTimerPillValue({
      displayString: `${initialTime} | ${bonusTime}`,
      incrementalValue: bonusTime,
      time: initialTime
    })
  }

  return (
    <View style={styles.timerScreenContainer}>
      <Pressable onPress={handleGoBackToHomeCB}>
        <Text>Go To Home</Text>
      </Pressable>
      <View style={styles.sectionTimerPillContainer}>
        <SectionList
          sections={chessTimeControls}
          keyExtractor={(item, index) => item?.displayString + index}
          renderSectionHeader={({section: {title, Icon: IconComponent}}) => (
            <View style={styles.sectionTimerHeaderContainer}>
              <IconComponent width={wp(5)} height={hp(5)} />
              <Text style={styles.sectionTimerHeaderText}>{title}</Text>
            </View>
          )}
          renderItem={({item, index, section}) => {
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

      <View style={styles.sliderContainer}>
        <Text style={styles.timeHeader}>
          Initial Time <Text style={styles.time}>{initialTime} min</Text>
        </Text>
        <View style={styles.sliderWrapper}>
          <Text style={styles.startTime}>0</Text>
          <View style={styles.sliderparent}>
            <Slider
              style={styles.slider}
              minimumValue={0}
              maximumValue={120}
              value={initialTime}
              thumbTintColor="#D4AF37"
              minimumTrackTintColor="#D4AF37"
              maximumTrackTintColor="#B0B0B0"
              onValueChange={value => setSInitialTime(Math.floor(value))}
            />
          </View>
          <Text style={styles.endTime}>120</Text>
        </View>

        <Text style={styles.timeHeader}>
          Bonus Time <Text style={styles.time}>{bonusTime} sec</Text>
        </Text>
        <View style={styles.sliderWrapper}>
          <Text style={styles.startTime}>0</Text>
          <View style={styles.sliderparent}>
            <Slider
              style={styles.slider}
              minimumValue={0}
              maximumValue={120}
              value={bonusTime}
              thumbTintColor="#D4AF37"
              minimumTrackTintColor="#D4AF37"
              maximumTrackTintColor="#B0B0B0"
              onValueChange={value => setBonusTime(Math.floor(value))}
            />
          </View>
          <Text style={styles.endTime}>60</Text>
        </View>

        <Pressable 
          style={styles.selectBtn}
          onPress={handleGetValuesToParentCB}
        >
          <Text style={styles.btnColor}>Select</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Timer;
