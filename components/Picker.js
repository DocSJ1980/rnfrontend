import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

import { Picker } from "@react-native-picker/picker";
import { StyledTextInputLabel } from "./styles";
import { Colors } from "./styles";

export const Myselectlist = () => {
    const [town, setTown] = useState('Unknown');

    return (
        <View style={styles.screen}>
            <StyledTextInputLabel>Town: </StyledTextInputLabel>
            <Picker
                selectedValue={town}
                onValueChange={(value, index) => setTown(value)}
                mode="dropdown" // Android only
                style={styles.picker}
            >
                <Picker.Item style={styles.text} label="Please select your town" value="" />
                <Picker.Item style={styles.text} label="Rawal Town" value="Rawal Town" />
                <Picker.Item style={styles.text} label="Pothohar Town" value="Pothohar Town" />
            </Picker>
        </View>
    );
}

// Just some styles
const styles = StyleSheet.create({
    screen: {

    },
    text: {
        textAlign: "center",
        fontSize: 12,
        paddingLeft: 55,
        dropdownIconRippleColor: '#ffffff',
    },
    picker: {
        backgroundColor: "#E5E7EB",
        paddingLeft: 55,
        borderRadius: 55,
        fontSize: 16,
        height: 40,
        marginBottom: 5,
        color: "#1F2937",

    },
});