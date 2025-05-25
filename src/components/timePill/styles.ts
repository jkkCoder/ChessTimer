import { StyleSheet } from "react-native";
import { hp, wp } from "../../utils";

export const styles = StyleSheet.create({
    timerPillParentContainer: {
        flexDirection: "column",
    },
    timerPillHeaderSection: {
        flexDirection: "row",
    },
    timerPillContainer: {
        backgroundColor: "#464241",
        borderRadius: wp(1),
        width: wp(30),
        height: hp(5),
        justifyContent: "center",
        alignItems: "center",
    },
    timerPillText: {
        color: "#f7f6f4",
        fontSize: hp(2),
        fontWeight: "bold",
        textAlign: "center",
    }
})