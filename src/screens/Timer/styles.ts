import { StyleSheet } from "react-native";
import { hp, wp } from "../../utils";

export const styles = StyleSheet.create({
    timerScreenContainer: {
        flex: 1,
        backgroundColor: "#141427",
        paddingHorizontal: wp(3),
    },
    sectionTimerPillContainer: {
        width: wp(100),
        gap: wp(3),
    },
    sectionTimerHeaderContainer: {
        flexDirection: 'row', 
        alignItems: 'center', 
        gap: wp(2),
    },
    sectionTimerHeaderText : {
        color: "#fff",
    },
    featureTimerIconStyle : {
        height: hp(5),
        width: wp(5),
    },
    sectionListTimerPillRowContainer: {
        flexDirection: "row",
        gap: wp(2),
        paddingVertical: hp(0.5),
    },
})