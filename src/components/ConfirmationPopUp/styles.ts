import { StyleSheet } from "react-native";
import { hp, wp } from "../../utils";

export const styles = StyleSheet.create({
    confirmationPopUpArea : {
        width: wp(80),
        height: hp(15),
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: wp(5),
        paddingRight: wp(5),
        paddingLeft: wp(5),
    },
    successDecisionText : {
        fontSize: wp(5),
    },
    cancelDecisionText : {
        fontSize: wp(5),
    },
    confirmationPropmtTextStyle : {
        fontSize: wp(5),
        textAlign: "left",
        width: wp(65),
    },
    decisionControlsContainer : {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        width: wp(65),
        gap: wp(5),
    }
})