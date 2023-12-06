import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ColumnTxt = (props) => {
    const {txtBottom, txtTop} = props

    return (
    <View style = {styles.columnTexts}>
        <Text style = {[styles.top, styles.txt]}>{txtTop}</Text>
        <Text style = {[styles.bottom,styles.txt]}>{txtBottom}</Text>
    </View>
    )

}

const styles = StyleSheet.create({
    columnTexts: {
        margin: 10,   
    },
    txt: {
        color: 'white',
        alignSelf: 'center',
        padding: 3
    },
    top:{
        fontSize: 15,
        fontWeight: '300',
    },
    bottom: {
        fontWeight: '600',
        fontSize: 17,
    }
})

export default ColumnTxt    