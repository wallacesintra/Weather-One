import React from "react";
import { View, Text, StyleSheet,SafeAreaView } from "react-native";
import { Feather } from '@expo/vector-icons';
import ColumnTxt from "../components/ColumnTxt";

const CurrentWeather = ({weatherdata}) => {
    console.log(weatherdata)
    return(
        <SafeAreaView style ={styles.container}>
            <Text style= {styles.cityName}>{`Nairobi`}</Text>
            <Text style={styles.time}>November 22, 2023</Text>

            <Feather style={styles.icon} name={'sun'} size={250} color={'white'}/>
            <View style = {styles.row}>
                <ColumnTxt
                    txtTop = {'temp'}
                    txtBottom = {'32°'}
                />

                <ColumnTxt
                    txtTop = {'Wind'}
                    txtBottom = {`10km/h`}
                />

                <ColumnTxt
                    txtTop = {'Humidity'}
                    txtBottom = {`75%`}
                />                           
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#003049',
        flex: 1, 
    },
    cityName: {
        color: 'white',
        margin: 5,
        fontSize: 35,
        fontWeight: '900',
        alignSelf: 'center'
    },
    time: {
        color: 'white',
        padding: 10,
        fontSize: 15,
        alignSelf: 'center'
    },
    icon: {
        alignSelf: 'center',
        padding: 20
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }


})
export default CurrentWeather