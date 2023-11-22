import React from "react";
import { View, StyleSheet, SafeAreaView, Text} from "react-native";
import ColumnTxt from "../components/ColumnTxt";
import { Feather } from '@expo/vector-icons';

const Forecast = () => {
    return (
        <SafeAreaView style = {styles.container}>
            <Text style= {styles.title}>Forecast Report</Text>
            <View style = {styles.row}>
                <ColumnTxt
                    style = {styles.time}
                    txtTop = {'Friday'}
                    txtBottom = {'May 28'}
                />

                <Text style = {styles.temp}>{`32°`}</Text>

                <Feather style={styles.icon} name={'sun'} size={60} color={'white'}/>

            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#003049',
        alignItems: 'center'
    },
    title: {
        fontSize: 35,
        fontWeight: '600',
        color: 'white',
        alignSelf: 'center'  
    },
    row: {
        
        backgroundColor: '#003869',
        borderRadius: 30,
        margin: 10,
        padding: 5,
        flexDirection: 'row',
        gap: 30,
        justifyContent: 'space-around'
    },
    time: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15
    },
    temp: {
        padding: 15,
        alignSelf: 'center',
        color: 'white',
        fontSize: 45,
        fontWeight: 'bold'
    },
    icon: {
        padding: 15,
        alignSelf: 'center'
    }
})
export default Forecast