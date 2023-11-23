import React from "react";
import { View, Text, StyleSheet,SafeAreaView } from "react-native";
import { Feather } from '@expo/vector-icons';
import ColumnTxt from "../components/ColumnTxt";
import moment from "moment";

const CurrentWeather = ({ weather }) => {
    // console.log(`current ${weather.city}`)
    const {list,city,} = weather
    return(
        <SafeAreaView style ={styles.container}>
            <Text style= {styles.cityName}>{`${city.name}`}</Text>
            <Text style={styles.time}>{moment(list[0].dt).format('dddd')}</Text>


            <Feather style={styles.icon} name={'sun'} size={250} color={'white'}/>
            <View style = {styles.row}>
                <ColumnTxt
                    txtTop = {'temp'}
                    txtBottom = {list.main.temp}
                />

                <ColumnTxt
                    txtTop = {'Wind'}
                    txtBottom = {list.wind.speed}
                />

                <ColumnTxt
                    txtTop = {'Humidity'}
                    txtBottom = {list.main.humidity}
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