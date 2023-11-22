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
        margin: 15,   
    },
    txt: {
        color: 'white',
        alignSelf: 'center',
        padding: 3
    },
    top:{
        fontSize: 18,
        fontWeight: '700',
    },
    bottom: {
        fontWeight: '400',
        fontSize: 15,
    }
})

export default ColumnTxt    