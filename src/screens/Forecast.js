import React from "react";
import { View, StyleSheet, SafeAreaView, Text, FlatList} from "react-native";
import ListItem from "../components/listItem";

const DATA = [
    {
        day: 'Friday',
        date: 'May 37',
        temp: '20',
    },
    {
        day: 'Friday',
        date: 'May 37',
        temp: '20',
    },
    {
        day: 'Friday',
        date: 'May 37',
        temp: '20',
    }, 
    {
        day: 'Friday',
        date: 'May 37',
        temp: '20',
    },
    {
        day: 'Friday',
        date: 'May 37',
        temp: '20',
    },
    {
        day: 'Friday',
        date: 'May 37',
        temp: '20',
    },
    {
        day: 'Friday',
        date: 'May 37',
        temp: '20',
    },

]

const Forecast = ({weatherData}) => {
    const renderItem = ({item}) => (
        <ListItem
            day = {item.day}
            date = {item.date}
            temp = {item.temp}
        />
    )

    return (
        <SafeAreaView style = {styles.container}>
            <Text style= {styles.title}>Forecast Report</Text>
            <FlatList
                data={DATA}
                renderItem={renderItem}
            />

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
    
})
export default Forecast