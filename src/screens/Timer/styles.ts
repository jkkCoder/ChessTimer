import { StyleSheet } from "react-native";
import { hp, wp } from "../../utils";

export const styles = StyleSheet.create({
    timerContainer: {
        flex: 1,
        backgroundColor: "#312d2a",
    },
    timerPillContainerParent: {
        flexDirection: "column",
        justifyContent: "center",
        width: wp(100),
        gap: wp(3),
    },
    timerSectionContentsContainer: {
        flexDirection: "row",
        justifyContent: "flex-start",
        flexWrap: "wrap",
        width: wp(100),
        gap: wp(3),
        paddingLeft: wp(2),
    },
    timerSectionContentsContainerFlexStart: {
        flexDirection: "row",
        width: wp(100),
        gap: wp(3),
        paddingLeft: wp(2),
        // backgroundColor:"pink"
    },
    sectionTimerHeader: {
        flexDirection: 'column', 
        justifyContent: 'flex-start', 
        alignItems: 'flex-start', 
        marginBottom: 10,
    },
    sectionTimerHeaderText : {
        color: "#fff",
        paddingLeft: wp(2),
    }
})