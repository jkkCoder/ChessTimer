import { StyleSheet } from "react-native";
import { hp, wp } from "../../utils";

export const styles = StyleSheet.create({
    timerContainer: {
        flex: 1,
        backgroundColor: "#312d2a",
    },
    timerPillContainerParent: {
        flexDirection : "row",
        marginHorizontal: wp(2),
        marginVertical: hp(1),
        width: wp(100),
        backgroundColor:"pink",
    },
})