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
    sliderContainer : {
        borderRadius: wp(2),
        padding: wp(3),
        marginTop: hp(4),
        backgroundColor: "#1c2b38"

    },
    sliderWrapper : {
        width: '93%',
        height:hp(7),
        flexDirection:'row',
        alignItems: 'center',
    },
    sliderparent : {
        flexDirection: 'row',
        width:'100%',
        alignItems:'center',
    },
    slider: {
        width: '100%',
    },
    timeHeader:{
        textAlign: 'center',
        color: 'white'
    }, 
    time: {
        fontWeight: 700,
    },
    startTime:{
        color: 'white'
    },
    endTime:{
        color: 'white'
    },
    selectBtn:{
        justifyContent:'center',
        alignItems:'center',
        alignSelf: 'center',
        backgroundColor: '#141427',
        height: hp(4),
        width: '90%',
        borderRadius: wp(2.5)
    },
    btnColor:{
        color:'white',
        fontSize: wp(4),
        fontWeight: 'bold'
    }
})