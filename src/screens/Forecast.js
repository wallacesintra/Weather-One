import React from "react";
import { View, StyleSheet, SafeAreaView, Text, FlatList} from "react-native";
import ListItem from "../components/listItem";
import moment from "moment";

const Forecast = ({weather}) => {
    console.log(`forecast ${weather}`)

    const renderItem = ({item}) => (
        <ListItem
            day = {moment(item.dt).format('dddd')}
            date = {moment(item.dt).format('MMM Do')}
            temp = {item.main.temp}
        />
    )

    return (
        <SafeAreaView style = {styles.container}>
            <Text style= {styles.title}>Forecast Report</Text>
            <FlatList
                data={weather}
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