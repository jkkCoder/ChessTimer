import { StyleSheet } from "react-native";
import { hp, wp } from "../../utils"

export const styles = StyleSheet.create({
    mainTimerScreenContainer :{
        display: "flex",
        flex: 1,
        position: "relative",
        zIndex: 1,
    },
    timerContainerOne : {
        backgroundColor: "#1f2937",
        height: hp(40),
        width: wp(100),
        justifyContent: "center",
        alignItems: "center",
        transform: [{
            rotateZ: "180deg",
        }],
        gap: hp(1),
    },
    timerContainerTwo : {
        backgroundColor: "#1f2937",
        height: hp(44),
        width: wp(100),
        justifyContent: "center",
        alignItems: "center",
        gap: hp(1),
    },
    playerNameText : {
        fontSize: 18,
        color: "#9ca3af",
        fontWeight: 600,
    },
    playerTimer : {
        fontSize: 96,
        color: "#f9fafb",
    },
    movesCountTextContainer : {
        flexDirection: "row",
        alignItems: "center"
    },
    movesTextLabel : {
        color: "#9ca3af",
        fontSize: 20,
    },
    movesTextValue : {
        fontSize: 20,
        color: "#9ca3af",
        fontWeight: 400,
    },
    mainTimerScreenContainerTwo : {

    },
    chessPlayerControls : {
        height: hp(12),
        backgroundColor: "#111827",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: wp(5),
    },
    controlItem : {
        height: wp(18),
        width: wp(18),
        backgroundColor: "#242e3c",
        borderRadius: wp(9),
        justifyContent: "center",
        alignItems: "center",
    },
    pebbleTimeContainer : {
        backgroundColor: "#242e3c",
        borderWidth: wp(0.2),
        borderRadius: 10,
        paddingTop: hp(0.8),
        paddingBottom: hp(0.8),
        paddingLeft: wp(4),
        paddingRight: wp(4),
        borderColor: "#3741514D"
    },
    pebbleTime : {
        fontSize: 14,
        color: "#9ca3af",
    },
    activePlayerAreaColor : {
        backgroundColor: "#111749",
    },
    inActivePlayerAreaColor : {
        backgroundColor : "#1c2b38"
    },
    confirmationPopupParentContainer : {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
        backgroundColor: 'rgba(0,0,0,0.4)', // Optional: dimmed background
    },
    controlTextStyle : {
        color: "#FFF"
    }
})