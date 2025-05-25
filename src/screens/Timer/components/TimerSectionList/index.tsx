import { SectionList, View } from "react-native";
import { TimerSection, TimerPillItem, timeDuration } from "../../../../constants/timerPillConstants";
import { styles } from "../../../Timer/styles"
import { Text } from "react-native";
import TimerPill from "../../../../components/timePill";
import { SvgProps } from "react-native-svg";

const TimerSectionList = ({
  sections,
  selectedTimerPillValue,
  setSelectedTimerPillValue,
  Icon,
}: {
  sections: TimerSection[],
  selectedTimerPillValue: any,
  setSelectedTimerPillValue: React.Dispatch<any>,
  Icon: React.FC<SvgProps>,
}) => {
  return (
    <SectionList<TimerPillItem, TimerSection>
      sections={sections}
      keyExtractor={(item, index) => item.timeDuration + index}
      renderItem={() => <></>}
      renderSectionHeader={({ section }) => (
        <View style={styles.sectionTimerHeader}>
          <View style={styles.sectionTimerHeader}>
            <Text style={styles.sectionTimerHeaderText}><Icon />{section?.title}</Text>
          </View>
          <View style={styles.timerSectionContentsContainer}>
            {section?.data?.map((item, idx) => (
              <TimerPill
                key={item?.timeDuration + idx}
                timeDuration={item?.timeDuration as timeDuration}
                timerPillValue={item?.timerPillValue}
                selectedTimerPillValue={selectedTimerPillValue}
                setSelectedTimerPillValue={setSelectedTimerPillValue}
              />
            ))}
          </View>
        </View>
      )}
    />
  );
};

export default TimerSectionList
