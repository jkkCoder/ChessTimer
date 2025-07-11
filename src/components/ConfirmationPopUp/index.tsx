import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { styles } from "./styles";

interface ConfirmationPopUpProps {
    onPressSuccesCB: () => void;
    onPressCancelCB: () => void;
    popupBackgroundColor?: string;
    decisionsTextColor?: string;
    confirmationPropmtText?: string;
    confirmationPropmtTextColor?: string;
    successDecisionText?: string;
    cancelDecisionText?: string;
}

const ConfirmationPopUp: React.FC<ConfirmationPopUpProps> = ({
    onPressSuccesCB = () => { },
    onPressCancelCB = () => { },
    popupBackgroundColor = "#1c2b38",
    decisionsTextColor = "#FFF",
    confirmationPropmtText = "Reset the clock ?",
    confirmationPropmtTextColor = "#FFF",
    successDecisionText = "Yes",
    cancelDecisionText = "No",
}) => {
    return (
        <View style={[styles.confirmationPopUpArea, { backgroundColor: popupBackgroundColor }]}>
            <Text style={[styles.confirmationPropmtTextStyle, { color: confirmationPropmtTextColor }]}>{confirmationPropmtText}</Text>
            <View style={[styles.decisionControlsContainer]}>
                <Pressable onPress={onPressSuccesCB}>
                    <Text style={[styles.successDecisionText, { color : decisionsTextColor }]}>
                        {successDecisionText}
                    </Text>
                </Pressable>
                <Pressable onPress={onPressCancelCB}>
                    <Text style={[styles.cancelDecisionText, { color : decisionsTextColor }]}>
                        {cancelDecisionText}
                    </Text>
                </Pressable>
            </View>
        </View>
    )
}

export default ConfirmationPopUp