import { SectionList, View } from "react-native";
import { TimerSection, TimerPillItem, timeDuration } from "../../../../constants/timerPillConstants";
import { Text } from "react-native";
import { SvgProps } from "react-native-svg";
// import { styles } from "../../../Timer/styles"
import TimerPill from "../../../../components/timerPill";

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
  console.log("sec", sections)
  return (
    <SectionList
      sections={sections}
      keyExtractor={(item, index) => item.timeDuration + index}
      renderSectionHeader={({ section }) => (
        <View style={styles.sectionTimerHeader}>
          <Icon />
          <Text style={styles.sectionTimerHeaderText}>{section?.title}</Text>
        </View>
      )}
      renderItem={({ item }) => 
        <TimerPill
          displayString={}
          time={}
          incrementalValue={}
        />
      }
    />
  );
};

export default TimerSectionList
