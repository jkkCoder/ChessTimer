import { StyleSheet } from "react-native";
import { hp, wp } from "../../utils";

export const styles = StyleSheet.create({
    timerContainer: {
        flex: 1,
        backgroundColor: "#312d2a",
    },
    timerPillContainerParent: {
        flexDirection : "row",
        justifyContent: "center",
        width: wp(100),
        gap: wp(3),
    },
})